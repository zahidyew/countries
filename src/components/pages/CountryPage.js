import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import Table from 'react-bootstrap/Table';

const CountryPage = ({match}) => {
   const countryCode = match.params.code;
   const [country, setCountry] = useState([]);
   
   useEffect(() => {
      const fetchCountry = async () => {
         const result = await axios(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)

         //console.log(result.data);
         setCountry(result.data);
      }
      fetchCountry();
   }, [countryCode]);

   const formatNumber = (num, style) => {
      return num = numeral(num).format(style);
   }

   const getLanguage = () => {
      let language = '';
      if (country.languages !== undefined) {
         for (let i = 0; i < country.languages.length; i++) {
            language === '' ? language = country.languages[i].name
               : language = language + ', ' + country.languages[i].name
         }
         //console.log(language)
      }
      return language;
   }

   const getCurrency = () => {
      let currency = '';
      if (country.currencies !== undefined) {
         for (let i = 0; i < country.currencies.length; i++) {
            currency === '' ? currency = `${country.currencies[i].name} (${country.currencies[i].symbol})`
               : currency = currency + `, ${country.currencies[i].name} (${country.currencies[i].symbol})`
         }
      }
      return currency;
   }

   return (
      <>
         <div className="flag-div" style={flexCenter('1rem', '1rem')}>
            <img src={country.flag} style={imgStyle} alt='flag'></img>
         </div>
         <h2 style={flexCenter(0,'1rem')}> {country.name} </h2>
         <Table responsive striped bordered hover variant="dark">
            <thead>
               {/* <tr>
                  <th></th>
               </tr> */}
            </thead>
            <tbody>
               <tr>
                  <td> Capital </td>
                  <td> {country.capital} </td>
               </tr>
               <tr>
                  <td> Region </td>
                  <td> {country.region} </td>
               </tr>
               <tr>
                  <td> Subregion </td>
                  <td> {country.subregion} </td>
               </tr>
               <tr>
                  <td> Calling Codes </td>
                  <td> {country.callingCodes} </td>
               </tr>
               <tr>
                  <td> Population </td>
                  <td> {formatNumber(country.population, '0,0')} </td>
               </tr>
               <tr>
                  <td> Currency </td>
                  <td> {getCurrency()} </td>
               </tr>
               <tr>
                  <td> Language </td>
                  <td> {getLanguage()} </td>
               </tr>
            </tbody>
         </Table>
         {/* <div>
            <p> <label style={labelStyle}> Capital </label> : {country.capital} </p>
            <p> <label style={labelStyle}> Region </label> : {country.region} </p>
            <p> <label style={labelStyle}> Subregion </label> : {country.subregion} </p>
            <p> <label style={labelStyle}> Calling Codes </label> : {country.callingCodes} </p>
            <p> <label style={labelStyle}> Population </label> : {formatNumber(country.population, '0,0')} </p>
            <p> <label style={labelStyle}> Currency </label> : {getCurrency()} </p>
            <p> <label style={labelStyle}> Language </label> : {getLanguage()} </p>
            {/* <p> Timezone: {country.timezones} </p> 
         </div> */}
      </>
   )
}

const flexCenter = (pTop, pBot) => {
   return {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
      paddingTop: pTop,
      paddingBottom: pBot
   }     
}

const imgStyle = {
   width: '250px',
   height: '150px'
}

const labelStyle = {
   width: '110px'
}

export default CountryPage
