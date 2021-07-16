import React from "react";
import styled from "styled-components";

// Write your Character component here

export default function Character(props) {
  const CharBox = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5vw;
    width: 40%;
    height: 5vw;
    padding: 1% 5%;
    margin: 0.5% 0;
    border: solid 8px;
    border-color: ${(props) => props.theme.tertiaryColor};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
  `;

  return (
    <CharBox>
      <h2>{props.data.name}</h2>
      <button onClick={() => props.open(props.index)}>Details</button>
    </CharBox>
  );
}
