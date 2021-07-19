import React, { Component } from "react";
import Loader from "react-loader-spinner";
import apiService from "../../services/apiService";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  state = {
    hits: null,
    loader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loader: true, hits: null });

      apiService
        .fetchSearch(this.props.searchName)
        .then(({ hits }) => this.setState({ hits }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loader: false }));
    }
  }

  render() {
    return (
      <div>
        {this.state.loader && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.error && <p>{this.state.error.message}</p>}
        {this.state.hits && <div>{this.state.hits[2].id}</div>}
        {/* <p>{this.props.searchName}</p> */}
      </div>
    );
  }
}

export default ImageGallery;

//  fetch(
//   `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12`
// )
// .then(response => {
//   if(response.ok) {
//     return response.json();
//   }
//       return Promise.reject(
//      new Error(`Request ${this.props.searchName} not found`)
//    )})
//   .then(({ hits }) => this.setState({ hits }))
//   .catch(error => this.setState({ error }))
//   .finally(() => this.setState({ loader: false }));
