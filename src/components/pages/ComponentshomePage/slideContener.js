import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SimpleSlider extends Component {
  render() {
    let linkToDetail1 = `/ProductDetail/-LUepvB3_xxCBysaEw8q`
    let linkToDetail2 = `/ProductDetail/-LV3BcUHS5vpPOsi4pmV`
    let linkToDetail3 = `/ProductDetail/-LV3COm4r0ofZhQKz4kW`
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{width:'70%'}}>        
        <div id="carousel-id" className="carousel slide" data-ride="carousel"  >
          <ol className="carousel-indicators">
            <li data-target="#carousel-id" data-slide-to={0} className="active" />
            <li data-target="#carousel-id" data-slide-to={1}  className="active"/>
            <li data-target="#carousel-id" data-slide-to={2}  className="active"/>
          </ol>
          <div className="carousel-inner">
            <div className="item">
            <Link to={linkToDetail2}>
              <img alt="First slide" src="http://nobita.vn/stores/banners/thoi-gian-vun-vo.jpg" style={{height:'400px'}} />
            </Link>
            </div>
            <div className="item">
            <Link to={linkToDetail3}>
              <img data-src="" alt="Second slide" src="http://nobita.vn/stores/banners/luc-xu-qc.jpg" style={{height:'400px'}} />
              </Link>
            </div>
            <div className="item active">
            <Link to={linkToDetail1}>
              <img data-src="" alt="Third slide" src="http://nobita.vn/stores/banners/song-ngam.jpg"style={{height:'400px'}} />
              </Link>
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