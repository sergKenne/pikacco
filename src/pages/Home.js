import React from 'react'
import CardList from '../components/CardList'
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useGetAllPostsQuery } from '../store/features/postsSlice';

const Home = () => {

  const { data: posts, isError, isLoading } = useGetAllPostsQuery();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;
  return <CardList posts={posts} />;
}

export default Home