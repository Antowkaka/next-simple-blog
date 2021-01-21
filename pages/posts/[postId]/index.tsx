import React, { EffectCallback, useEffect } from 'react';

import Header from '../../../layouts/Header';
import Container from '../../../layouts/Container';
import Footer from '../../../layouts/Footer';
import { IComment, IPost } from '../../../type';
import useShallowEqualSelector from '../../../hooks/useShallowEqualSelector';
import { useDispatch } from 'react-redux';
import { getPostRequestAction } from '../../../store/actions/getOnePostAction';
import { useRouter } from 'next/router';
import SinglePostBlock from '../../../layouts/SinglePostBlock';
import Comment from '../../../components/Comment';
import SinglePost from '../../../components/SinglePost';
import { clearCRUDtypeAction } from '../../../store/actions/helpActions';

const OnePost = ({ title, body }: IPost): JSX.Element => {
  const {
    post: { post, loading },
    comments: { show },
  } = useShallowEqualSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getPostRequestAction(Number(router.query.postId)));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SinglePostBlock>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <SinglePost id={post.id} title={post.title} body={post.body} />
          )}
          {show ? (
            post.comments ? (
              post.comments.map((comment: IComment) => (
                <Comment
                  key={comment.id}
                  postId={comment.postId}
                  body={comment.body}
                  id={comment.id}
                />
              ))
            ) : (
              <h2>No comments</h2>
            )
          ) : null}
        </SinglePostBlock>
      </Container>
      <Footer />
    </>
  );
};

export default OnePost;
