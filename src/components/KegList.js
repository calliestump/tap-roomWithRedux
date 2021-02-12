import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg 
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegPintQuantity={keg.kegPintQuantity}
          kegAlcoholContent={keg.kegAlcoholContent}
          kegPrice={keg.kegPrice}
          id={keg.id}
          key={keg.id}
        />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}
export default KegList;