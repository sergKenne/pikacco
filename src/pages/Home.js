import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList'
import { fetchPostsAsync } from '../store/posts/postsSlice';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';


const Home = () => {
  const { loading, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPostsAsync())
  }, [])
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {posts.length&& (<CardList posts={posts} />)}
    </>
  )
}

export default Home