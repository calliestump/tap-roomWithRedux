import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission (event) {
    event.preventDefault();
    props.onEditKeg ({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPintQuantity: parseInt(event.target.kegPintQuantity.value),
      kegAlcoholContent: event.target.kegAlcoholContent.value,
      kegPrice: event.target.kegPrice.value,
      id: keg.id
      });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update Keg"
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;