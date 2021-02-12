import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3><u>Keg Form</u></h3>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='kegName'
          placeholder="Keg Name" />
        <br /><br />
        <input
          type='text'
          name='kegBrand'
          placeholder="Keg Brand" />
        <br /><br />
        <input
          type='number'
          name='kegPintQuantity'
          placeholder="Pints Purchased" />
        <br /><br />
        <input
          type='text'
          name='kegAlcoholContent'
          placeholder="Alcohol Content" />
        <br /><br />
        <input
          type='text'
          name='kegPrice'
          placeholder="Price" />
        <br /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;