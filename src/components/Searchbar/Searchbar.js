import React, { Component } from "react";
import { toast } from "react-toastify";

export default class SearchBar extends Component {
  state = {
    searchName: "",
  };

  // componentDidMount() {
  // this.setState({ loader: true });

  //  fetch('https://pixabay.com/api/?q=sea&page=1&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12')
  //  .then(response => response.json())
  //  .then(({ hits }) => this.setState({ hits }))
  //  .finally(() => this.setState({ loader: false }))
  // }

  handleSearchChange = (e) => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchName.trim() === " ") {
      return toast.error("Enter correct request!");
    }
    this.props.onSubmit(this.state.searchName);
    // this.setState({ searchName: "" })
    this.formReset();
  };

  formReset = () => {
    this.setState({
      searchName: "",
    });
  };

  render() {
    return (
      <div>
        <header className="Searchbar">
          <form onSubmit={this.handleFormSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearchChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
