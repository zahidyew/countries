import React from 'react'
import { Link } from 'react-router-dom';

const CountryItem = ({row, country}) => {
   /* const pageUrl = {
      pathname: "/countrypage/" + country.alpha2Code
   }; */

   const pageUrl = "/countrypage/" + country.alpha2Code

   const imgStyle = {
      height: '50px',
      width: '85px'
   };

   const linkStyle = {
      color: '#cccc00'
   }

   return (
      <tr>
         <td> {row} </td>
         <td> <Link to={pageUrl} style={linkStyle}> {country.name} </Link>  </td>
         <td> <img src={country.flag} alt={country.name} style={imgStyle} /> </td>
      </tr>    
   )
}

export default CountryItem
