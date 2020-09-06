import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import Header from './components/Header';
import CountryRow from './components/CountryRow';
import Search from './components/Search';
import CountryPage from './components/pages/CountryPage';

import './App.css';

function App() {
  const[countries, setCountries] = useState([]);
  const[query, setQuery] = useState('');

  useEffect(() => {
    const fetchCountries = async() => {
      let result = '';

      // if user type something in the searchbar, search for that country, else fetch everything
      query !== '' ? result = await axios(`https://restcountries.eu/rest/v2/name/${query}`) 
        : result = await axios('https://restcountries.eu/rest/v2/all');

      //console.log(result.data);
      setCountries(result.data);
    }
    fetchCountries();
  }, [query]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <>
            <Search getQuery={(q) => setQuery(q)} /> {/* /* get query from searchbar */}
            <CountryRow countries={countries} />
          </>
        )} />
        <Route path="/countrypage/:code" component={CountryPage} />
      </div>
    </Router>
    
  );
}

export default App;
