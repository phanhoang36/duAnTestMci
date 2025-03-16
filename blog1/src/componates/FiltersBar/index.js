import React from 'react';
import styles from './filterbar.module.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '../../img/search.svg';
import { articles } from '~/constants';
import Article from '../Article';

function FilterBar() {
    return (
        <div className={styles.contentItem}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Tìm kiếm bài viết"
                    className={styles.input}
                />
                <Link src="#!" className={styles.searchIcon}>
                    <img src={SearchIcon} alt="search" />
                </Link>
            </div>

            <nav className={styles.navTabs}>
                <a href="#!" className={styles.navTab}>
                    Chia sẻ kinh nghiệm
                </a>
                <a href="#!" className={styles.navTab}>
                    Kiến thức chuyên môn
                </a>
                <a href="#!" className={styles.navTab}>
                    MCI Careers
                </a>
                <a href="#!" className={styles.navTab}>
                    Kinh nghiệm thực chiến
                </a>
                <a href="#!" className={styles.navTab}>
                    Lịch khai giảng
                </a>
            </nav>

            {/* noidung detail */}
            
        </div>
    );
}

export default FilterBar;
