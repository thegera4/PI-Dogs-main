import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getDogById, clearDogDetail } from '../../actions';
import NavBar from '../NavBar/NavBar';
import './DogDetail.css';
import DogPawIcon from '../../assets/icons/dog-paw-icon.png';
import WeightIcon from '../../assets/icons/weight_icon.png';
import HeightIcon from '../../assets/icons/height_icon.png';
export class DogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggleDetails = this.toggleDetails.bind(this);
  }
    
  componentDidMount(){
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

  render() {
    return (
      <>
      <NavBar />
      <div className="General-container">
        <img src={this.props.dogDetail[0]?.image.url} alt={this.props.dogDetail[0]?.name} />
        <div className="name-container">
          <h1>{this.props.dogDetail[0]?.name}</h1>
          <h3>Lifespan: {this.props.dogDetail[0]?.lifespan}</h3>
        </div>
          <button className="more-details" onClick={this.toggleDetails}>
            <span>More Details!</span>
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
                  <span>{this.props.dogDetail[0]?.temperament}</span>
              </div>
            </div>
            <div className="details-container">
              <div className="icon">
                <img src={WeightIcon} alt="weight_icon" />
              </div>
              <div className="content">
                  <h3>Weight (metric):</h3>
                  <span>{this.props.dogDetail[0]?.weight.metric}</span>
              </div>
            </div>
            <div className="details-container">
              <div className="icon">
                <img src={HeightIcon} alt="height_icon" />
              </div>
              <div className="content">
                  <h3>Height (metric):</h3>
                  <span>{this.props.dogDetail[0]?.height.metric}</span>
              </div>
            </div>
          </div>
          ) : null
        }
      </div>
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
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(DogDetail);

/*
anos de vida
*/
