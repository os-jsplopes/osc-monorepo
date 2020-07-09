import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background: grey;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 9px 36px;
`;

const Button = ({ children }) => <ButtonStyle>{children}</ButtonStyle>;

export default Button;
