import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {
    
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    


    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/300px-The.Matrix.glmatrix.2.png"
          },
          {
            title: "Mfull Metal Jacketatrix",
            poster: "http://metrograph.com/uploads/films/FullMetalJacketDeluxeEdition_85391186274_2-1525275736-726x388.png"
          },
          {
            title: "Old boy",
            poster: "https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc"
          },
          {
            title: "Star wars",
            poster: "https://timedotcom.files.wordpress.com/2017/05/star-wars_1024.jpg"
          },
          {
            title: "Romeo",
            poster:"https://i.ytimg.com/vi/RmU4-lgFIdA/maxresdefault.jpg"
          }
        ]

      })
    }, 2000)
  }

  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index)=> {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies;
  }

  render() {
    console.log('did render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
