import React, { Component } from 'react';
import '../styles/index.css';

import image1 from '../styles/images/autumntree.jpg'
import image2 from '../styles/images/bluesea.jpg'
import image3 from '../styles/images/orangeflowers.jpg'
import image4 from '../styles/images/turtleblue.jpg'
import image5 from '../styles/images/jungle.jpg'
import image6 from '../styles/images/greenforest.jpg'

class Home extends Component {
  render() {
    return (
      <div id ="container">
        <div id="content">
          <ul id="picturelist">
            <li><a href="#"><img src={image1} alt="a tree"/></a></li>
            <li><a href="#"><img src={image2} alt="the sea"/></a></li>
            <li><a href="#"><img src={image6} alt="the forest"/></a></li>
            <li><a href="#"><img src={image3} alt="a bunch of orange flowers"/></a></li>
            <li><a href="#"><img src={image4} alt="a turtle in the sea"/></a></li>
            <li><a href="#"><img src={image5} alt="a garden/jungle thing"/></a></li>
          </ul>
        </div>
      </div>
      );
    }
  }
export default Home
