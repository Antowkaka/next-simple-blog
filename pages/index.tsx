import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../layouts/Header';
import Container from '../layouts/Container';
import Footer from '../layouts/Footer';
import PostsBlock from '../layouts/PostsBlock';
import Post from '../components/Post';

import { PostsState } from '../type';
import useShallowEqualSelector from '../hooks/useShallowEqualSelector';
import { getPostsRequestAction } from '../store/actions/getPostsAction';
import { CombinedState } from 'redux';
import { clearStatusActions } from '../store/actions/helpActions';

function Home(): React.ReactFragment {
  const {
    posts: { posts, loading },
  }: CombinedState<{ posts: PostsState }> = useShallowEqualSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsRequestAction());
    dispatch(clearStatusActions());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PostsBlock>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            posts.map((post) => (
              <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            ))
          )}
        </PostsBlock>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
