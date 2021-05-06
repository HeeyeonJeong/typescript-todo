import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 414px;
  height: 800px;
  flex-grow: 0;
  padding: 0 0 13px;
  background-color: #ffffff;
`;

function Template({ children }: any) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
