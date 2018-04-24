import React, {Fragment} from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  stateType(type) {
    let data = {
      display: this.state[type] ? 'block' : 'none'
    };
    return data;
  }

  toggleSub(item) {
    if(item === 'yes') {
      this.setState({showYes: true, showNo: false});
    } else {
      this.setState({showYes: false, showNo: true});
    }
    this.setState({showYes: item === 'yes' ? true : false});
  }

  componentWillMount() {
    if(this.props.props.values[`${this.props.props.input.name}`]) {
      this.setState({showYes: true});
    }
  }

  render() {
    let prop = this.props.props;
    let value = prop.values[`${prop.input.name}`];

    return (
      <Fragment>
        <div>
          {prop.options && prop.options.map((item, key) => {

            let checked = value && item === 'yes' ? 'checked' : '';
            return <label key={key}>
              <input {...prop.input} type="radio" checked={checked} value={item} onClick={()=>{
                this.toggleSub(item); 
              }}
              />
              <span>{item}</span>
            </label>;
          })}
        </div>
        {this.props.fieldType === 'radio' &&
          <FieldRadio
            showYes={this.stateType('showYes')}
            showNo={this.stateType('showNo')}
            prop={prop}
            showSub={this.stateType('sub')}
          />
        }
        {this.props.fieldType === 'text' && <FieldText showYes={this.stateType('showYes')} prop={prop} /> }
      </Fragment>
    );
  }
}

const FieldRadio = props => {
  return (
    <Fragment>
      {<div style={props.showYes}>{props.prop.optionsText[0]}</div>}
      {<div style={props.showNo}>
        <FieldSet prop={props.prop}/>
        <p style={props.showSub}>A council officer will contact you about further information you will need to provide before processing your application.</p>
      </div>}
    </Fragment>
  );
};

const FieldText = props => {
  // console.log('fieldText', `${props.prop.input.name}`);
  let field = `${props.prop.input.name}`;
  let value = `${props.prop.values[field]}`;
  return (
    <div>
      {props.showYes && <div style={props.showYes}>
        {props.prop.instructionsSecondary && <label style={{marginTop: '35px'}}>{props.prop.textFieldLabel}</label>}
        <p>{props.prop.instructionsSecondary}</p>
        <input type="number" name={`${props.prop.input.name}`} defaultValue={value ? value : ''} placeholder={props.prop.placeholder} />
      </div>}
    </div>
  );
};

const FieldSet = props => {
  return (
    <fieldset style={{marginTop: '35px'}}>
      <legend style={{marginBottom: '15px'}}>{props.prop.optionsText[1]}</legend>
      <RadioChild name={props.prop.input.name}/>
    </fieldset>
  );
};

class RadioChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: false
    };
  }
  sub() {
    this.setState({
      sub: !this.state.sub
    });
  }
  render() {
    return (
      <div>
        {[ 'Yes', 'No' ].map((item, key)=>{
          return <label key={key}><input type="radio" name={`${this.props.name}`} onClick={this.sub.bind(this)} /><span>{item}</span></label>;
        })}
      </div>
    );
  }
}

export default Radio;
