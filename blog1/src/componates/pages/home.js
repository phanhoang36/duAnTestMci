import React from 'react';
import styles from './home.module.scss';
import banner from '../../img/banerPrimery.jpg'; // Điều chỉnh đường dẫn nếu cần
import { Link } from 'react-router-dom';
import SearchIcon from '~/img/search.svg';

const Home = () => {
    const data = [
        { url: '/#!', className: 'itemEvent' },
        { url: '/#!', className: 'itemEvent' },
        { url: '/#!', className: 'itemEvent' },
      ];

    const articles = [
      {
        title: 'Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào',
        content:
          'Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...',
        link: '/article1',
        src:"#!",
        className:'detail',
      },
      {
        title: 'Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào',
        content:
          'Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...',
        link: '/article2',
        src:"#!",
        className:'detail',
      },
      {
        title: 'Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào',
        content:
          'Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...',
        link: '/article3',
        src:"#!",
        className:'detail',
      },
      {
        title: 'Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào',
        content:
          'Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...',
        link: '/article4',
        src:"#!",
        className:'detail',
      },
      {
        title: 'Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào',
        content:
          'Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...',
        link: '/article4',
        src:"#!",
        className:'detail',
      },
    ];


    
  return (
    // banner
    <header className={styles.header}>
      <div className={styles.imagePanel}>
        <img src={banner} alt="Banner chính của trang chủ" className={styles.banner} />
      </div>

    {/* content 1 */}
      <div className={styles.content}>
        {/* su kien mci */}
    <div className={styles.contentItem}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
                <h4 className={styles.h5Event}>Sự kiện của MCI</h4>
            </div>

            <div className={styles.item}>
                {data.map((item, i) => (
                <div key={i} className={styles.imageItem}>
                    <Link to={item.url} className={item.itemEvent}><img src="!#" alt=""   /></Link>
                </div>
                ))}
            </div>
          </div>
    </div>

        {/* muc nho */}
        <div className={styles.contentItem}>
        <div className={styles.searchBar}>
            <input type="text" placeholder="Tìm kiếm bài viết" className={styles.input} />        
            <Link src="#!" className={styles.searchIcon}><img src={SearchIcon} alt="search"  /></Link>
         </div>

          <nav className={styles.navTabs}>
            <a href="#!" className={styles.navTab}>Chia sẻ kinh nghiệm</a>
            <a href="#!" className={styles.navTab}>Kiến thức chuyên môn</a>
            <a href="#!" className={styles.navTab}>MCI Careers</a>
            <a href="#!" className={styles.navTab}>Kinh nghiệm thực chiến</a>
            <a href="#!" className={styles.navTab}>Lịch khai giảng</a>
          </nav>  

          {/* noidung detail */}
          <div className={styles.contentDetail}>
            {articles.map((article, index) => (
              <div key={index} className={styles.article}>
                <img src={article.src} alt="" className={article.className} />
                <div className={styles.articleDocument}>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                  <Link to={article.link} className={styles.readMore}>
                    Xem thêm
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    <div className={styles.imgGrids}>
            <div className={styles.libraryImg}>
              <h4>Thư viện ảnh</h4>
            </div>
            <div className={styles.imgGrid}>
                <img src="#!" alt="img 1" className={styles.imgItem} />
                <img src="#!" alt="img 2" className={styles.imgItem} />
                <img src="#!" alt="img 3" className={styles.imgItem} />
                <img src="#!" alt="img 4" className={styles.imgItem} />
            </div>
    </div>

    </header>
  );
}

export default Home;