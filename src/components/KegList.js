import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <h1><u>Our Menu</u></h1><br />
      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked = { props.onKegSelection }
          kegName={keg.kegName} 
          kegBrand={keg.kegBrand}
          kegPintQuantity={keg.kegPintQuantity}
          kegAlcoholContent={keg.kegAlcoholContent}
          kegPrice={keg.kegPrice}
          id={keg.id}
          key={keg.id}
        />
      )}
      <br />
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}
export default KegList;