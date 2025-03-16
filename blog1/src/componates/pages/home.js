import React from 'react';
import styles from './home.module.scss';
import banner from '../../img/banerPrimery.jpg'; // Điều chỉnh đường dẫn nếu cần
import { Link } from 'react-router-dom';
import SearchIcon from '~/img/search.svg';
import FilterBar from '../FiltersBar';
import TrainingPrograms from '../training-programs';
import { articles } from '~/constants';
import Article from '../Article';

const Home = () => {
    const data = [
        { url: '/#!', className: 'itemEvent' },
        { url: '/#!', className: 'itemEvent' },
        { url: '/#!', className: 'itemEvent' },
    ];

    return (
        // banner
        <header className={styles.header}>
            <div className={styles.imagePanel}>
                <img
                    src={banner}
                    alt="Banner chính của trang chủ"
                    className={styles.banner}
                />
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
                                    <Link
                                        to={item.url}
                                        className={item.itemEvent}
                                    >
                                        <img src="!#" alt="" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* muc nho */}
                <div className={styles.contentItem}>
                    <FilterBar />
                    <div
                        className={`${styles.contentDetail} flex flex-col gap-[20px]`}
                    >
                        {articles.map((article, index) => (
                            <Article key={index} article={article} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.imgGrids}>
                <div className={styles.libraryImg}>
                    <h4>Thư viện ảnh</h4>
                </div>
                <div className={styles.imgGrid}>
                    <div className={styles.imgItem} />
                    <div className={styles.imgItem} />
                    <div className={styles.imgItem} />
                    <div className={styles.imgItem} />
                </div>
            </div>

            <TrainingPrograms />
        </header>
    );
};

export default Home;
