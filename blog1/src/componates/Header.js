import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import SearchIcon from '~/img/search.svg';
import MciIcon from '~/img/MCI-logo.svg';
// import CaretDownIcon from '~/img/CaretDown.svg'; chua dung toi

const Header = () => {
    const data = [
        { url: '/', title: 'KHOÁ HỌC' },
        { url: '/', title: 'LỊCH ĐÀO TẠO' },
        { url: '/', title: 'DOANH NGHIỆP' },
        { url: '/', title: 'BLOG' },
        { url: '/', title: 'VỀ CHÚNG TÔI' },
    ];

    const handleLogin = () => {
        alert('Đăng nhập thành công! 🚀');
    };

    return (
        <header className={styles.header}>
            {/* Left: Logo */}
            {/* Center: Navbar */}
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to="#!">
                        <img src={MciIcon} alt="LogoMCI" />
                    </Link>
                </div>

                <div className={styles.item}>
                    {data.map((item, i) => (
                        <div key={i} className={styles.navItem}>
                            <Link to={item.url}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Actions (Search + Login) */}
            <div className={styles.actions}>
                <div className={styles.searchButtonContainer}>
                    <button className={styles.searchButton}>
                        <Link to="#!">
                            <img src={SearchIcon} alt="Search" />
                        </Link>
                    </button>
                </div>
                <div className={styles.loginButtonContainer}>
                    <button onClick={handleLogin} className={styles.btn}>
                        <Link to="#!">Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
