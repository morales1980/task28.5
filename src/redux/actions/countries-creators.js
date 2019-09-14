import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from './countries-actions';

function getCountries() {
  return {
    type: GET_COUNTRIES
  }
}

function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  }
}

function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  }
}

function searchCountries(searchPhrase) {
  return {
    type: SEARCH_COUNTRIES,
    searchPhrase
  }
}

function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  }
}

export {getCountries, getCountry, deleteCountry, searchCountries, setContinent};
