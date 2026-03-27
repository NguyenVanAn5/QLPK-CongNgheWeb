import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

interface ServiceCard {
  title: string;
  description: string;
}

interface Reason {
  icon: string;
  title: string;
  description: string;
}




const Trangchu: React.FC = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const sendMessage = () => {
    const msg = chatInput.trim();
    if (!msg) return;

    // Thêm tin nhắn người dùng
    setMessages([...messages, { type: 'user', text: msg }]);
    setChatInput('');

    // Giả lập phản hồi bot
    setTimeout(() => {
      setMessages((prev: Message[]) => [
        ...prev,
        { type: 'bot', text: 'Cảm ơn bạn đã nhắn. Chúng tôi sẽ phản hồi sớm!' }
      ]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const services: ServiceCard[] = [
    {
      title: 'Khám tổng quát tim mạch',
      description: 'Kiểm tra sức khỏe tim toàn diện bằng thiết bị hiện đại.'
    },
    {
      title: 'Điện tâm đồ (ECG)',
      description: 'Đo điện tim giúp chẩn đoán các bệnh tim nhanh chóng và chính xác.'
    },
    {
      title: 'Siêu âm tim',
      description: 'Hình ảnh siêu âm giúp bác sĩ theo dõi tình trạng tim mạch.'
    },
    {
      title: 'Tư vấn và điều trị',
      description: 'Tư vấn chăm sóc và điều trị các bệnh lý tim mạch hiệu quả.'
    }
  ];

  const reasons: Reason[] = [
    {
      icon: 'https://www.vinmec.com/static/uploads/whyus_01_403f42a936.svg',
      title: 'Đội ngũ chuyên môn tận tâm',
      description: 'Hệ thống kết nối với bác sĩ có trình độ cao, tận tâm, luôn lấy người bệnh làm trung tâm và mang lại sự an tâm tuyệt đối.'
    },
    {
      icon: 'https://www.vinmec.com/static/uploads/whyus_02_2a57cb372f.svg',
      title: 'Tiêu chuẩn dịch vụ cao cấp',
      description: 'Quy trình đặt lịch chuyên nghiệp, minh bạch, giúp người dùng dễ dàng chọn bác sĩ và thời gian phù hợp.'
    },
    {
      icon: 'https://www.vinmec.com/static/uploads/whyus_03_2f1c276a39.svg',
      title: 'Công nghệ đặt lịch thông minh',
      description: 'Ứng dụng công nghệ web hiện đại, thao tác đơn giản, xử lý nhanh giúp tiết kiệm thời gian cho cả bệnh nhân và cơ sở y tế.'
    },
    {
      icon: 'https://www.vinmec.com/static/uploads/whyus_01_403f42a936.svg',
      title: 'Liên tục cải tiến và nâng cấp',
      description: 'Không ngừng phát triển, mở rộng kết nối và nâng cao trải nghiệm người dùng qua các tính năng mới và hiệu quả.'
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
          <a href="/datlich">
            <i className="fa-regular fa-calendar-days calendar-icon"></i>
          </a>
          <img src="https://flagcdn.com/w40/vn.png" alt="Vietnam Flag" className="flag-icon" />
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="menu-bar">
        <Link to="/" className="active">Trang chủ</Link>
        <Link to="/gioithieu">Giới thiệu</Link>
        <Link to="/dichvu">Dịch vụ</Link>
        <Link to="/datlich">Đặt lịch</Link>
        <Link to="/lienhe">Liên hệ</Link>
        <Link to="/blog">Tin tức</Link>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <div className="container banner-content">
          <h1>Chăm sóc sức khỏe tim mạch<br />Nâng niu cuộc sống</h1>
          <Link to="/datlich" className="btn-primary">Đặt lịch khám</Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container main-content">
        {/* Intro Section */}
        <section className="intro section">
          <h2>Giới thiệu phòng khám</h2>
          <p>
            Phòng khám Tim mạch xã XYZ chuyên khám và điều trị các bệnh về tim mạch, với đội ngũ bác sĩ tận tâm và trang thiết bị hiện đại. Tại HeartCare, chúng tôi không chỉ điều trị mà còn lắng nghe trái tim bạn từng nhịp một. 
            Là một phòng khám chuyên sâu về tim mạch, HeartCare ra đời với sứ mệnh cung cấp dịch vụ chăm sóc sức khỏe tim mạch toàn diện, chính xác, và nhân văn.<br/><br/>
            HeartCare tự hào quy tụ đội ngũ bác sĩ tim mạch giàu kinh nghiệm, được đào tạo từ các trường đại học y danh tiếng trong và ngoài nước. Chúng tôi cam kết mang đến cho khách hàng sự chăm sóc chuyên môn cao và tận tâm nhất.
            Hệ thống máy móc tại HeartCare luôn được cập nhật công nghệ chẩn đoán – điều trị tim mạch tiên tiến như: máy siêu âm tim màu, máy điện tâm đồ, hệ thống theo dõi huyết áp Holter, v.v.
          </p>
        </section>

        {/* Services Section */}
        <section className="services section">
          <h2>Dịch vụ chính</h2>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <div className="container">
            <div className="section-title">
              <h2>Tại sao nên chọn chúng tôi?</h2>
            </div>
            <div className="content">
              <div className="image">
                <img src="https://www.vinmec.com/static/uploads/wepik_export_20230610051550k_Azj_1_1_de0e3052ea.png" alt="Chuyên gia" />
              </div>
              <div className="reasons">
                {reasons.map((reason, index) => (
                  <div key={index} className="reason">
                    <img src={reason.icon} alt="icon" />
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Poster Pro Section */}
        <section className="poster-pro">
          <div className="poster-pro-container">
            <div className="poster-pro-text">
              <h2>Quan tâm sức khỏe tim mạch ngay hôm nay</h2>
              <p>Đừng đợi đến khi có triệu chứng. Hãy đặt lịch khám định kỳ để bảo vệ trái tim của bạn và người thân.</p>
              <Link to="/datlich" className="poster-btn">Đặt lịch khám</Link>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="latest-news">
          <h2>Tin mới nhất</h2>
          <div id="news-container"></div>
        </section>
      </main>

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

        {/* Chat Button */}
        <button className="toggle-chatbox" onClick={toggleChatbox}>
          <i className="fas fa-comment-dots"></i>
        </button>

        {/* Chat Box */}
        <div className={`chatbox ${!isChatboxOpen ? 'hidden' : ''}`} id="chatbox">
          <div className="chatbox-header">
            💬 Hỗ trợ trực tuyến
            <span
              style={{ float: 'right', cursor: 'pointer' }}
              onClick={toggleChatbox}
            >
              ✖
            </span>
          </div>
          <div className="chatbox-body" id="chatBody">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 HeartCare Plus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trangchu;
