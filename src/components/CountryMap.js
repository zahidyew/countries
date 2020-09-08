import React from 'react'
import { Map, TileLayer } from "react-leaflet";

const CountryMap = ({latlng}) => {
   //console.log(latlng)
   return (
      <Map center={latlng} zoom={5}>
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         />
      </Map>
   )
}

export default CountryMap
