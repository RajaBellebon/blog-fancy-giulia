import React, { Component } from 'react';

import bolli from './images/bolli.jpg';
import blog from './images/blog.png';
import dashboard from './images/dashboard.jpg';
import travels from './images/travels.jpg';


// const images = [bolli, dashboard, travels].map((img, idx) => 
//     <div key ={idx} className="column">
//       <div key ={idx} className="content">
//         <img src={img} key ={idx} alt={img.toString().replace(".jpg", "")} style={{flex:0.8, borderWidth:1, height:200}}/> 
//         <h3>{img.toString().replace("/static/media/", "").split(".")[0]}</h3>
//       </div>
//     </div>
// );

const images = [bolli, dashboard, travels].map((img, idx) => 
  <a href={img} key ={idx}>
    <img src={img} key={idx} alt={img.toString().replace(".jpg", "")} style={{flex:0.8, borderWidth:1, height:200}}/> 
  </a>
);

class App extends Component {
  render() {
    console.log(images)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giulia &amp; Bolli Fancy Blog</h2>
          <img alt="blog" src={blog} width="300px" height="300px"/>
          <div id="lightgallery">
            {images}
          </div>
        <div>
          <ul>{this.props.children}</ul>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
