import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



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



const Container = styled.div`
  height: 100vh;
  position: absolute;
  z-index: "-99999999!important"
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
background-color: green;
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
  z-index:"-9999999999";
`;

const TransitionParallaxImage = styled(Snowhill0)`
margin: -4px 0 0 0;
`;

const Content = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const createParallaxLayer = (image, yOffset, multiplicator) => (
  <ParallaxLayer
    style={{
      transform: `translate3d(0, -${(yOffset * multiplicator) / 10}px, 0)`
    }}
  >
    {image()}
  </ParallaxLayer>
);

const LandingParallaxHero = ({ yOffset }) => (
  <Container >
  {createParallaxLayer(Snowhill0, yOffset, 6)}
    {createParallaxLayer(Clouds, yOffset, 2 )}
    {createParallaxLayer(Snowhill4, yOffset, 6)}
    {createParallaxLayer(Snowhill3, yOffset, 7)}
    {createParallaxLayer(Snowhill2, yOffset, 8)}
    {createParallaxLayer(Snowhill1, yOffset, 9)}
    {createParallaxLayer(EnvilopeParalax, yOffset, 6)}
    {createParallaxLayer(GearsParalax, yOffset, 10)}
    {createParallaxLayer(ClockParalax, yOffset, 0)}
    {createParallaxLayer(CommentsParalax, yOffset, 5)}
    {createParallaxLayer(CalendarParalax, yOffset, 7)}
    {createParallaxLayer(StarsParalax, yOffset, 8)}

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
