import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searchName: " ",
  };

  formSubmit = (searchName) => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <SearchBar onSubmit={this.formSubmit} />
        <ImageGallery searchName={this.state.searchName} />
      </div>
    );
  }
}

export default App;
