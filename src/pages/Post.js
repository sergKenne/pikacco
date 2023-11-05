import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useGetPostQuery } from '../store/features/postsApi';

const Post = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: post, isError, isLoading } = useGetPostQuery(id);

    if (isLoading) return <Loading />;
    if (isError) return <ErrorMessage />;
    return (
        <div className="container post">
            <button className="post__btn" onClick={() => navigate('/')}>
                View Posts
            </button>
            <div className="post__card">
                <div className="post__body">
                    <h2 className="post__title">
                        {post.id} - {post.title}
                    </h2>
                    <p className="post__desc">{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
