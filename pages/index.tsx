import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Header from "../layouts/Header";
import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import PostsBlock from "../layouts/PostsBlock";
import Post from "../components/Post";
import { GetServerSideProps } from "next";

import { PostsState } from "../type";
import useShallowEqualSelector from "../hooks/useShallowEqualSelector";
import { getPostsRequestAction } from "../store/actions/getPostsAction";
import { CombinedState } from "redux";

export default function Home(): React.ReactFragment {
  const { post: { posts, loading, error } }: CombinedState<{ post: PostsState }> = useShallowEqualSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPostsRequestAction());
  }, [])

  return (
    <>
        <Header/>
        <Container>
            <PostsBlock>
                {loading ? <h1>Loading...</h1> : posts.map(post => (
                        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
                    )
                )}
            </PostsBlock>
        </Container>
        <Footer/>
    </>
  )
}

/*export async function getServerSideProps(): Promise<{ props: { data: IPost[] } }> {
    const res = await axios.get<IPost[]>('https://simple-blog-api.crew.red/posts');

    return {
        props: { data: res.data }
    }
}*/
