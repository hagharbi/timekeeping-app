import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CloudsUp from "./imagesCode/CloudsUp";
import Clouds from "./imagesCode/Clouds";
import Snowhill0 from "./imagesCode/SnowhillLayer0";
import Snowhill1 from "./imagesCode/SnowhillLayer1";
import Snowhill2 from "./imagesCode/SnowhillLayer2";
import Snowhill3 from "./imagesCode/SnowhillLayer3";
// import Snowhill4 from "./imagesCode/SnowhillLayer4";
import CommentsParallax from "./imagesCode/CommentsParallax";
import EnvilopeParallax from "./imagesCode/EnvilopeParallax";
import GearsParallax from "./imagesCode/GearsParallax";
import StarsParallax from "./imagesCode/StarsParallax";
import ClockParallax from "./imagesCode/ClockParallax";
import CalendarParallax from "./imagesCode/CalendarParallax.jsx";
import ClockhaloRingParallax from "./imagesCode/ClockParallax-haloRing.jsx";

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
      'transform': 'translate(' + Math.abs(xOffset) + 'px, ' + Math.abs(xOffset * 0.10) + 'px)'
    }}
  >
    {image()}
  </ParallaxLayer>
);



const LandingParallaxHero = ({ yOffset }) => (
  <Container >

    {createParallaxUp(CommentsParallax, yOffset, 1)}
    {/* {createParallaxUp(Snowhill0, yOffset, 13)} */}
    {createParallaxDown(CloudsUp, yOffset, 0)}
    {createParallaxDown(Clouds, yOffset, 0)}
    {createParallaxRight(EnvilopeParallax, yOffset, 6)}

    {/* {createParallaxUp(Snowhill4, yOffset, 12)} */}
    {createParallaxDown(GearsParallax, yOffset, 0)}

    {createParallaxUp(StarsParallax, yOffset, 6)}
    {createParallaxUp(Snowhill3, yOffset, 11)}
    {createParallaxUp(ClockhaloRingParallax, yOffset, 3.6)}
    {createParallaxUp(ClockParallax, yOffset, 3.6)}

    {createParallaxUp(Snowhill2, yOffset, 10)}
    {createParallaxUp(Snowhill2, yOffset, 8)}
    {createParallaxUp(CalendarParallax, yOffset, 7)}
    {createParallaxUp(Snowhill1, yOffset, 7)}



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
