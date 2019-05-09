import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Genius from '../../lib/Genius';
import soulEngineStatus from '../../state/store/storeSoulEngineStatus'
import { connect } from 'react-redux'
import { changeStatusToTitlescreen } from '../../state/actions/actionSoulEngineStatus';

const AnimationTitle = keyframes`
  0% {
    transform: scale(1.1);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    filter: blur(0px);
  }
`;
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
  animation: ${AnimationTitle} 2.5s ease-out 0s 1 backwards;
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

class TitleScreen extends Component {

  constructor(props) {
    super(props);
    this.elTitle = null;
  }

  state = {
    frameSize: Genius.percentage(window.innerWidth, 80),
    titleSize: 40
  }

  componentDidMount() {
    this.initFrameSizeTitle();
    window.addEventListener('resize', this.adaptTitleOnResize);
    this.props.changeStatusToTitlescreen();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adaptTitleOnResize);
  }

  initFrameSizeTitle = () => {
    let { frameSize, titleSize } = this.state;
    let elWidth = this.elTitle.getBoundingClientRect().width;
    let titleReason = frameSize / elWidth;
    let newTitleSize = titleSize * titleReason;
    this.setState({ titleSize: newTitleSize });
  }

  adaptTitleOnResize = () => {
    const { frameSize, titleSize } = this.state;
    let newFrameSize = Genius.percentage(window.innerWidth, 80);
    
    let frameReason = newFrameSize / frameSize;
    let newTitleSize = titleSize * frameReason;
    this.setState({ titleSize: newTitleSize, frameSize: newFrameSize });
  }

  gameStart = () => {
    console.log(this.elTitle);
  }

  render() {
    const { title, subtitle, soulEngineStatus } = this.props;
    const { titleSize } = this.state;
    return (
      <BlockTitleScreen>
        <TitleScreenWrapper>
          <TitleScreenTitle>
            <span style={{ fontSize: this.state.titleSize }} ref={el => this.elTitle = el}>
              {title || 'More souls'}
            </span>
          </TitleScreenTitle>
          <TitleScreenSubtitle style={{ fontSize: titleSize === null ? 20 : titleSize / 3 }}>
            {subtitle || 'Prepare to click'}
          </TitleScreenSubtitle>
        </TitleScreenWrapper>
        { 
          soulEngineStatus === 'titlescreen' 
          ? <TitleScreenButton onClick={this.gameStart}>Begin</TitleScreenButton>
          : null
        }
      </BlockTitleScreen>
    )
  }
}

const mapStateToProps = ({ soulEngineStatus }) => ({ soulEngineStatus });

export default connect(mapStateToProps, { changeStatusToTitlescreen })(TitleScreen)