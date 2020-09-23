import React from 'react';

class SearchBar extends React.Component {

  render() {

    const {handleChange, filterSearch} = this.props
    const {name} = this.props.planeteer
    return (
    <div className="search">
      <label>search Planeteer</label>
      <input
      onChange={(e) => handleChange(e)}
      name="name"
      type="text"
      placeholder="Search"
      value={this.props.inputValue}
      />
    </div>
    );
  }

}

export default SearchBar;
