import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class ImageGallery extends Component {
  state = {
    hits: null,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loader: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=21902781-05f70a6abac1a4120ac7c9ed1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then(({ hits }) => this.setState({ hits }))
        .finally(() => this.setState({ loader: false }));
    }
  }

  render() {
    return (
      <>
        {this.state.loader && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}

        <ul className="ImageGallery">
          {this.state.search && <div>{this.state.hits.id}</div>}
        </ul>
      </>
    );
  }
}
