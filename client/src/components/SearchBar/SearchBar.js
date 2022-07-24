import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchDogs } from '../../actions'
import './SearchBar.css'
import Search from '../../assets/icons/search.png'
export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      toggle: false
    }
  }
  
  handleInputChange(e){
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchDogs(this.state.search);
    this.setState({
      search: '',
      toggle: false
    })
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { search, toggle } = this.state;
    return (
      <>
      { !toggle ?
        (
          <img 
          src={Search} 
          alt="search" 
          className="search-icon"
          onClick={(e) => this.handleToggle(e)}/>
        ) :
        (
          <div className="box">
            <input 
              type="text"  
              value={search} 
              onChange={(e) => this.handleInputChange(e)} 
            />
            <button 
              type= 'submit'
              onClick={(e) => this.handleSubmit(e)}>
                Search
            </button>
          </div>
        )
      
      }
      </>

    )
  }
}

function mapStateToProps(state){
  return {
    dogs: state.dogs,
  }
};

function mapDispatchToProps(dispatch){
  return {
    searchDogs: (name) => dispatch(searchDogs(name)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);