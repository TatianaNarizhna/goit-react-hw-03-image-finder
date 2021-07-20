import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import api from "./services/apiService";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    searchName: " ",
    images: [],
    page: 1,
    loader: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      // this.setState({ loader: true, images: null })
      this.fetchSearch();
    }
  }

  onChangePage = (search) => {
    this.setState({ searchName: search, page: 1, images: [] });
  };

  formSubmit = (searchName) => {
    this.setState({ searchName });
  };

  fetchSearch = () => {
    const { searchName, page } = this.state;
    this.setState({ loader: true });
    api
      .fetchSearch(searchName, page)
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
        if (this.state.images.length > 12) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  render() {
    const { images, loader } = this.state;
    return (
      <div>
        {loader && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.error && <p>{this.state.error.message}</p>}

        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <SearchBar onSubmit={this.formSubmit} />
        <ImageGallery images={images} />

        {images.length > 0 && <Button onClick={this.fetchSearch} />}
      </div>
    );
  }
}

export default App;
