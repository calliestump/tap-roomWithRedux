import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h1><u>Keg Form</u></h1><br />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='kegName'
          placeholder="Keg Type" />
        <br /><br />
        <input
          type='text'
          name='kegBrand'
          placeholder="Keg Brand" />
        <br /><br />
        <input
          type='number'
          name='kegQuantity'
          placeholder="Quantity of Kegs" />
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
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;