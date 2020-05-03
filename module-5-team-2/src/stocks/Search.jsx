import React, { Component } from "react";
import lensImg from "../img/lens.svg";
import { SearchBar, Lens, SearchInput } from "./styleSearch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value, handleChange } = this.props;
    return (
      <SearchBar>
        <Lens src={lensImg} alt="Lens icon" />
        <SearchInput
          type="text"
          placeholder="enter company ticker"
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </SearchBar>
    );
  }
}

export default Search;
