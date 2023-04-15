import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin: 32px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;
const StyledDiv2 = styled.div`
  margin: 32px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;
const GenStyledDiv = styled.div`
  margin: 32px;
  padding: 32px;
  background-color: ${(props) => props.color};
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;

export default function App() {
  return (
    <>
      <StyledDiv>&lt;StyledDiv&gt;</StyledDiv>
      <StyledDiv>&lt;StyledDiv&gt;</StyledDiv>
      <StyledDiv2>&lt;StyledDiv2&gt;</StyledDiv2>
      <GenStyledDiv color="hotpink">
        &lt;GenStyledDiv color=&quot;hotpink&quot;&gt;
      </GenStyledDiv>
      <GenStyledDiv color="hotpink">
        &lt;GenStyledDiv color=&quot;hotpink&quot;&gt;
      </GenStyledDiv>
    </>
  );
}
