import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import Header from './components/Header';
import CountryRow from './components/CountryRow';
import Search from './components/Search';
import Select from './components/Select';
import CountryPage from './components/pages/CountryPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const[countries, setCountries] = useState([]);
  const[query, setQuery] = useState('');
  const[choice, setChoice] = useState('');

  useEffect(() => {
    const fetchCountries = async() => {
      let result = '';

      // if user type something in the searchbar, search for that country, else fetch everything
      query !== '' ? result = await axios(`https://restcountries.eu/rest/v2/name/${query}`) 
      : result = await axios('https://restcountries.eu/rest/v2/all');
      //console.log(result.data)

      // sort the country based on user's preference. Default is alphabetically
      choice === 'largest' ? setCountries(result.data.sort(sortDesc("population")))
      : choice === 'smallest' ? setCountries(result.data.sort(sortAsc("population")))
      : setCountries(result.data);
    }
    fetchCountries();
  }, [query, choice]);

  const sortDesc = (property) => {
    return function (a, b) {
      if (a[property] > b[property]) // return negative num, then a,b 
        return -1;
      else if (a[property] < b[property]) // return positive num, then b,a
        return 1;

      return 0;
    }  
  }

  const sortAsc = (property) => {
    return function (a, b) {
      if (a[property] > b[property])
        return 1;
      else if (a[property] < b[property])
        return -1;

      return 0;
    }
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <>
            <div className='select-search-div'>
              <Select getChoice={(value) => setChoice(value)} />
              <Search getQuery={(q) => setQuery(q)} /> {/* /* get query from searchbar */}
            </div>
            <CountryRow countries={countries} />
          </>
        )} />
        <Route path="/countrypage/:code" component={CountryPage} />
      </div>
    </Router>
    
  );
}

export default App;
