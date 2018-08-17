import React from 'react';
import ErrorMessage from '../../components/Forms/Error';
import Accordian from '../../components/Forms/Accordian';
import Radio from '../../components/Forms/Radio';

export default class RadioWithRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      sub: false
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    return (
      <div>
        <fieldset className='field radio-group'>
          {this.props.label && <legend>
            {this.props.label}
          </legend>}
          <div>
            {this.props.handleLivingSituation &&
              <Radio {...this.props} handleLivingSituation={this.props.handleLivingSituation} fieldType="radio" />
            }
            {!this.props.handleLivingSituation && !this.props.handleBusiness &&
              <Radio {...this.props} fieldType="radio" />
            }
            {this.props.handleBusiness &&
              <Radio {...this.props} fieldType="radio" handleBusiness={this.props.handleBusiness} />
            }
          </div>
          {this.props.instructions && <p dangerouslySetInnerHTML={{ __html: this.props.instructions }}></p>}
          {this.props.accordianLabel && <Accordian label={this.props.accordianLabel} text={this.props.accordianText} />}
          <ErrorMessage fields={this.props.meta} />
        </fieldset>
      </div>
    );
  }
}
