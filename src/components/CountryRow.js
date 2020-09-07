import React from 'react'
import CountryItem from './CountryItem'
import Table from 'react-bootstrap/Table';

const CountryRow = ({countries}) => {
   let i = 1;

   return (
      <Table responsive striped bordered hover variant="dark">
         <thead>
            <tr>
               <th>No.</th>
               <th>Country</th>
               <th>Region</th>
               <th>Population</th>
               <th>Flag</th>
            </tr>
         </thead>
         <tbody>
            {countries.map(country => (
               <CountryItem key={country.alpha2Code} row={i++} country={country} />             
            ))} 
         </tbody>         
      </Table>
   )
}

export default CountryRow
