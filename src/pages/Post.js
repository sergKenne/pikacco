import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { fetchPostAsync } from '../store/post/postSlice';

const Post = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, error, post } = useSelector((state) => state.post);
  //console.log(post)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostAsync(id));
  }, [dispatch, id]);


  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!loading && !error && (
        <div className="container post">
          <button className='post__btn' onClick={() => navigate("/")}>Go Home</button>
          <div className="post__card">
            <div className="post__body">
              <h2 className="post__title">{post?.title}</h2>
              <p className="post__desc">{post?.body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Post