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
    console.info(search)
    return (
      <div>
        <input 
          type="text" 
          placeholder="Busca el nombre de raza de un perrito..." 
          value={search} 
          onChange={(e) => this.handleInputChange(e)} 
        />
        <button 
          type= 'submit'
          onClick={(e) => this.handleSubmit(e)}>
            Buscar
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
    searchDogs: () => dispatch(searchDogs()),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);