import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
// import amountToRestock from './KegDetail';
import EditKegForm from './EditKegForm';
import $ from 'jquery';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // masterKegList:[],
      // selectedKeg: null,
      // editing: false
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice} = newKeg;
    const action = {
      type: 'ADD_KEG',
      id,
      kegName,
      kegBrand,
      kegPintQuantity,
      kegAlcoholContent,
      kegPrice
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
    // const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
    // const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    // this.setState({
    //   masterKegList: newMasterKegList,
    //   selectedKeg: null
    // });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      kegName: kegName,
      kegBrand: kegBrand,
      kegPintQuantity: kegPintQuantity,
      kegAlcoholContent: kegAlcoholContent,
      kegPrice: kegPrice
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
    // const editedMasterKegList = this.state.masterKegList
    //   .filter(keg => keg.id !== this.state.selectedKeg.id)
    //   .concat(kegToEdit);
    // this.setState({
    //   masterKegList: editedMasterKegList,
    //   editing: false,
    //   selectedKeg: null
    // });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  handleBuyingKeg = () => {

    const selectedKeg = this.state.selectedKeg; //selects keg that is currently selected and viewed in details page
    const newKegPintQuantity = Object.assign({}, selectedKeg, {kegPintQuantity: selectedKeg.kegPintQuantity - 1}); //this targets the selectedKeg and it's kegPintQuantity, and assigns it the new kegPintQuantity
    const newKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(newKegPintQuantity); //updates the keg list
    this.setState({
      masterKegList: newKegList,
      selectedKeg: newKegPintQuantity
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
    else if (this.state.formVisibleOnPage) {
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
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
// import React from 'react';
// import KegList from './KegList';
// import NewKegForm from './NewKegForm';
// import KegDetail from './KegDetail';
// import EditKegForm from './EditKegForm';
// import $ from 'jquery';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";

// class KegControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       // masterKegList:[],
//       selectedKeg: null,
//       editing: false
//     };
//   }

//   handleAddingNewKegToList = (newKeg) => {
//     const { dispatch } = this.props;
//     const { id, kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice } = newKeg;
//     const action = {
//       type: 'ADD_KEG',
//       id: id,
//       kegName,
//       kegBrand,
//       kegPintQuantity,
//       kegAlcoholContent,
//       kegPrice
//     }
//     dispatch(action);
//     this.setState({formVisibleOnPage: false});
//   }

//   handleChangingSelectedKeg = (id) => {
//     const selectedKeg = this.props.masterKegList[id];
//     this.setState({selectedKeg: selectedKeg});
//   }

//   handleDeletingKeg = (id) => {
//     const { dispatch } = this.props;
//     const action = {
//       type: 'DELETE_KEG',
//       id: id
//     }
//     dispatch(action);
//     this.setState({selectedKeg: null});
//     // const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
//     // this.setState({
//     //   masterKegList: newMasterKegList,
//     //   selectedKeg: null
//     // });
//   }

//   handleEditClick = () => {
//     this.setState({editing: true});
//   }

//   handleEditingKegInList = (kegToEdit) => {
//     const { dispatch } = this.props;
//     const { id, kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice } = kegToEdit;
//     const action = {
//       type: 'ADD_KEG',
//       id,
//       kegName,
//       kegBrand,
//       kegPintQuantity,
//       kegAlcoholContent,
//       kegPrice
//     }
//     dispatch(action);
//     this.setState({
//       editing: false,
//       selectedKeg: null
//     });
//     // const editedMasterKegList = this.state.masterKegList
//     //   .filter(keg => keg.id !== this.state.selectedKeg.id)
//     //   .concat(kegToEdit);
//     // this.setState({
//     //   masterKegList: editedMasterKegList,
//     //   editing: false,
//     //   selectedKeg: null
//     // });
//   }

//   handleClick = () => {
//     if (this.state.selectedKeg != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedKeg: null,
//         editing: false // added for testing
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }
  
//   handleBuyingKeg = () => {
//     const selectedKeg = this.state.selectedKeg; //selects keg that is currently selected and viewed in details page
//     const newKegPintQuantity = Object.assign({}, selectedKeg, {kegPintQuantity: selectedKeg.kegPintQuantity - 1}); //this targets the selectedKeg and it's kegPintQuantity, and assigns it the new kegPintQuantity
//     const newKegList = this.state.masterKegList
//     .filter(keg => keg.id !== this.state.selectedKeg.id)
//     .concat(newKegPintQuantity); //updates the keg list
//     this.setState({
//       masterKegList: newKegList,
//       selectedKeg: newKegPintQuantity
//     });
//   } 

//   handleRestock = () => {
//     const amountToRestock = parseInt($(".pintRestockNum").val());
//     const selectedKeg = this.state.selectedKeg; //selects keg that is currently selected and viewed in details page
//     const newKegPintQuantity = Object.assign({}, selectedKeg, {kegPintQuantity: selectedKeg.kegPintQuantity += amountToRestock}); //this targets the selectedKeg and it's kegPintQuantity, and assigns it the new kegPintQuantity. 
//     // Ex.) If pints equals 0 and I want to restock 20, the new ouput is "020"
//     const newKegList = this.state.masterKegList
//     .filter(keg => keg.id !== this.state.selectedKeg.id)
//     .concat(newKegPintQuantity); //updates the keg list
//     this.setState({
//       masterKegList: newKegList,
//       selectedKeg: newKegPintQuantity
//     });
//   } 

//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.editing ) {
//       currentlyVisibleState = 
//       <EditKegForm 
//       keg = {this.state.selectedKeg}
//       onEditKeg = {this.handleEditingKegInList}
//       />
//       buttonText = "Return to Keg List"
//     } else if (this.state.selectedKeg != null) {
//       currentlyVisibleState = 
//       <KegDetail 
//       keg = {this.state.selectedKeg} 
//       onClickingBuy = {this.handleBuyingKeg}
//       onClickingDelete = {this.handleDeletingKeg}
//       onClickingEdit = {this.handleEditClick}
//       onPintRestock = {this.handleRestock}
//       />
//       buttonText = "Return to Keg List";
//     } 
//     else if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = 
//       <NewKegForm
//       onNewKegCreation={this.handleAddingNewKegToList} 
//       />
//       buttonText = "Return to Keg List";
//     } else {
//       currentlyVisibleState = 
//       <KegList 
//       kegList={this.props.masterKegList}
//       onKegSelection={this.handleChangingSelectedKeg}
//       />;
//       buttonText = "Add Keg";
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <br />
//         <button onClick={this.handleClick}>{buttonText}</button> 
//       </React.Fragment>
//     );
//   }
// }

// KegControl.propTypes = {
//   masterKegList: PropTypes.object,
//   formVisibleOnPage: PropTypes.bool
// }
// const mapStateToProps = state => {
//   return {
//     masterKegList: state.masterKegList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }
// KegControl = connect(mapStateToProps)(KegControl);

// export default KegControl;