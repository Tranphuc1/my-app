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
										<li className="group">Hỗ trợ khách hàng
											<ul>
												<li className="group">Hotline: <b>0967.701.195</b></li>
												<li className="group">Email: tranphuc301995@gmail.vn</li>
											</ul>
										</li>
			        </div></div>
			    </div>
			  </div>
			</div>
    	</footer>
     );
  }
}

export default Footer;
