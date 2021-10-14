import React, { useState } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT, TOGGLE_LIKE } from "./PostQueries";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  caption,
  createdAt,
  isLiked,
}) => {
  const [Liked, setIsLiked] = useState(isLiked); // Liked는 속임수용 변수, isLiked는 데이터베이스에 있는 값
  const [likeNum, setLikeNum] = useState(likeCount);
  const [toggleLike] = useMutation(TOGGLE_LIKE);
  const [addComment] = useMutation(ADD_COMMENT);

  const likeAction = async () => {
    if (Liked) {
      setIsLiked(false);
      setLikeNum(likeNum - 1);
    } else {
      setIsLiked(true);
      setLikeNum(likeNum + 1);
    }
    try {
      await toggleLike({
        variables: {
          postId: id,
        },
      });
    } catch {
      setIsLiked(!isLiked);
      toast.error("cannot update like");
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeNum}
      isLiked={Liked}
      caption={caption}
      createdAt={createdAt}
      setIsLiked={setIsLiked}
      setLikeNum={setLikeNum}
      actionLike={likeAction}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
  }),
  files: PropTypes.arrayOf(
    // files는 id와 url로 이루어진 arr이다.
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string,
    })
  ),
  likeCount: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default PostContainer;
