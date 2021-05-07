import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 414px;
  height: 800px;
  background-color: #ffffff;
  position: relative;
`;

function Template({ children }: any) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
