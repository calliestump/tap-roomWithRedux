import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
// import amountToRestock from './KegDetail';
import EditKegForm from './EditKegForm';
import $ from 'jquery';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {


  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const currentKeg = Object.values(this.props.masterKegList).filter(keg => keg.id ===id)[0];
    const action = a.selectKeg(currentKeg)
    dispatch(action);
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    const action2 = a.selectKeg(null); // takes us back to keg list showing the new updated list of kegs.
    dispatch(action2);
    }
    
  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = a.editing();
    dispatch(action);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.editing();
    dispatch(action2); 
    const action3= a.selectKeg(kegToEdit) // takes our current object in for updating.
    dispatch(action3);
  }
      
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      dispatch(action);
      const action = a.editing();
      const action2 = a.selectKeg(null); // allows our handleClick to regonize if selectedKeg has a value. If not, redirect to kegList
      dispatch(action2); 
      } else {
      const action3= a.toggleForm()
      dispatch(action3);
    }
  }
      
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleBuyingKeg = () => { 
    const { dispatch } = this.props;
    const currentKeg = this.props.selectedKeg; 
    const updatedKeg = { ...currentKeg, kegPintQuantity: currentKeg.kegPintQuantity - 1} // clones the currentObject and subtracts one from the kegPintQuantity saving the new values in a new const.
    const action = a.addKeg(updatedKeg); // calls that object into the addKeg reducer to make a new object and update it to details.
    dispatch(action);
    const action2 = a.selectKeg(updatedKeg);
    dispatch(action2);
  } 

  handleRestock = () => {
    const { dispatch } = this.props;
    const amountToRestock = parseInt($(".pintRestockNum").val());
    const currentKeg = this.props.selectedKeg; //selects keg that is currently selected and viewed in details page
    const updatedKeg = { ...currentKeg, kegPintQuantity: currentKeg.kegPintQuantity += amountToRestock}
    const action = a.addKeg(updatedKeg);
    dispatch(action);
    const action2 = a.selectKeg(updatedKeg);
    dispatch(action2);
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.props.selectedKeg}
      onEditKeg = {this.handleEditingKegInList}
      />
      buttonText = "Return to Keg List"
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg = {this.props.selectedKeg} 
      onClickingBuy = {this.handleBuyingKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onPintRestock = {this.handleRestock}
      />
      buttonText = "Return to Keg List";
    } 
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm
      onNewKegCreation={this.handleAddingNewKegToList} 
      />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList 
      kegList={this.props.masterKegList}
      onKegSelection={this.handleChangingSelectedKeg}
      />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing:PropTypes.bool,
  selectKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing

  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;