import React from 'react';
import { Link } from 'react-router-dom';

function Article({ article, className }) {
    return (
        <div className={'article group ' + className}>
            <img
                src={article.src}
                alt=""
                className={
                    article.className +
                    '  group-hover:scale-105 transition-transform duration-300'
                }
            />
            <div className="articleDocument">
                <h3>{article.title}</h3>
                <p className="line-clamp-5">{article.content}</p>
                <Link to={article.link} className="readMore">
                    Xem thêm
                </Link>
            </div>
        </div>
    );
}

export default Article;
