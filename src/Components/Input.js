import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  height: 40px;
  padding: 0px 15px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
}) => {
  return (
    <Container
      classname={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
