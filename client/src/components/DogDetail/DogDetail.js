import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getDogById, clearDogDetail } from '../../actions';
//import { Link } from 'react-router-dom';
import './DogDetail.css';
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
      <div>
        <img src={this.props.dogDetail[0]?.image.url} alt={this.props.dogDetail[0]?.name} />
        <div className="name-container">
          <h1>{this.props.dogDetail[0]?.name}</h1>
          <button onClick={this.toggleDetails}>
            <span>More Details! ↓  ↑</span>
          </button>
      </div>
        { this.state.toggle ?
          (
          <div className="details">
            <div className="details-container">
              <div className="content">
                  <h3>Temperaments:</h3>
                  <span>{this.props.dogDetail[0]?.temperament}</span>
              </div>
            </div>
            <div className="details-container">
              <div className="content">
                  <h3>Weight:</h3>
                  <span>{this.props.dogDetail[0]?.weight.metric}</span>
              </div>
            </div>
            <div className="details-container">
              <div className="content">
                  <h3>Height:</h3>
                  <span>{this.props.dogDetail[0]?.height.metric}</span>
              </div>
            </div>
          </div>
          ) : null
        }
      </div>
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
