import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  
  function handNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPintQuantity: event.target.kegPintQuantity.value,
      kegAlcoholContent: event.target.kegAlcoholContent.value,
      kegPrice: event.target.kegPrice.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.PropTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;