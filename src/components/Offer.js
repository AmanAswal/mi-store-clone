import React from 'react'
import {Link} from "react-router-dom";

const Offer = ({index, src, link}) => {
  return (
    <Link to={link}> <img src={src} alt={`${index} offer`} /> </Link>
  )
}

export default Offer