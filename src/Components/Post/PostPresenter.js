import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import FatText from "../FatText";
import { Comment, EmptyHeart, FullHeart } from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 700px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 12px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Caption = styled.span`
  margin: 5px 30px 5px 30px;
  display: block;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 12px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.greyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default ({
  user: { nickname },
  caption,
  files,
  isLiked,
  likeCount,
  createdAt,
  actionLike,
}) => (
  <Post>
    <Header>
      <UserColumn>
        <FatText text={nickname} size={"15px"}></FatText>
      </UserColumn>
    </Header>

    <Caption>{caption}</Caption>

    <Files>
      {files && files.map((file) => <File id={file.id} src={file.url} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={actionLike}>
          {isLiked ? <FullHeart /> : <EmptyHeart />}
        </Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText
        text={likeCount === 1 ? "1 like" : `${likeCount} likes`}
      ></FatText>
      <Timestamp>{createdAt}</Timestamp>
      <Textarea placeholder={"add a comment..."} />
    </Meta>
  </Post>
);
