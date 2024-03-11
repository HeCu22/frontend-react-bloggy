import {Link, useParams} from 'react-router-dom';

import {CaretLeft, Clock} from "@phosphor-icons/react";
import './PostDetail.css';
import {useState} from 'react';

import Button from '../../components/button/Button.jsx';
import {getBloggy} from "../../services/BloggyService.js";
import calculateReadTime from "../../helpers/calculateReadTime.js";

function PostDetail() {
    const [post, setPost] = useState([]);
    const [error, toggleError] = useState(false);
    const [buttonColor, setButtonColor] = useState("primary");

    const {id} = useParams();

    async function fetchPost() {
        toggleError(false);


        if (id) {
            getBloggy(id).then((response) => {
                console.log(response.data);
                setPost(response.data);
                setButtonColor("button-secondary");

            }).catch(error => {
                console.error(error);
                toggleError(true);
            })
        }
    }

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container">
                <Button type="button" onClick={fetchPost} variant={buttonColor}>Haal de post op</Button>
                {Object.keys(post).length > 0 && (<>
                    <h1>{post.title}</h1>
                    <h2>{post.subTitle}</h2>
                    <p className="post-detail-author">Geschreven door <em>{post.author}</em> op {post.date}
                    </p>
                    <span className="post-detail-read-time">
                    <Clock color="#50535C" size={18}/>
                    <p> {calculateReadTime(post.content)} minuten lezen</p>
                </span>
                    <span className="post-detail-read-time">
                        <p>{post.content}</p></span>
                    {/*<p>{post.comments} reacties - {post.shares} keer gedeeld</p>*/}

                </>)}
                {error && <p>Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw</p>}
                <Link to="/posts" className="back-link">
                    <CaretLeft color="#38E991" size={22}/>
                    <p>Terug naar de overzichtspagina</p>
                </Link>
            </div>
        </section>
    );
}

export default PostDetail;