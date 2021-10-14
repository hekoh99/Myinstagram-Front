import { gql } from "@apollo/client";

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($postId: Int) {
    ToggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($text: String!, $postId: Int!) {
    AddComment(text: $text, postId: $postId) {
      id
      text
    }
  }
`;
