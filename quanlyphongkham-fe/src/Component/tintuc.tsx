import React from 'react';
import { Link } from 'react-router-dom';


interface NewsCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface PostCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Tintuc: React.FC = () => {
  const mainNews: NewsCard = {
    id: 1,
    image: './img/news1.jpg',
    title: 'GS Nguyễn Thanh Liêm nhận giải thưởng Nikkei Châu Á',
    description: 'Ngày 13/6/2018 tại Tokyo, GS.TS Nguyễn Thanh Liêm được vinh danh với giải thưởng Nikkei Châu Á cho những đóng góp nổi bật trong nghiên cứu tế bào gốc & công nghệ gen...'
  };

  const sideNews: NewsCard[] = [
    {
      id: 2,
      image: './img/ECG.png',
      title: 'Vinmec nhận bằng khen của Bộ Y tế vì đóng góp tích cực',
      description: 'Trong buổi lễ phát động tầm soát ung thư vú và cổ tử cung...'
    },
    {
      id: 3,
      image: './img/news3.jpg',
      title: 'Vinmec đạt giải thưởng "Bệnh viện Việt Nam tiến bộ nhất"',
      description: 'Giải thưởng của Hiệp hội Quản lý bệnh viện châu Á cho các tiêu chí an toàn, hiệu quả...'
    }
  ];

  const latestPosts: PostCard[] = [
    {
      id: 1,
      image: './img/post1.jpg',
      title: 'GS Nguyễn Thanh Liêm được vinh danh là 1 trong 100 nhà khoa học tiêu biểu',
      description: 'Ông được vinh danh bởi những đóng góp nổi bật trong nghiên cứu tế bào gốc và điều trị ung thư...'
    },
    {
      id: 2,
      image: './img/post2.jpg',
      title: 'GS Nguyễn Thanh Liêm được trao danh hiệu "Cống hiến tiêu biểu"',
      description: 'Với nhiều năm cống hiến trong lĩnh vực y tế nhi khoa và tế bào gốc...'
    },
    {
      id: 3,
      image: './img/post3.jpg',
      title: 'Vinmec Times City được công nhận là 1 trong 15 bệnh viện tốt công tác cảnh giác dược',
      description: 'Đạt tiêu chuẩn đánh giá nghiêm ngặt từ Bộ Y tế trong hoạt động giám sát thuốc...'
    },
    {
      id: 4,
      image: './img/post4.jpg',
      title: 'Vinmec được vinh danh là "Bệnh viện tiến bộ nhất" và "An toàn cho người bệnh"',
      description: 'Được vinh danh tại Hội nghị quản lý bệnh viện châu Á với nhiều cải tiến toàn diện...'
    }
  ];

  return (
    <div className="blog-new">
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
        <Link to="/lienhe">Liên hệ</Link>
        <Link to="/blog" className="active">Tin tức</Link>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Trang chủ</a> / Tin tức
        </div>

        {/* News Layout Section */}
        <div className="news-layout">
          {/* Main News Article */}
          <div className="news-large">
            <img src={mainNews.image} alt="Bài viết nổi bật" />
            <div className="content">
              <h3>{mainNews.title}</h3>
              <p>{mainNews.description}</p>
              <a href="#" style={{ color: '#fff' }}>
                Xem thêm &rarr;
              </a>
            </div>
          </div>

          {/* Side News Cards */}
          {sideNews.map((news) => (
            <div key={news.id} className="news-card">
              <img src={news.image} alt={news.title} />
              <div className="content">
                <h4>{news.title}</h4>
                <p>{news.description}</p>
                <a href="#">Xem thêm &rarr;</a>
              </div>
            </div>
          ))}
        </div>

        {/* Tags Section */}
        <div className="news-tags">
          <h3>Bài viết mới nhất</h3>
        </div>

        {/* Latest Posts Grid */}
        <div className="latest-posts">
          {latestPosts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} />
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <a href="#">Xem thêm &rarr;</a>
            </div>
          ))}
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

export default Tintuc;
