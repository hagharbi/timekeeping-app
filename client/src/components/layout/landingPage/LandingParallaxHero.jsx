import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CloudsUp from "./imagesCode/CloudsUp";
import CloudsOut from "./imagesCode/CloudsOut";
import Clouds from "./imagesCode/Clouds";
import Snowhill0 from "./imagesCode/SnowhillLayer0";
import Snowhill1 from "./imagesCode/SnowhillLayer1";
import Snowhill2 from "./imagesCode/SnowhillLayer2";
import Snowhill3 from "./imagesCode/SnowhillLayer3";
import Snowhill4 from "./imagesCode/SnowhillLayer4";
import CommentsParalax from "./imagesCode/CommentsParalax";
import EnvilopeParalax from "./imagesCode/EnvilopeParalax";
import GearsParalax from "./imagesCode/GearsParalax";
import StarsParalax from "./imagesCode/StarsParalax";
import ClockParalax from "./imagesCode/ClockParalax";
import CalendarParalax from "./imagesCode/CalendarParalax.jsx";
import CardOne from "./imagesCode/CardOne";


const Container = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

`;

const ParallaxLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ParallaxFrontLayer = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
`;

const TransitionParallaxImage = styled(Snowhill0)`
max-width: 100%;
vertical-align: bottom;
`;

const Content = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const createParallaxUp = (image, yOffset, multiplicator) => (
  <ParallaxLayer
    style={{
      transform: `translate3d(0, -${(yOffset * multiplicator) / 10}px, 0)`
    }}
  >
    {image()}
  </ParallaxLayer>
);

const createParallaxDown = (image, yOffset, multiplicator) => (
  <ParallaxLayer
    style={{
      transform: `translate3d(0, +${(yOffset * multiplicator) / 10}px, 0)`
    }}
  >
    {image()}
  </ParallaxLayer>
);



const createParallaxRight = (image, xOffset) => (
  <ParallaxLayer
    style={{
      'transform': 'translate('+ Math.abs(xOffset) +'px, '+ Math.abs(xOffset * 0.10) +'px)'
  }}
  >
    {image()}
  </ParallaxLayer>
);



const LandingParallaxHero = ({ yOffset }) => (
  <Container >
  {createParallaxUp(Snowhill0, yOffset, 8)}
  {createParallaxUp(CloudsUp, yOffset, 10)}
    {createParallaxDown(Clouds, yOffset, 10)}
    {createParallaxRight(CloudsOut, yOffset, 22)}
    {createParallaxUp(Snowhill4, yOffset, 12)}
    {createParallaxUp(ClockParalax, yOffset, 1)}
    {createParallaxUp(CommentsParalax, yOffset, 4)}
 
    {createParallaxUp(StarsParalax, yOffset, 9)}
    {createParallaxUp(Snowhill3, yOffset, 11)}
    {createParallaxUp(CalendarParalax, yOffset, 7)}
    {createParallaxRight(EnvilopeParalax, yOffset, 9)}
    {createParallaxUp(Snowhill2, yOffset, 10)}
    {createParallaxUp(Snowhill2, yOffset, 8)}
    {createParallaxDown(GearsParalax, yOffset, 4)}
    {createParallaxUp(Snowhill1, yOffset, 7)}
    {createParallaxUp(CardOne, yOffset, 7)}


    <ParallaxFrontLayer>
    <TransitionParallaxImage
      />
    <Content />
      </ParallaxFrontLayer>
  </Container>

  

);

LandingParallaxHero.propTypes = {
  yOffset: PropTypes.number.isRequired
};



export default LandingParallaxHero;
