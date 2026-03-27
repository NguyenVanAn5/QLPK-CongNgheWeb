import React from 'react';
import { Link } from 'react-router-dom';


interface ServiceCard {
  image: string;
  title: string;
  description: string;
}

const Dichvu: React.FC = () => {
  const services: ServiceCard[] = [
    {
      image: './img/ECG.png',
      title: 'Điện tâm đồ (ECG)',
      description: 'Phân tích nhịp tim, đánh giá đơn giản các rối loạn chuyển hóa và các bệnh lý tim mạch.'
    },
    {
      image: './img/sieuamtim.png',
      title: 'Siêu âm tim',
      description: 'Hình ảnh siêu âm chi tiết giúp bác sĩ theo dõi chức năng tim và phát hiện bất thường.'
    },
    {
      image: './img/Tư vấn.jpg',
      title: 'Tư vấn điều trị',
      description: 'Tư vấn chuyên sâu: điều trị lâu dài, chế độ sống, dinh dưỡng & phục hồi chức năng tim mạch.'
    },
    {
      image: './img/holter.png',
      title: 'Holter ECG',
      description: 'Ghi điện tim liên tục trong 24 giờ giúp chẩn đoán những bất thường không rõ rệt.'
    },
    {
      image: './img/khám tq.png',
      title: 'Khám tổng quát tim mạch',
      description: 'Kiểm tra định kỳ để phát hiện sớm các yếu tố nguy cơ như tăng huyết áp, mỡ máu.'
    },
    {
      image: './img/Telehealth1.png',
      title: 'Tư vấn từ xa (Telehealth)',
      description: 'Hẹn tư vấn trực tuyến, trao đổi bệnh án từ xa – tiện lợi cho bệnh nhân ở xa.'
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
        <Link to="/gioithieu">Giới thiệu</Link>
        <Link to="/dichvu" className="active">Dịch vụ</Link>
        <Link to="/datlich">Đặt lịch</Link>
        <Link to="/lienhe">Liên hệ</Link>
        <Link to="/blog">Tin tức</Link>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <div className="container banner-content">
          <h1>Dịch vụ của chúng tôi</h1>
          <Link to="/datlich" className="btn-primary">Đặt lịch khám</Link>
        </div>
      </section>

      {/* Services Banner Section */}
      <section className="services-banner">
        <div className="container">
          <h1>Dịch vụ nổi bật</h1>
          <p>Khám và đặt lịch khám tim mạch dễ dàng, nhanh chóng & chuyên nghiệp</p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

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

export default Dichvu;
