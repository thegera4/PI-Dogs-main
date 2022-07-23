import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchDogs } from '../../actions'
export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
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
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search for a dog breed..." 
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