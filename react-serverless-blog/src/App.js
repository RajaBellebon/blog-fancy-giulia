import React, { Component } from 'react';
import blog from './images/blog.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giulia &amp; Bolli Fancy Blog</h2>
          <img alt="blog" src={blog}/>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
