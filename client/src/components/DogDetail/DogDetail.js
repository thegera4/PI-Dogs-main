import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getDogById, clearDogDetail, deleteDog } from '../../actions';
import NavBar from '../NavBar/NavBar';
import './DogDetail.css';
import DogPawIcon from '../../assets/icons/dog-paw-icon.png';
import WeightIcon from '../../assets/icons/weight_icon.png';
import HeightIcon from '../../assets/icons/height_icon.png';
import BackIcon from '../../assets/icons/back-home.png';
import NotFound from '../NotFound/NotFound';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import DogProfile from '../../assets/images/dog_profile.jpg';
export class DogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      loading: true
    }
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  } 
  componentDidMount(){
    setTimeout(() => {
      this.setState({...this.state,loading: false})
    }, 2000)
    this.props.getDogById(this.props.match.params.id);
  }
  componentWillUnmount(){
    this.props.clearDogDetail();
  }
  toggleDetails(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  handleDelete(id)  {
    this.props.deleteDog(id);
    alert('Dog deleted from database!');
    this.props.history.push('/home');
  }
  render() {
    const STATUS = this.props.dogDetail.hasOwnProperty('msg');
    if(STATUS){
      return (
        <NotFound errMsg={this.props.dogDetail.msg}/>
      )
    }
    const CREATED_IN_DB = this.props.dogDetail[0]?.hasOwnProperty('createdInDb');
    return (
      <>
        {this.state.loading ?
          <div className="loader">
            <Loader />
          </div>
         : (
        <>
          <NavBar />
          <div className="back-container">
            <Link to="/home">
            <img src={BackIcon} alt="Go-back-icon"/>
            <p>Go back home</p>
            </Link>
          </div>
          <div className="General-container">
            {this.props.dogDetail[0].createdInDb ?
              (<button 
                className="btn-delete"
                onClick={()=>this.handleDelete(this.props.dogDetail[0].id)}>
                  X </button>) : null}
            <img 
            src={!CREATED_IN_DB ? 
            this.props.dogDetail[0]?.image.url : 
            this.props.dogDetail[0]?.image ? 
            this.props.dogDetail[0]?.image : DogProfile }
            alt={this.props.dogDetail[0]?.name} />
            <div className="name-container">
              <h1>{this.props.dogDetail[0]?.name}</h1>
              <h3>Lifespan: {this.props.dogDetail[0]?.lifespan}</h3>
            </div>
              <button className="more-details" onClick={this.toggleDetails}>
                <span>
                  {!this.state.toggle ? 'More Details!' : 'Less Details!'}
                </span>
              </button>
            { this.state.toggle ?
              (
              <div className="details">
                <div className="details-container">
                  <div className="icon">
                    <img src={DogPawIcon} alt="dog_paw_icon" />
                  </div>
                  <div className="content">
                      <h3>Temperaments:</h3>
                      <span>
                      {this.props.dogDetail[0]?.temperament?
                      this.props.dogDetail[0]?.temperament : 'No records found'}
                      </span>
                  </div>
                </div>
                <div className="details-container">
                  <div className="icon">
                    <img src={WeightIcon} alt="weight_icon" />
                  </div>
                  <div className="content">
                      <h3>Weight (metric):</h3>
                      <span>
                      {!CREATED_IN_DB ? 
                      this.props.dogDetail[0]?.weight :
                      this.props.dogDetail[0]?.weight}
                      </span>
                  </div>
                </div>
                <div className="details-container">
                  <div className="icon">
                    <img src={HeightIcon} alt="height_icon" />
                  </div>
                  <div className="content">
                      <h3>Height (metric):</h3>
                      <span>
                      {!CREATED_IN_DB ?
                        this.props.dogDetail[0]?.height :
                        this.props.dogDetail[0]?.height}
                      </span>
                  </div>
                </div>
              </div>
              ) : null
            }
          </div>
        </>
          )}
      </>
      )
  }
}
export const mapStateToProps = (state) => {
  return {
    dogDetail: state.dogDetail,
  }
};
export const mapDispatchToProps = (dispatch) =>{
  return {
    getDogById: (id) => dispatch(getDogById(id)),
    clearDogDetail: () => dispatch(clearDogDetail()),
    deleteDog: (id) => dispatch(deleteDog(id))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(DogDetail);