import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import anh1 from './imgslide/p1.jpg';
import anh2 from './imgslide/p2.jpg';
import anh3 from './imgslide/p3.jpg';
class Slider extends Component {
  render() {
    return (
      <div id="carousel-id" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-id" data-slide-to={-1} className />
          <li data-target="#carousel-id" data-slide-to={1} className />
          <li data-target="#carousel-id" data-slide-to={2} className="active" />
        </ol>
        <div className="carousel-inner">
          <div className="item">
            <img src={anh1} />
          </div>
          <div className="item">
            <img src={anh2} />
          </div>
          <div className="item active">
            <img src={anh3} />
          </div>
        </div>
       <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>*
        <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
      </div>

     );
  }
}

export default Slider;
