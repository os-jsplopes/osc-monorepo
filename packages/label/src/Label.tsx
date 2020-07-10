import React, { FC } from "react";
import styled from "styled-components";

const LabelStyle = styled.span`
  color: #333;
  font-size: 1rem;
  font-weight: 600;
`;

interface ILabelProps {
  text: string;
}

const Label: FC<ILabelProps> = ({ text }: ILabelProps) => <LabelStyle>My label3 {text}</LabelStyle>;

export default Label;
