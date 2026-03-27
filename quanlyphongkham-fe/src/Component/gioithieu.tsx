import React from 'react';
import { Link } from 'react-router-dom';
// import './style/gioithieu.css';

interface Service {
  icon: string;
  name: string;
}

const Gioithieu: React.FC = () => {
  const services: Service[] = [
    {
      icon: 'fas fa-heartbeat',
      name: 'CREATIVITY – SÁNG TẠO'
    },
    {
      icon: 'fas fa-stethoscope',
      name: 'ACCOUNTABILITY – TRÁCH NHIỆM'
    },
    {
      icon: 'fas fa-brain',
      name: 'RELIABILITY – TIN CẬY'
    },
    {
      icon: 'fas fa-video',
      name: 'EXCELLENCE – HOÀN HẢO'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-links">
          <a href="/bacsi">Tìm bác sĩ</a>
          <a href="#">Khóa học trực tuyến</a>
          <a href="#">Chăm sóc khách hàng</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <img src="./img/logo.png" alt="HeartCare Logo" className="logo" />
        <div className="search-section">
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div className="tools">
          <i className="fa-regular fa-calendar-days calendar-icon"></i>
          <img src="https://flagcdn.com/w40/vn.png" alt="Vietnam Flag" className="flag-icon" />
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="menu-bar">
        <Link to="/">Trang chủ</Link>
        <Link to="/gioithieu" className="active">Giới thiệu</Link>
        <Link to="/dichvu">Dịch vụ</Link>
        <Link to="/datlich">Đặt lịch</Link>
        <Link to="/lienhe">Liên hệ</Link>
        <Link to="/blog">Tin tức</Link>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <div className="container banner-content">
          <h1>Tầm nhìn và Sứ mệnh</h1>
          <Link to="/datlich" className="btn-primary">Đặt lịch khám</Link>
        </div>
      </section>

      {/* About Block Section */}
      <section className="about-block">
        <div className="about-row">
          <div className="about-image">
            <img 
              src="https://www.vinmec.com/static/uploads/vision_mission_1_e1686886144251_0caaaf8cf5.png" 
              alt="Tầm nhìn" 
            />
          </div>
          <div className="about-text">
            <h2>Tầm nhìn</h2>
            <p>
              Trở thành hệ thống y tế hàn lâm đẳng cấp quốc tế tại Việt Nam, phát triển toàn diện trên ba trụ cột: Chăm sóc - Đào tạo - Nghiên cứu.
            </p>
          </div>
        </div>

        <div className="about-row reverse">
          <div className="about-text">
            <h2>Sứ mệnh</h2>
            <p>
              Cung cấp dịch vụ chăm sóc sức khỏe toàn diện và chất lượng cao, kết hợp giữa y đức, công nghệ và dịch vụ chuyên nghiệp.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://www.vinmec.com/static/uploads/vision2_e481595219.jpg" 
              alt="Sứ mệnh" 
            />
          </div>
        </div>
      </section>

      {/* Poster Section */}
      <div className="posterr">
        <h1>BodyCare - Lắng nghe cơ thể bạn</h1>
        <h2>Phòng khám chất lượng cao tại Hưng Yên</h2>

        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service">
              <i className={service.icon}></i>
              <span>{service.name}</span>
            </div>
          ))}
        </div>

        <div className="highlight">
          <p>Có thẻ Bảo hiểm y tế – Khám chữa bệnh không lo phí!</p>
        </div>

        <div className="info">
          <Link className="btn" to="/datlich">Đặt lịch khám ngay</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-container">
          {/* Column 1: Contact */}
          <div className="footer-column">
            <h3>Trung tâm hỗ trợ</h3>
            <p className="footer-hotline">📞 1900 8686</p>
            <p><strong>HeartCare Plus Clinic</strong></p>
            <p><i className="fa-solid fa-location-dot"></i> 45 Nguyễn Trãi, P. An Cư, Ninh Kiều, Cần Thơ</p>
            <p><i className="fa-solid fa-envelope"></i> contact@heartcare.vn</p>
            <p><i className="fa-solid fa-phone"></i> 0292 1234 567</p>
          </div>

          {/* Column 2: About */}
          <div className="footer-column">
            <h3>Về HeartCare</h3>
            <ul>
              <li><a href="/about-us">Về chúng tôi</a></li>
              <li><a href="/bacsi">Đội ngũ bác sĩ</a></li>
              <li><a href="/dichvu">Dịch vụ</a></li>
              <li><a href="/blog">Tin tức y khoa</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-column">
            <h3>Hướng dẫn & Hỗ trợ</h3>
            <ul>
              <li><a href="/datlich">Đặt lịch khám</a></li>
              <li><a href="/huongdan">Hướng dẫn sử dụng</a></li>
              <li><a href="/faq">Câu hỏi thường gặp</a></li>
              <li><a href="/terms">Chính sách & Điều khoản</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 HeartCare Plus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gioithieu;
