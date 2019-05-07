import React, { Component } from 'react'
import styled from 'styled-components';

const BlockBoard = styled.div`
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
`;

export default class Board extends Component {
  render() {
    return (
      <BlockBoard>
        Help
      </BlockBoard>
    )
  }
}
