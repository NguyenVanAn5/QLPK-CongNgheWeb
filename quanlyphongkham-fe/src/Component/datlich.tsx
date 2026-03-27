import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface FormData {
  service: string;
  doctor: string;
  fullname: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  reason: string;
  agreePolicy: boolean;
}

interface Doctor {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
}

const Datlich: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    doctor: '',
    fullname: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    reason: '',
    agreePolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const services: Service[] = [
    { id: '1', name: 'Khám nội tổng quát' },
    { id: '2', name: 'Khám nhi' }
  ];

  const doctors: Doctor[] = [
    { id: '1', name: 'BS Nguyễn Văn A' },
    { id: '2', name: 'BS Trần Thị B' },
    { id: '3', name: 'BS Lê Thị Mận' },
    { id: '4', name: 'BS Trần Văn Xoài' },
    { id: '5', name: 'BS Trần Thị Sầu Riêng' }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;

    if (type === 'checkbox') {
      const checkboxElement = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [id]: checkboxElement.checked
      });
    } else if (type === 'radio') {
      setFormData({
        ...formData,
        gender: value
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullname || !formData.dob || !formData.phone || !formData.service) {
      setMessage('Vui lòng điền các trường bắt buộc!');
      return;
    }

    if (!formData.agreePolicy) {
      setMessage('Vui lòng đồng ý với chính sách bảo vệ dữ liệu!');
      return;
    }

    setIsSubmitting(true);

    const data = {
      MaBenhNhan: 1,
      MaBacSi: formData.doctor || null,
      NgayBatDau: new Date().toISOString(),
      TrangThai: 'DaDat',
      GhiChu: formData.reason
    };

    try {
      const response = await fetch('https://localhost:44340/api-nguoidung/LichHen/dat-lich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Đặt lịch thành công!');
        setFormData({
          service: '',
          doctor: '',
          fullname: '',
          gender: '',
          dob: '',
          email: '',
          phone: '',
          reason: '',
          agreePolicy: false
        });
      } else {
        setMessage('Lỗi đặt lịch: ' + result.message);
      }
    } catch (err) {
      setMessage('Không thể kết nối API Gateway');
      console.error(err);
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
        <Link to="/datlich" className="active">Đặt lịch</Link>
        <Link to="/lienhe">Liên hệ</Link>
        <Link to="/blog">Tin tức</Link>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <div className="container banner-content">
          <h1>ĐĂNG KÝ KHÁM</h1>
        </div>
      </section>

      {/* Form Wrapper */}
      <div className="form-wrapper">
        <h2>Nội dung chi tiết đặt hẹn</h2>

        {message && (
          <div className={`message ${message.includes('thành công') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Service Selection */}
          <div className="form-section">
            <label htmlFor="service">Dịch vụ *</label>
            <select
              id="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Chọn dịch vụ</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Doctor Selection */}
          <div className="form-section">
            <label htmlFor="doctor">Bác sĩ</label>
            <select
              id="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
            >
              <option value="">Chọn Bác sĩ muốn khám</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <h2>Thông tin khách hàng</h2>

          {/* Full Name and Gender */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Họ và tên *</label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
                placeholder="Họ và tên"
              />
            </div>

            <div className="form-group">
              <label>Giới tính</label>
              <div className="gender-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={formData.gender === 'Nam'}
                    onChange={handleInputChange}
                  />
                  Nam
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={formData.gender === 'Nữ'}
                    onChange={handleInputChange}
                  />
                  Nữ
                </label>
              </div>
            </div>
          </div>

          {/* Date of Birth and Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dob">Ngày tháng năm sinh *</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Nhập email"
              />
            </div>
          </div>

          {/* Phone and Reason */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại *</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason">Lý do khám *</label>
              <textarea
                id="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Triệu chứng"
                rows={7}
                className="input_book"
              ></textarea>
            </div>
          </div>

          {/* Policy Agreement Checkbox */}
          <div className="form-section checkbox">
            <label>
              <input
                type="checkbox"
                id="agreePolicy"
                checked={formData.agreePolicy}
                onChange={handleInputChange}
                required
              />
              Tôi đồng ý với <a href="#">chính sách bảo vệ dữ liệu</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
            </button>
          </div>
        </form>
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

export default Datlich;
