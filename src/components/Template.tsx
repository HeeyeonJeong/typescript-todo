import React, { ReactNode } from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 414px;
  height: 800px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Template = ({ children }: { children: ReactNode }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
