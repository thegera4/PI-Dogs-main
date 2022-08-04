import React, { Component, createRef } from 'react'
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
  wrapperRef = createRef();
 
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
     
  }
  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleInputChange(e){
    e.preventDefault();
    const REGEX = /^[A-Za-z]+$/;
    if (e.target.value === "" || REGEX.test(e.target.value))
      this.setState({ search: e.target.value });
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
  handleClickOutside = (event) => {
    if (!this.wrapperRef.current?.contains(event.target)) {
      this.setState({
        toggle: false
      })
    }
  }

  render() {
    const { search, toggle } = this.state;
    return (
      <div >
      { !toggle ?
        (
          <>
          <img 
          src={Search} 
          alt="search" 
          className="search-icon"
          onClick={(e) => this.handleToggle(e)}/>
          <div><p>Error: Word is not included in a dog's breed name!</p></div>
          </>
        ) :
        (
          <div ref={this.wrapperRef} className="box">
            <input 
              title="Please enter letters only."
              type="text" 
              placeholder="Please enter letters only"
              value={search} 
              autoFocus={true} 
              onChange={(e) => this.handleInputChange(e)} 
            />
            <button 
              type= 'submit'
              className="search-btn"
              disabled={!search}
              onClick={(e) => this.handleSubmit(e)}>
                Search
            </button>
          </div>
        )
      }
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