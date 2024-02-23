import {Link} from 'react-router-dom';
import './PostItem.css';

function PostItem({id, title, author, date, subTitle}) {
    return (
        <li className="post-item">
            <h2 className="post-title"><Link to={`/posts/${id}`}>{title}</Link> ({author})</h2>
            <p> Subject: {subTitle}. Created on: {date}</p>
        </li>
    );
}

export default PostItem;