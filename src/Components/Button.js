import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
`;

const Button = ({ text }) => {
  return <Container>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
