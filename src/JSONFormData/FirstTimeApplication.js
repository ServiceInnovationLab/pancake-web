import React from 'react';

import RenderTextField from '../components/Forms/RenderTextField';
import RenderRadio from '../components/Forms/RenderRadio';
import RenderCheckbox from '../components/Forms/RenderCheckbox';
import TextBoxWithAccordian from '../components/Forms/TextboxWithAccordian';
import TextFieldWithCheckbox from '../components/Forms/TextFieldWithCheckbox';
import RadioWithRadio from '../components/Forms/RadioWithRadio';
import RadioWithTextField from '../components/Forms/RadioWithTextField';
import RadioWithSelect from '../components/Forms/RadioWithSelect';
// import RadioWithText from '../components/Forms/RadioWithText';

// const firstTimeApplication = [
//   {
//     'label': {
//       'en': {
//         'text': 'What is your full name?'
//       },
//       'mi': {
//         'text': 'Ko wai tō ingoa?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'Your name must be on the title for this property on the Rating Information Database (RID) at your local council.'
//       },
//       'mi': {
//         'text': 'Your name must be on the title for this property on the Rating Information Database (RID) at your local council.'
//       }
//     },
//     'isRequired': true,
//     'component': RenderTextField,
//     'extraInfoType': 'accordian',
//     'hasExtraInfo': true,
//     'extraInfo': {
//       'label': {
//         'en': {
//           'text': 'What if my name isn’t on the RID?'
//         },
//         'mi': {
//           'text': 'What if my name isn’t on the RID?'
//         }
//       },
//       'content': {
//         'en': {
//           'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form.'
//         },
//         'mi': {
//           'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form.'
//         }
//       }
//     }
//   },
//   {
//     'label': {
//       'en': {
//         'text': 'What is your address?'
//       },
//       'mi': {
//         'text': 'Ko wai tō wāhi noho?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'Please use the name you use on the property title'
//       },
//       'mi': {
//         'text': 'Please use the name you use on the property title'
//       }
//     },
//     'isRequired': true,
//     'component': RenderTextField,
//     'hasAddressFinder': true,
//     'extraInfoType': 'checkbox',
//     'hasExtraInfo': true,
//     'extraInfo': {
//       'label': {
//         'en': {
//           'text': 'I live in a retirement village or am an owner-occupier'
//         },
//         'mi': {
//           'text': 'I live in a retirement village or am an owner-occupier'
//         }
//       },
//       'content': {
//         'en': {
//           'text': 'There is an additional form that you will need to complete and bring with you when you witness your application. This can be downloaded here '
//         },
//         'mi': {
//           'text': 'There is an additional form that you will need to complete and bring with you when you witness your application. This can be downloaded here '
//         }
//       }
//     }
//   },
//   {
//     'label': {
//       'en': {
//         'text': 'Did you live here at 1st July?'
//       },
//       'mi': {
//         'text': 'Did you live here at 1st July?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'Select no you were not living at the address on 1 July 2017, e.g. had not moved in yet, or have been away for 12 months or longer.  If no, you may not be able to get a rebate for this property. <br />Select yes if you were not living at the address at this date because of a temporary absence due to hospital stays, holidays, or similar, but did still normally reside at this address.'
//       },
//       'mi': {
//         'text': 'Select no you were not living at the address on 1 July 2017, e.g. had not moved in yet, or have been away for 12 months or longer.  If no, you may not be able to get a rebate for this property. <br />Select yes if you were not living at the address at this date because of a temporary absence due to hospital stays, holidays, or similar, but did still normally reside at this address.'
//       }
//     },
//     'options': {
//       'en': {
//         'text': ['yes','no']
//       },
//       'mi': {
//         'text': ['ae', 'kaore']
//       }
//     },
//     'isRequired': true,
//     'component': RenderRadio
//   },
  // {
  //   'label': {
  //     'en': {
  //       'text': 'Do you have a partner or joint home owner(s) who was living with you on July 1st 2017?'
  //     },
  //     'mi': {
  //       'text': 'Do you have a partner or joint home owner(s) who was living with you on July 1st 2017?'
  //     }
  //   },
  //   'instructions': {
  //     'en': {
  //       'text': '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.'
  //     },
  //     'mi': {
  //       'text': '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.'
  //     }
  //   },
  //   'options': {
  //     'en': {
  //       'text': ['yes','no']
  //     },
  //     'mi': {
  //       'text': ['ae', 'kaore']
  //     }
  //   },
  //   'isRequired': true,
  //   'component': RenderRadio
  // },
//   {
//     'label': {
//       'en': {
//         'text': 'Do you have dependants?'
//       },
//       'mi': {
//         'text': 'Do you have dependants?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'Dependants are:<br/><ul>/li><children you care and provide for under the age of 18 on 1 July 2017 and who at this time were not married and for whom you were not receiving payments under section 363 of the Children, Young Persons, and their Families Act 1989</li><li>relatives in receipt of a benefit (but not NZ Superannuation) on 1 July 2017</li></ul>'
//       },
//       'mi': {
//         'text': 'Dependants are:<br/><ul>/li><children you care and provide for under the age of 18 on 1 July 2017 and who at this time were not married and for whom you were not receiving payments under section 363 of the Children, Young Persons, and their Families Act 1989</li><li>relatives in receipt of a benefit (but not NZ Superannuation) on 1 July 2017</li></ul>'
//       }
//     },
//     'options': {
//       'en': {
//         'text': ['yes','no']
//       },
//       'mi': {
//         'text': ['ae', 'kaore']
//       }
//     },
//     'isRequired': true,
//     'component': RenderRadio
//   },
//   {
//     'label': {
//       'en': {
//         'text': 'Do you earn money from home or run a business from home?'
//       },
//       'mi': {
//         'text': 'Do you earn money from home or run a business from home?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.'
//       },
//       'mi': {
//         'text': 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.'
//       }
//     },
//     'options': {
//       'en': {
//         'text': ['yes','no']
//       },
//       'mi': {
//         'text': ['ae', 'kaore']
//       }
//     },
//     'isRequired': true,
//     'component': RenderRadio
//   },
//   {
//     'label': {
//       'en': {
//         'text': 'What was your total income for the 2016/2017 tax year?'
//       },
//       'mi': {
//         'text': 'What was your total income for the 2016/2017 tax year?'
//       }
//     },
//     'instructions': {
//       'en': {
//         'text': 'This is the money received, before tax, for the year 1 April 2016 to 31 March 2017. <br/>Enter any income you or your partner/joint home owner(s) received for the tax year. Use gross amounts unless otherwise indicated. Select any that you receive'
//       },
//       'mi': {
//         'text': 'This is the money received, before tax, for the year 1 April 2016 to 31 March 2017. <br/>Enter any income you or your partner/joint home owner(s) received for the tax year. Use gross amounts unless otherwise indicated. Select any that you receive'
//       }
//     },
//     'isRequired': true,
//     'component': RenderTextField,
//     'extraInfoType': 'accordian',
//     'hasExtraInfo': true,
//     'extraInfo': {
//       'label': {
//         'en': {
//           'text': 'What if my name isn’t on the RID?'
//         },
//         'mi': {
//           'text': 'What if my name isn’t on the RID?'
//         }
//       },
//       'content': {
//         'en': {
//           'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form.'
//         },
//         'mi': {
//           'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form.'
//         }
//       }
//     }
//   },
//   {
//     'label': {
//       'en': {
//         'text': 'Other'
//       },
//       'mi': {
//         'text': 'Other'
//       }
//     },
//     'isRequired': true,
//     'component': RenderCheckbox,
//     'hasHeader': true,
//     'isNested': true,
//     'hasChildren': true
//   }
// ];

const firstTimeApplication = [
  {
    'component': TextBoxWithAccordian,
    'label': {
      'en': {
        'text': 'What is your full name?'
      },
      'mi': {
        'text': 'Ko wai to ingoa?'
      }
    },
    'instructions': {
      'en': {
        'text': 'Your name must be on the title for the property you are applying for on the Rating Information Database (RID) at your local council.  '
      },
      'mi': {
        'text': 'Your name must be on the title for the property you are applying for on the Rating Information Database (RID) at your local council.'
      }
    },
    'accordianLabel': {
      'en': {
        'text': 'What if my name isn’t on the RID?'
      },
      'mi': {
        'text': 'What if my name isn’t on the RID?'
      }
    },
    'accordianText': {
      'en': {
        'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form. '
      },
      'mi': {
        'text': 'If your name isn’t on the RID because you are a retirement village resident or an owner-occupiers you will need to fill in an additional declaration form.'
      }
    }
  },
  {
    'component': TextFieldWithCheckbox,
    'hasAddressFinder': true,
    'label': {
      'en': {
        'text': 'What is your address?'
      },
      'mi': {
        'text': 'What is your address?'
      }
    },
    'instructions': {
      'en': {
        'text': 'Your name must be on the title for the property you are applying for on the Rating Information Database (RID) at your local council.  '
      },
      'mi': {
        'text': 'Your name must be on the title for the property you are applying for on the Rating Information Database (RID) at your local council.'
      }
    },
    'checkboxLabel': {
      'en': {
        'text': 'I live in a retirement village or am an owner-occupier'
      },
      'mi': {
        'text': 'I live in a retirement village or am an owner-occupier'
      }
    },
    'checkboxText': {
      'en': {
        'text': 'There is an additional form that you will need to complete and bring with you when you witness your application. This can be downloaded here'
      },
      'mi': {
        'text': 'There is an additional form that you will need to complete and bring with you when you witness your application. This can be downloaded here'
      }
    }
  },
  {
    'component': RadioWithRadio,
    'label': {
      'en': {
        'text': 'Did you live here at 1 July 2017?'
      },
      'mi': {
        'text': 'Did you live here at 1 July 2017?'
      }
    },
    'instructions': {
      'en': {
        'text': 'Select no if you were not living at the address on 1 July 2017, e.g. had not moved in yet, or have been away for 12 months or longer.  If no, you may not be able to get a rebate for this property. <br />Select yes if you were not living at the address at this date because of a temporary absence due to hospital stays, holidays, or similar, but did still normally reside at this address. '
      },
      'mi': {
        'text': 'Select no if you were not living at the address on 1 July 2017, e.g. had not moved in yet, or have been away for 12 months or longer.  If no, you may not be able to get a rebate for this property. <br />Select yes if you were not living at the address at this date because of a temporary absence due to hospital stays, holidays, or similar, but did still normally reside at this address.'
      }
    },
    'options': {
      'en': {
        'text': ['yes', 'no']
      },
      'mi': {
        'text': ['yes', 'no']
      }
    },
    'optionsText': {
      'en': {
        'text': ['', 'Were you living in another property that you owned on 1 July 2017, have sold that property, and moved to the address of the property you are currently living in during the the current rating year (1 July 2017-30 June 2018)?']
      },
      'mi': {
        'text': ['', 'Were you living in another property that you owned on 1 July 2017, have sold that property, and moved to the address of the property you are currently living in during the the current rating year (1 July 2017-30 June 2018)?']
      }
    },
    'accordianLabel': {
      'en': {
        'text': 'If you move house during the rates year'
      },
      'mi': {
        'text': 'If you move house during the rates year'
      }
    },
    'accordianText': {
      'en': {
        'text': 'You can still get a rates rebate if you move house, as long as you haven\'t claimed the rebate on your previous house. When you fill out the application form, you\'ll need to give information about the property you sold, including: <ul><li>the settlement date</li><li>what rates you paid for the current year. If the rebate for your previous house was quite small and the rates on your new house are much higher, ask your council if you can have your rebate assessed again.</li></ul>'
      },
      'mi': {
        'text': 'You can still get a rates rebate if you move house, as long as you haven\'t claimed the rebate on your previous house. When you fill out the application form, you\'ll need to give information about the property you sold, including: <ul><li>the settlement date</li><li>what rates you paid for the current year. If the rebate for your previous house was quite small and the rates on your new house are much higher, ask your council if you can have your rebate assessed again.</li></ul>'
      }
    }
  },
  {
    'label': {
      'en': {
        'text': 'Do you have a partner or joint home owner(s) who was living with you on July 1st 2017?'
      },
      'mi': {
        'text': 'Do you have a partner or joint home owner(s) who was living with you on July 1st 2017?'
      }
    },
    'instructions': {
      'en': {
        'text': '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.'
      },
      'mi': {
        'text': '\'Partner\' is a person you are married to/in a civil union, or de facto relationship with.'
      }
    },
    'options': {
      'en': {
        'text': ['yes','no']
      },
      'mi': {
        'text': ['ae', 'kaore']
      }
    },
    'isRequired': true,
    'component': RenderRadio
  },
  {
    'label': {
      'en': {
        'text': 'Do you have dependants?'
      },
      'mi': {
        'text': 'Do you have dependants?'
      }
    },
    'instructions': {
      'en': {
        'text': 'Dependants are: children you care and provide for under the age of 18 on 1 July 2017 and who at this time were not married and for whom you were not receiving payments under section 363 of the Children, Young Persons, and their Families Act 1989 relatives in receipt of a benefit (but not NZ Superannuation) on 1 July 2017.'
      },
      'mi': {
        'text': 'Dependants are: children you care and provide for under the age of 18 on 1 July 2017 and who at this time were not married and for whom you were not receiving payments under section 363 of the Children, Young Persons, and their Families Act 1989 relatives in receipt of a benefit (but not NZ Superannuation) on 1 July 2017.'
      }
    },
    'options': {
      'en': {
        'text': ['yes','no']
      },
      'mi': {
        'text': ['ae', 'kaore']
      }
    },
    'isRequired': true,
    'component': RadioWithTextField,
    'textFieldLabel': {
      'en': {
        'text': 'label'
      },
      'mi': {
        'text': ['ae', 'kaore']
      }
    },
    'placeholder': {
      'en': {
        'text': 'Enter the total amount'
      },
      'mi': {
        'text': 'Enter the total amount'
      }
    }
  },
  {
    'label': {
      'en': {
        'text': 'Do you earn money from home or run a business from home?'
      },
      'mi': {
        'text': 'Do you earn money from home or run a business from home?'
      }
    },
    'instructionsSecondary': {
      'en': {
        'text': 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.'
      },
      'mi': {
        'text': 'If yes, and you deducted over 50% of your rates as expenses, you may not be able to get a rebate. If your property is mainly used for commercial activities, for example farming or business, you cannot apply for a rates rebate.'
      }
    },
    'options': {
      'en': {
        'text': ['yes','no']
      },
      'mi': {
        'text': ['ae', 'kaore']
      }
    },
    'component': RadioWithTextField,
    'textFieldLabel': {
      'en': {
        'text': 'Please describe how you earn money or what business you run'
      },
      'mi': {
        'text': 'Please describe how you earn money or what business you run'
      }
    },
    'placeholder': {
      'en': {
        'text': 'Enter the total amount'
      },
      'mi': {
        'text': 'Enter the total amount'
      }
    }
  },
  {
    'label': {
      'en': {
        'text': 'What was your total income for the 2016/2017 tax year?'
      },
      'mi': {
        'text': 'What was your total income for the 2016/2017 tax year?'
      }
    },
    'instructions': {
      'en': {
        'text': 'This is the money received, before tax, for the year 1 April 2016 to 31 March 2017. Enter any income you or your partner/joint home owner(s) received for the tax year. Use gross amounts unless otherwise indicated. Select any that you receive'
      },
      'mi': {
        'text': 'This is the money received, before tax, for the year 1 April 2016 to 31 March 2017. Enter any income you or your partner/joint home owner(s) received for the tax year. Use gross amounts unless otherwise indicated. Select any that you receive'
      }
    },
    'accordianLabel': {
      'en': {
        'text': 'What is a gross amount?'
      },
      'mi': {
        'text': 'What is a gross amount?'
      }
    },
    'accordianText': {
      'en': {
        'text': 'Satisfactory proof of income includes: <ul><li>income confirmation from Work and Income</li><li>income confirmation from Inland Revenue</li><li>investment earning statements for the tax year </li><li>statement of earnings from your employer.</li>Additionally for self-employed people:</li><li>a copy of your complete set of financial accounts, IR3B or IR10 you provided to Inland Revenue for the income year 1 April 2016 to 31 March 2017</li><li>you cannot offset business losses against other income</li><li>business losses should be entered as $0.</li></ul>'
      },
      'mi': {
        'text': 'Satisfactory proof of income includes: <ul><li>income confirmation from Work and Income</li><li>income confirmation from Inland Revenue</li><li>investment earning statements for the tax year </li><li>statement of earnings from your employer.</li>Additionally for self-employed people:</li><li>a copy of your complete set of financial accounts, IR3B or IR10 you provided to Inland Revenue for the income year 1 April 2016 to 31 March 2017</li><li>you cannot offset business losses against other income</li><li>business losses should be entered as $0.</li></ul>'
      }
    },
    'component': RadioWithSelect
  },
  {
    'component': TextFieldWithCheckbox,
    'hasAddressFinder': false,
    'label': {
      'en': {
        'text': 'What is your email address?'
      },
      'mi': {
        'text': 'What is your email address?'
      }
    },
    'instructions': {
      'en': {
        'text': 'This will be used so that we can send you a copy of your application.'
      },
      'mi': {
        'text': 'This will be used so that we can send you a copy of your application.'
      }
    },
    'checkboxLabel': {
      'en': {
        'text': 'I do not have an email address'
      },
      'mi': {
        'text': 'I do not have an email address'
      }
    }
  },
  {
    'component': TextBoxWithAccordian,
    'label': {
      'en': {
        'text': 'What is your phone number?'
      },
      'mi': {
        'text': 'What is your phone number?'
      }
    },
    'instructions': {
      'en': {
        'text': 'What is your phone number?'
      },
      'mi': {
        'text': 'What is your phone number?'
      }
    },
    'instructions': {
      'en': {
        'text': 'This will be used so that we can send you a text confirming that your application has been received.'
      },
      'mi': {
        'text': 'This will be used so that we can send you a text confirming that your application has been received.'
      }
    }
  }
];

export default firstTimeApplication;

