import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingBuy, onClickingDelete} = props;
  return (
    <React.Fragment>
      <h1><u>Keg Details</u></h1><br />
      <h2>{keg.kegName} - {keg.kegBrand}</h2>
      <h4><strong>Amount of Pints:</strong> {keg.kegPintQuantity}</h4>
      <h4><strong>Alcohol Content:</strong> {keg.kegAlcoholContent}</h4>
      <h4><strong>Keg Price:</strong> {keg.kegPrice}</h4><br />
      <button class="buy" onClick ={() => onClickingBuy() }>Sell Pint</button><br/><br/>
      <button class="edit" onClick = {props.onClickingEdit}>Edit Keg</button><br/><br/>
      <button class="delete" onClick ={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}; 

export default KegDetail;