import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Left Section: Logo/Info */}
                <div className={styles.leftSection}>
                    <h3 className={styles.title}>
                        Học Viên Đào Tạo Công Nghệ{' '}
                        <span>2021 nguồn theo dõi</span>
                    </h3>
                    <p className={styles.subtitle}>
                        Chuyên Sâu về Data Scientist, Data Engineer Việt Nam
                    </p>
                </div>

                {/* Right Section: Contact Columns */}
                <div className={styles.rightSection}>
                    {/* Hà Nội */}
                    <div className={styles.column}>
                        <div className={styles.titleItem}>
                            <h4 className={styles.h4Title}>HÀ NỘI</h4>
                            <p>165 Thái Hà</p>
                            <p>Hotline: 024 7106 8368</p>
                            <p>
                                Địa chỉ: Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái
                                Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà
                                Nội, Việt Nam
                            </p>
                        </div>

                        <div className={styles.columnTitle}>
                            <p>30 Trung Liệt</p>
                            <p>Hotline: 024 7106 8368</p>
                            <p>
                                Địa chỉ: Số 30, Trung Liệt, Phường Trung Liệt,
                                Quận Đống Đa, Thành phố Hà Nội, Việt Nam
                            </p>
                        </div>
                    </div>

                    {/* Hồ Chí Minh */}
                    <div className={styles.column}>
                        <div className={styles.titleItem}>
                            <h4 className={styles.h4Title}>HỒ CHÍ MINH</h4>
                            <p>HCM - 13 Cao Thắng</p>
                            <p>Hotline: 024 7106 8368</p>
                            <p>
                                Địa chỉ: 13 Cao Thắng, Phường 2, Quận 3, Thành
                                Phố Hồ Chí Minh
                            </p>
                        </div>

                        <div className={styles.titleItem}>
                            <p>HCM - 224 Điện Biên Phủ</p>
                            <p>Hotline: 024 7106 8368</p>
                            <p>
                                Địa chỉ: Tầng 4 & Tầng 6, 224 Điện Biên Phủ,
                                Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí
                                Minh, Việt Nam
                            </p>
                        </div>

                        <div className={styles.titleItem}>
                            <p>HCM - 677/6 Điện Biên Phủ</p>
                            <p>Hotline: 024 7106 8368</p>
                            <p>
                                Địa chỉ: Tầng 4, Yoko Building 677/6, Điện Biên
                                Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ
                                Chí Minh, Việt Nam
                            </p>
                        </div>
                    </div>

                    {/* Hotline */}
                    <div className={styles.column}>
                        <div className="styles.titleItem">
                            <h4 className={styles.h4Title}>HOTLINE </h4>
                            <p>Khiếu nại CEO: 0982 521 378</p>
                            <p>Khiếu nại DCEO: 0916 442 368</p>
                            <p>Hợp tác truyền thông: 0934 146 016</p>
                            <p>Hợp tác kinh doanh: 0961 123 988</p>
                            <p>Khiếu nại dịch vụ CSKH: 024 7106 8368</p>
                            <p>Tư vấn khóa học 1</p>
                            <p>Ms. Khánh Ly 0352 433 233</p>
                            <p>Tư vấn khóa học 2</p>
                            <p>Ms. Ngọc Linh 0344 463 698</p>
                            <p>CSKH: cskh@mcivietnam.com</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
