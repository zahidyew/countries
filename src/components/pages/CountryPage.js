import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryPage = ({match}) => {
   const countryCode = match.params.code;
   const [country, setCountry] = useState([]);

   useEffect(() => {
      const fetchCountry = async () => {
         const result = await axios(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)

         console.log(result.data);
         setCountry(result.data);
      }
      fetchCountry();
   }, [countryCode]);

   if (country.languages !== undefined) {
      const languages = country.languages;
      console.log(languages)
   }
   
   //let a = languages.map(language => (<li>{language.name}</li>))

   return (
      <>
         <h2>{country.name}</h2>
         <ul>
            <li>{country.capital}</li>
            <li>{country.subregion}</li>
            <li>{country.population}</li>
            <li>{country.timezones}</li>
            {/* <li>{country.languages[0].name}</li> */}

            
         </ul>
      </>
   )
}

export default CountryPage
