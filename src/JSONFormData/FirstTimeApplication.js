import TextField from '../components/Forms/TextField';
import RadioWithRadio from '../components/Forms/RadioWithRadio';
import IncomeListSection from '../components/Forms/IncomeListSection';

const firstTimeApplication = [
  {
    label: {
      en: {
        text: 'Were you living with a partner or joint home owner(s) on July 1 2017?',
      },
      mi: {
        text: 'Were you living with a partner or joint home owner(s) on July 1 2017?',
      },
    },
    instructions: {
      en: {
        text: '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.',
      },
      mi: {
        text: '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.',
      },
    },
    options: {
      en: {
        text: ['yes','no'],
      },
      mi: {
        text: ['ae', 'kaore'],
      },
    },
    isRequired: true,
    component: IncomeListSection,
    field_name: 'income_page_2',
  },
  {
    theme: 'theme-sand',
    label: {
      en: {
        text: 'Do you earn money from home or run a business from home?',
      },
      mi: {
        text: 'Do you earn money from home or run a business from home?',
      },
    },
    instructionsSecondary: {
      en: {
        text: 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.',
      },
      mi: {
        text: 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.',
      },
    },
    options: {
      en: {
        text: ['yes', 'no'],
      },
      mi: {
        text: ['ae', 'kaore'],
      },
    },
    component: RadioWithRadio,
    field_name: 'has_home_business',
    toggleByOption: 'Yes',
    childFieldName: 'deducts_over_half_rates',
    optionsText: {
      en: {
        text: ['', 'Did you deduct over 50% of your rates as expenses for the 2016/2017 tax year?'],
      },
      mi: {
        text: ['', 'Did you deduct over 50% of your rates as expenses for the 2016/2017 tax year?'],
      },
    },
    placeholder: {
      en: {
        text: 'Enter the total amount',
      },
      mi: {
        text: 'Enter the total amount',
      },
    },
  },
  {
    component: TextField,
    field_name: 'email',
    instructions: {
      en: {
        text: 'This email address will be used to send you a confirmation and instructions for this application. The phone number will be used to contact you if additional details are required.',
      },
      mi: {
        text: 'This email address will be used to send you a confirmation and instructions for this application. The phone number will be used to contact you if additional details are required.',
      },
    },
    label: {
      en: {
        text: 'What is your email address?',
      },
      mi: {
        text: 'What is your email address?',
      },
    },
  },
  {
    component: TextField,
    field_name: 'phone_number',
    checkboxFieldName: 'email_phone_can_be_used',
    checkboxLabel: {
      en: {
        text: 'Are you happy for the email address and/or phone number to be used for other Council communications?',
      },
      mi: {
        text: 'Are you happy for the email address and/or phone number to be used for other Council communications?',
      },
    },
    label: {
      en: {
        text: 'What is your phone number?',
      },
      mi: {
        text: 'What is your phone number?',
      },
    },
  },
];

export default firstTimeApplication;
