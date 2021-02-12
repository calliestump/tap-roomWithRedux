import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegQuantity: event.target.kegQuantity.value,
      kegPintQuantity: parseInt(event.target.kegPintQuantity.value),
      kegAlcoholContent: event.target.kegAlcoholContent.value,
      kegPrice: event.target.kegPrice.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;