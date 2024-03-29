import './Overview.css';
import PostItem from '../../components/postItem/PostItem.jsx';
import {useState} from 'react';
import axios from 'axios';
import ErrorMessage from '../../components/errorMessage/ErrorMessage.jsx';
import Button from '../../components/button/Button.jsx';
import {listBlogItems} from "../../services/BloggyService.js";

function Overview() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    async function fetchPosts() {
        toggleError(false);


        listBlogItems().then((response) => {
            console.log(response.data);
            setPosts((response.data));
        }).catch(error => {
            console.error(error);
            toggleError(true);
        })
    }



    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <Button type="button" onClick={fetchPosts} variant="primary">Haal alle posts op</Button>
                {posts.length > 0 && (
                    <>
                        <h1>Bekijk alle {posts.length} posts op het platform</h1>
                        <ul className="post-list">
                            {posts.map((post) => {
                                return <PostItem
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    subTitle={post.subTitle}
                                    date={post.date}
                                    author={post.author}
                                />
                            })}

                        </ul>
                    </>
                )}
                {error && <ErrorMessage message="Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw" />}
            </div>
        </section>
    );
}

export default Overview;