import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>{props.kegName} - {props.kegBrand}</h2>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  kegName: PropTypes.string.isRequired,
  kegBrand: PropTypes.string.isRequired,
  kegQuantity: PropTypes.number.isRequired,
  kegAlcoholContent: PropTypes.string.isRequired,
  kegPrice: PropTypes.string.isRequired, // If next week requires reciept then change prop type to int
  id: PropTypes.string,
  whenKegCLicked: PropTypes.func
}

export default Keg;