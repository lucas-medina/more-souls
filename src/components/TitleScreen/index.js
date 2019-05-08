import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenLite } from 'gsap/all'


const BlockTitleScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const TitleScreenWrapper = styled.div`
  text-align: center;
  animation: titleShowUp 2.5s ease-out 0s 1 backwards;
`;

const TitleScreenTitle = styled.h1`
  font-family: OptimusPrinceps;
  font-size: 6rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(255, 254, 12, 0.4);
`;

const TitleScreenSubtitle = styled.h1`
  font-family: OptimusPrinceps;
  font-size: 2rem;
  letter-spacing: 0.03em;
`;

const TitleScreenButton = styled.button`
  font-family: Times New Roman;
  font-size: 18px;
  background: transparent;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 2em;
  padding: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

export default class TitleScreen extends Component {

  constructor(props) {
    super(props);
    this.elTitle = null;
  }

  state = {
    titleSize: 'inherit'
  }

  componentDidMount() {
    this.getTitleFontSize();
  }

  getTitleFontSize = () => {
    console.log(this.elTitle);
    let currentFontSize = parseInt(window.getComputedStyle(this.elTitle).fontSize);
    let currentTitleSize = this.elTitle.getBoundingClientRect().width;
    let reason = window.innerWidth / currentTitleSize;
    let newFontSize = currentFontSize * reason;
    
    this.setState({ titleSize: newFontSize })
  }

  gameStart = () => {
    console.log(this.elTitle);
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <BlockTitleScreen>
        <TitleScreenWrapper>
          <TitleScreenTitle>
            <span style={{ fontSize: this.state.titleSize }} ref={el => this.elTitle = el}>{title || 'More souls'}</span>
          </TitleScreenTitle>
          <TitleScreenSubtitle style={{ fontSize: this.state.titleSize / 3 }}>{subtitle || 'Prepare to click'}</TitleScreenSubtitle>
        </TitleScreenWrapper>
        <TitleScreenButton onClick={this.gameStart}>Begin</TitleScreenButton>
      </BlockTitleScreen>
    )
  }
}
