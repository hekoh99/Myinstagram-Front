import { gql } from "@apollo/client";

export const SECRET_CODE = gql`
  mutation RequestSecret($email: String!) {
    RequestSecret(email: $email)
  }
`;

export const CREATE_ACCOUT = gql`
  mutation CreateAccount(
    $nickname: String!
    $email: String!
    $firstname: String!
    $lastname: String!
  ) {
    CreateAccount(
      email: $email
      nickname: $nickname
      firstname: $firstname
      lastname: $lastname
    )
  }
`;

export const CONFIRM_SECRET = gql`
  mutation ConfirmSecret($secret: String!, $email: String!) {
    ConfirmSecret(secret: $secret, email: $email)
  }
`;

export const LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
