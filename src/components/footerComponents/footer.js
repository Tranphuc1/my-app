import React, { Component } from 'react';

//components


class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div id="footer">
			  <div id="container">
			    <div className="footer_address">
			      <div className="block " id="content_FooterAddress"><div className="blockcontent"><div style={{textAlign: 'center'}}>
			            Copyright © 2018 Sói Ca</div>
			          <div style={{textAlign: 'center'}}>
			            &nbsp;</div>
			          <div style={{textAlign: 'center'}}>
			            Địa chỉ: Đại Học Thủy Lợi</div>
			          <div style={{textAlign: 'center'}}>
			            &nbsp;</div>
			          <div style={{textAlign: 'center'}}>
			            &nbsp;</div>
									<div style={{textAlign: 'center'}}>Hỗ trợ khách hàng</div>
									<div style={{textAlign: 'center'}}>Hotline: <b>0967.701.195</b></div>
									<div style={{textAlign: 'center'}}>Email: tranphuc301995@gmail.vn</div>
			        </div></div>
			    </div>
			  </div>
			</div>
    	</footer>
     );
  }
}

export default Footer;
