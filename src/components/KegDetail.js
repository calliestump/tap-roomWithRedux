import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy, onPintRestock, onClickingEdit} = props;  // onPintRestock,
  let {alert} = props;
  if (keg.kegPintQuantity === 10) {
   alert = <span className="almostOut">We're at {keg.kegPintQuantity} pints - Better grab a drink!</span>
  } else {
    alert = keg.kegPintQuantity
  }
  if(keg.kegPintQuantity > 0) {
    return (
      <React.Fragment>
        <h1><u>Keg Details</u></h1><br />
        <h2>{keg.kegName} - {keg.kegBrand}</h2>
        <h3><strong>Amount of Pints:</strong> {alert}</h3>
        <h3><strong>Alcohol Content:</strong> {keg.kegAlcoholContent}</h3>
        <h3><strong>Keg Price:</strong> {keg.kegPrice}</h3><br />
        <button className="buy" onClick ={() => onClickingBuy(keg) }>Sell Pint</button><br/><br/>
        <button className="edit" onClick = {props.onClickingEdit}>Edit Keg</button><br/><br/>
        <button className="delete" onClick ={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <hr />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Oh no! <span className="outOfPints">{keg.kegName} - {keg.kegBrand}</span> is out of pints.</h1><br/>
        <input type="number" placeholder="Pints to restock" className="pintRestockNum" id= "pintRestockNum" />
        <button className="pintRestockBtn" onClick ={() => onPintRestock() }>Restock</button><br/><br/><br/>
        <button className="delete" onClick ={() => onClickingDelete(keg.id)}>Delete Keg</button><br/>
      </React.Fragment>
    )
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
}; 

export default KegDetail;