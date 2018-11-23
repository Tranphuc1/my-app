import React, { Component } from 'react';
import Item from './Item';

class MenuList extends Component {
  render() {
    return (
      <div>
    <div className="container"> 
      <div className="row"> 
         <Item price="100.000" img="http://nobita.vn/stores/uploads/h/loi-cam-on__31344_thum_135.jpg" hot={true}>Kinh dị</Item>
         <Item price="200.000" img="http://nobita.vn/stores/uploads/j/nxbtre_full_23452018_094507__71279_thum_135.jpg"  hot={false}>Tình Yêu</Item>
         <Item price="300.000" img="http://nobita.vn/stores/uploads/j/nxbtre_full_23452018_094507__71279_thum_135.jpg"  hot={true}>Trinh thám</Item>
         <Item price="400.000" img="http://nobita.vn/stores/uploads/l/a-xa-5__40400_thum_135.jpg"  hot={false}>Giết người</Item>
      </div>
    </div>
  </div>


    );
  }
}

export default MenuList;