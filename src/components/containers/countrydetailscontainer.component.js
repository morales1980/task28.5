import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountry} from '../../redux/actions/countries-creators';
import CountryDetails from '../presentationals/countrydetails.component';

class CountryDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }

  render() {
    return (
      <CountryDetails country={this.props.selectedCountry}/>
    );
  }
}

const mapStateToProps = (store) => ({
   selectedCountry: store.countriesReducer.selectedCountry
});

export default connect(mapStateToProps)(CountryDetailsContainer);
