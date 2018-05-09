import React, {Fragment} from 'react';
import axios from 'axios';
import config from '../../config';

class Eligible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rebate: null};
  }


  componentWillReceiveProps(nextProps) {
    this.setState({rebate: null});
    if (nextProps.dependants && nextProps.rates_bill && nextProps.income) {
      let data = {
        'persons': {
          'Tahi': {
            'salary': {
              '2017': nextProps.income
            },
            'dependants': {
              '2017': nextProps.dependants
            }
          }
        },
        'properties': {
          'property_1': {
            'owners': [ 'Tahi' ],
            'rates': {
              '2017': nextProps.rates_bill
            },
            'rates_rebate': {
              '2017': null
            }
          }
        }
      };

      axios
        .post(`${config.OPENFISCA_ORIGIN}`, data)
        .then(res => {
          this.setState({rebate: res.data.properties.property_1.rates_rebate['2017']});
        })
        .catch(err => console.log('err fetching properties', err));
    } else {
      this.setState({minimum_income_for_no_rebate: null, maximum_income_for_full_rebate: null});
    }
  }

  formatDollars(number) {
    return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    if (this.state.rebate !== null) {
      return (
        <div className="arrow-box secondary">
          <p className="heading-paragraph">
            You are eligible for
            <span> ${this.formatDollars(this.state.rebate)}</span>
          </p>
          <p className="help-text">(Assuming you meet the criteria)</p>
        </div>
      );
    }
    
    return '';
    
  }
}

export default Eligible;
