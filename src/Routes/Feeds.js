import React from "react";
import { gql, useQuery } from "@apollo/client";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const FEED_QUERY = gql`
  {
    SeeFeed {
      id
      author {
        id
        nickname
      }
      files {
        id
        url
      }
      caption
      createdAt
      countLike
      isLiked
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  if (!loading) {
    console.log(data.SeeFeed);
    return (
      <Wrapper>
        <Helmet>
          <title>Feed | Prismagram</title>
        </Helmet>
        {data.SeeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            user={post.author}
            files={post.files}
            likeCount={post.countLike}
            caption={post.caption}
            isLiked={post.isLiked}
            createdAt={post.createdAt}
          />
        ))}
      </Wrapper>
    );
  } else
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
};
