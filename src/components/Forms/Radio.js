import React, { Fragment } from 'react';
import { Field } from 'redux-form';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideButtons: false
    };
  }

  stateType(type) {
    const data = {
      display: this.state[type] ? 'block' : 'none'
    };
    return data;
  }

  toggleSub(item) {
    if(this.props.toggleByOption) {
      if (item.toLowerCase() === this.props.toggleByOption.toLowerCase()) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.props.input.name === 'dependants' && this.state.hideButtons ? '' :
            this.props.options && this.props.options.map((item, key) => {
              return <label key={key}>
                <input
                  {...this.props.input} ref={i => this[`option${key+1}`] = i} type="radio" value={item} onClick={e => {
                    this.toggleSub(item);
                    if(this.props.handleLivingSituation) {
                      this.props.handleLivingSituation && this.props.handleLivingSituation(e);
                    }
                  }}
                />
                <span>{item}</span>
              </label>;
            })
          }
        </div>
        {this.props.fieldType === 'radio' && this.state.show &&
      <fieldset className="field radio-group">
        <legend>{this.props.optionsText[1]}</legend>
        <div>
          <div>
            {['Yes', 'No'].map((item, key) => {
              return <label key={key}>
                <Field
                  name={this.props.childFieldName}
                  component={renderField}
                  item={item}
                  onChange={e => {
                    if(this.props.handleBusiness) {
                      this.props.handleBusiness(e);
                    }
                  }}
                />
                <span>{item}</span></label>;
            })}
          </div>
        </div>
      </fieldset>
        }
      </Fragment>
    );
  }
}


const renderField = field => <input {...field.input} type='radio' value={field.item.toLowerCase()} />;

export default Radio;
