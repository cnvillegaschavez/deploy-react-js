import React, { Component } from 'react';
import { getAllMovies } from '../../services/CatalogueService'
import ImageViewBox from '../ImageViewBox/ImageViewBox';

class Peliculas extends Component {

    state = {
        movies: []
    }


    componentDidMount() {
      getAllMovies().then(json => this.setState({movies: json}));
    }

    render() {
      return (
        <div>
          {this.state.movies.map((movie) => (
              <ImageViewBox movie={movie} />           
          ))}
        </div>
      );
    }
  }

export default Peliculas;