import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h1><u>Keg Detail</u></h1> 
      <h2>{keg.kegName} - {keg.kegBrand}</h2>
      <h4><strong>Keg Quantity:</strong> {keg.kegQuantity}</h4>
      <h4><strong>Alcohol Content:</strong> {keg.kegAlcoholContent}</h4>
      <h4><strong>Keg Price:</strong> {keg.kegPrice}</h4>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}; 

export default KegDetail;