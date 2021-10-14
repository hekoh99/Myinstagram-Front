import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  font-size: ${(props) => props.font};
`;

const FatText = ({ text, size = "15px" }) => <Text font={size}>{text}</Text>;

FatText.propTypes = {
  text: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
};

export default FatText;
