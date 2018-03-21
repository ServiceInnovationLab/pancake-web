import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../helpers/validate';
import ReapplyFormData from '../../JSONFormData/ReapplyFormData';
import TextField from '../Forms/TextField';
import RadioGroup from '../Forms/RadioGroup';
import CheckboxGroup from '../Forms/CheckboxGroup';
import Select from '../Forms/Select';
import '../../styles/Select.css';

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: 'en',
      page: 1
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleFieldType = type => {
    switch(type) {
    case 'radio':
      return RadioGroup;
    case 'checkbox':
      return CheckboxGroup;
    case 'select':
      return Select;
    default:
      return TextField;
    }
  }

  handleLanguageChange = lang => {
    this.setState({lng: lang});
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className="container">

        <div className="btn-group">
          <a onClick={()=>{this.handleLanguageChange('en');}} className={this.state.lng === 'en' ? 'btn active' : 'btn'}>English</a>
          <a onClick={()=>{this.handleLanguageChange('ma');}} className={this.state.lng === 'ma' ? 'btn active' : 'btn'}>Māori</a>
        </div>

        <h1>Re-apply for a Rebate</h1>

        <form name="wizard-reapply" onSubmit={handleSubmit((values) => console.log(values))}>
          {ReapplyFormData.map((field, key) => (
            <Field
              key={key}
              label={field.question}
              name={field.name}
              instructions={field.instructions}
              isRequired={true}
              component={this.handleFieldType(field.type)}
              options={field.options && field.options}
              lang={this.state.lng}
              id={field.name}
            />
          ))}
          <Field
            name="isUnableToVisit"
            component={checkBox}
          />
          <div>
            <button type="submit" className="btn-primary">
              Send application
            </button>
          </div>
        </form>
      </div>
    )
  }
};

const checkBox = props => {
  return(
    <fieldset className="checkbox-group">
      <div>
        <div>
          <div>
            <div>
              <label>
                <input type="checkbox" {...props.input} />
                <span>I can't make it to the service centre and want to get my<br/>signature witnessed by a Justice of Peace somewhere else.</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default reduxForm({
  form: 'wizard-reapply',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Page1);
