import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Demo extends Component {
  render() {
    return (
 		<div className="main_menu">
		  <ul>
		    <li><a href style={{height: 50}}><h4>Nổi bật</h4></a>
		      <ul className="submenu1">
		        <li><a href="/" target="_self">Sách bán chạy</a></li>
		         <li>
		            <Link to="/product">Sách Mới</Link>
		          </li>
		        <li><a href target="_self">Sắp phát hành</a></li>
		        <li><a href target="_self">Sắp giảm giá</a></li>
		      </ul>
		    </li>
		    <li><a href>Sách kinh tế</a>
		      <ul className="submenu2">
		        <li><a href target="_self">Tài chính- Kế toán</a></li>
		        <li><a href target="_self">Quản trị-lãnh đạo</a></li>
		        <li><a href target="_self">Maketing-Bán hàng</a></li>
		        <li><a href target="_self">Kỹ năng làm việc</a></li>
		        <li><a href target="_self">Kinh tế học</a></li>
		        <li><a href target="_self">Khởi nghiệp</a></li>
		        <li><a href target="_self">Doanh nhân- Tập đoàn</a></li>
		        <li><a href target="_self">Bài học kinh doanh</a></li>
		      </ul>
		    </li>
		    <li><a href>Văn học nước ngoài</a>
		      <ul className="submenu3">
		        <li><a href target="_self">Tiểu sử-Hồi ký</a></li>
		        <li><a href target="_self">Truyện lịch sử-Kiếm hiệp</a></li>
		        <li><a href target="_self">Truyện ngắn-Tản văn</a></li>
		        <li><a href target="_self">Tác phẩm kinh điển</a></li>
		        <li><a href target="_self">Huyền bí-giả tưởng</a></li>
		        <li><a href target="_self">Truyện trinh thám</a></li>
		        <li><a href target="_self">Tiểu thuyết tình cảm-lãng mạn</a></li>
		        <li><a href target="_self">Tiểu thuyết đam mỹ</a></li>
		        <li><a href target="_self">Bách hợp</a></li>
		      </ul>
		    </li>
		    <li><a href>Sách kỹ năng sống</a>
		      <ul className="submenu4">
		        <li><a href target="_self">Tài chính- Kế toán</a></li>
		        <li><a href target="_self">Quản trị-lãnh đạo</a></li>
		        <li><a href target="_self">Maketing-Bán hàng</a></li>
		        <li><a href target="_self">Kỹ năng làm việc</a></li>
		      </ul>
		    </li>
		    <li><a href>Sách tuổi teen</a>
		      <ul className="submenu5">
		        <li><a href target="_self">Văn học teen</a></li>
		        <li><a href target="_self">Hướng nghiệp - kỹ năng</a></li>
		        <li><a href target="_self">Light Novel</a></li>
		        <li><a href target="_self">Truyện tranh, Comic</a></li>
		      </ul>
		    </li>
		    <li><a href>Học ngoại ngữ</a>
		      <ul className="submenu6">
		        <li><a href target="_self">Từ điển</a></li>
		        <li><a href target="_self">Sách học tiếng Anh</a></li>
		        <li><a href target="_self">Sách học tiếng Hoa</a></li>
		        <li><a href target="_self">Sách học tiếng Nhật</a></li>
		      </ul>
		    </li>
		    <li><a href>Sách thiếu nhi</a>
		      <ul className="submenu7">
		        <li><a href target="_self">Truyện cổ tích - Thần thoại</a></li>
		        <li><a href target="_self">Kiến thức - Kỹ năng</a></li>
		        <li><a href target="_self">Văn học</a></li>
		        <li><a href target="_self">Truyện kể cho bé</a></li>
		      </ul>
		    </li>
		    <li><a href target="_self">Phương thức đời sống</a>
		      <ul className="submenu8">
		        <li><a href target="_self">Chăm sóc sức khỏe</a></li>
		        <li><a href target="_self">Phong thủy -Nhà cửa</a></li>
		        <li><a href target="_self">Nấu ăn</a></li>
		        <li><a href target="_self">Thể thao - Giải trí</a></li>
		      </ul>
		    </li>
		    <li><a href target="_self">Sách chuyên ngành</a>
		      <ul className="submenu9">
		        <li><a href target="_self">Giáo dục</a></li>
		        <li><a href target="_self">Công nghệ thông tin</a></li>
		        <li><a href target="_self">Lịch sử - Địa lý</a></li>
		        <li><a href target="_self">Khoa học tự nhiên</a></li>
		      </ul>
		    </li>
		    <li><a href target="_self">Sách văn hóa - Nghệ thuật</a>
		      <ul className="submenu10">
		        <li><a href target="_self">Doanh nhân - Người nổi tiếng</a></li>
		        <li><a href target="_self">Văn hóa - Du lịch</a></li>
		        <li><a href target="_self">Tâm linh - Tôn giáo</a></li>
		      </ul>
		    </li>		
		  </ul>
		</div>
     );
  }
}

export default Demo;
