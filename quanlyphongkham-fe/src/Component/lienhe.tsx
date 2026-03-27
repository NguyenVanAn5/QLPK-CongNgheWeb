import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  text: string;
}

const Lienhe: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfoList: ContactInfo[] = [
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Địa chỉ',
      text: 'Khu II, Đường 3 Tháng 2, Xuân Khánh, Ninh Kiều, Cần Thơ'
    },
    {
      icon: 'fas fa-phone',
      label: 'Điện thoại',
      text: '028.3838.1234 | Hotline: 1900 6067'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      text: 'hotro@heartcare.vn'
    },
    {
      icon: 'fas fa-clock',
      label: 'Giờ làm việc',
      text: 'Thứ 2 - Thứ 7: 7h30 - 17h00'
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Vui lòng điền các trường bắt buộc!');
      return;
    }

    setIsSubmitting(true);

    try {
      // Giả lập gửi dữ liệu (thay thế bằng API thực tế của bạn)
      console.log('Dữ liệu liên hệ:', formData);
      
      // Sau khi gửi thành công
      setSubmitMessage('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Xóa thông báo sau 3 giây
      setTimeout(() => setSubmitMessage(''), 3000);
    } catch (error) {
      setSubmitMessage('Có lỗi xảy ra. Vui lòng thử lại!');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <Link to="/dichvu">Dịch vụ</Link>
        <Link to="/datlich">Đặt lịch</Link>
        <Link to="/lienhe" className="active">Liên hệ</Link>
        <Link to="/blog">Tin tức</Link>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <div className="container banner-content">
          <h1>Liên hệ với chúng tôi</h1>
          <Link to="/datlich" className="btn-primary">Đặt lịch khám</Link>
        </div>
      </section>

      {/* Contact Container */}
      <section className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Liên hệ với HeartCare</h2>
          {contactInfoList.map((info, index) => (
            <div key={index} className="info-item">
              <i className={info.icon}></i>
              <p>{info.text}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Gửi phản hồi</h2>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('thành công') || submitMessage.includes('Cảm ơn') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Nội dung tin nhắn"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Đang gửi...' : 'Gửi liên hệ'}
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.527208637096!2d105.76900031480023!3d10.029938775924985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08825798be9f1%3A0x365ce2b5ef1690e6!2sCan%20Tho%20University!5e0!3m2!1sen!2s!4v1653028383337!5m2!1sen!2s"
          allowFullScreen={true}
          loading="lazy"
          title="Google Maps - HeartCare Location"
        ></iframe>
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

export default Lienhe;
