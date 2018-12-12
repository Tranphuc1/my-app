import React, { Component } from 'react';

class SimpleSlider extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{width:'70%'}}>        
        <div id="carousel-id" className="carousel slide" data-ride="carousel"  >
          <ol className="carousel-indicators">
            <li data-target="#carousel-id" data-slide-to={0} className="active" />
            <li data-target="#carousel-id" data-slide-to={1} className />
            <li data-target="#carousel-id" data-slide-to={2} className />
          </ol>
          <div className="carousel-inner">
            <div className="item">
              <img alt="First slide" src="http://nobita.vn/stores/banners/thoi-gian-vun-vo.jpg" style={{height:'400px'}} />
            </div>
            <div className="item">
              <img data-src="" alt="Second slide" src="http://nobita.vn/stores/banners/luc-xu-qc.jpg" style={{height:'400px'}} />
            </div>
            <div className="item active">
              <img data-src="" alt="Third slide" src="http://nobita.vn/stores/banners/song-ngam.jpg"style={{height:'400px'}} />
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
          <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
        </div>
      </div>
     );
  }
}
export default SimpleSlider;