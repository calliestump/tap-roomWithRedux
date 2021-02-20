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

  constructor(props) {
    super(props);
    this.state = {
      // selectedKeg: null, // comment out to allow us to retrive object without default value of null.
      editing: false // comment this out when using redux
    };
  }

  
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
    // const { dispatch } = this.props;
    // const selectedKeg = this.props.masterKegList[id];
    // const action = a.selectKeg(selectedKeg)
    // dispatch(action);
    // Code above successfully grabs the specific keg in console but it does not switch to specified details. ?
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    this.setState({selectedKeg: null});
    }
    
  handleEditClick = () => {
    this.setState({editing: true});
    // const {dispatch} = this.props;
    // const action = a.editing();
    // dispatch(action);
    // Code above worked with changing edit boolean to true instead of false, but didnt redirect to form.
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    // const action2 = a.editing();
    // dispatch(action2); // This code assised line 45
    // const action3= a.toggleForm() // Thought this may redirect to form.
    // dispatch(action3);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
      
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
      } else {
      const { dispatch } = this.props;
      const action= a.toggleForm()
      dispatch(action);
    }
  }
      
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleBuyingKeg = (keg) => { //keg adds newKeg as argument
    const { dispatch } = this.props;
    // const selectedKeg = this.state.selectedKeg; // allows the page to stay on the details but it doesnt update the value.
    const action = a.buyPint(keg);
    dispatch(action);
    this.setState({
      selectedKeg: null, // selectedKeg - this would assist with line 72
      editing: false
    });
  } 

  handleRestock = () => {
    const amountToRestock = parseInt($(".pintRestockNum").val());
    const selectedKeg = this.state.selectedKeg; //selects keg that is currently selected and viewed in details page
    const newKegPintQuantity = Object.assign({}, selectedKeg, {kegPintQuantity: selectedKeg.kegPintQuantity += amountToRestock}); //this targets the selectedKeg and it's kegPintQuantity, and assigns it the new kegPintQuantity. 
    // Ex.) If pints equals 0 and I want to restock 20, the new ouput is "020"
    const newKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(newKegPintQuantity); //updates the keg list
    this.setState({
      masterKegList: newKegList,
      selectedKeg: newKegPintQuantity
    });
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.state.selectedKeg}
      onEditKeg = {this.handleEditingKegInList}
      />
      buttonText = "Return to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg = {this.state.selectedKeg} 
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
  editing:PropTypes.bool
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