import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.kegName} - {props.kegBrand}</h3>
      <h4>{props.kegPintQuantity}</h4>
      <h4>{props.kegAlcoholContent}</h4>
      <h4>{props.kegPrice}</h4>
    </React.Fragment>
  )
}

Keg.propTypes = {
  kegName: PropTypes.string.isRequired,
  kegBrand: PropTypes.string.isRequired,
  kegPintQuantity: PropTypes.number.isRequired,
  kegAlcoholContent: PropTypes.string.isRequired,
  kegPrice: PropTypes.string.isRequired, // If next week requires reciept then change prop type to int
  id: PropTypes.string
}

export default Keg;