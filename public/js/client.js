import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      background: '',
      loaded: false
    }
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  fetchImages() {
    let url = 'http://unsplash.it/list';
    let backImg = '';
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      let images = jsonData;
      let getNumber = this.randomIntFromInterval(0, images.length);

      let width = images[getNumber].width,
          height = images[getNumber].height,
          id = images[getNumber].id;

      let imageSrc = 'http://unsplash.it/' + width + '/' + height + '?image=' + id

      this.setState({
        loaded: true,
        background: imageSrc
      });
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchImages();
  }


  render() {
      let styles = {
        backgroundImage: 'url(' + this.state.background + ')',
      };

      if (this.state.loaded) {
        return <div className="hello" style={styles}><h2>Hello</h2></div>;
      } else {
        return <div className="loading hello"><h2>Getting Images...</h2></div>;
      }
  }
}

render(<App />, document.getElementById('app'));
