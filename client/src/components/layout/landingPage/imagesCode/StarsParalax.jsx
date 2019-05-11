import React from "react";

const StarsParalax = props => (
    <svg id='SchutzParalax'
    viewBox='0 0 1920 1000'>
        <polygon 
        fill="#efd387"
        points='567.86 325.08 570.59 350.82 592.35 355.54 572.23 365.1 575.62 388.55 559.27 371.1 538.4 381.03 549.51 360.49 534.91 346.84 556.55 347.98 567.86 325.08'
        />
        <polygon
        fill="#efd387"
        opacity={0.84}
        points='512.37 327.6 514.5 348.02 531.84 351.91 515.8 359.51 518.54 378.11 505.51 364.32 488.95 372.21 497.83 355.9 486.09 344.9 503.36 345.8 512.37 327.6'
        />
        <polygon
        fill="#efd387"
        opacity={0.64}
        points='467.58 329.3 469.37 346.1 483.6 349.21 470.49 355.43 472.61 370.61 461.99 359.29 448.48 365.8 455.66 352.36 446.14 343.45 460.22 344.15 467.58 329.3'
        />
    </svg>
);

export default StarsParalax;

{/* 

import CalendarParalax from "./svg/CalendarParalax";
import ClockParalax from "./svg/ClockParalax";
import CommentsParalax from "./svg/CommentsParalax";
import EnvilopeParalax from "./svg/EnvilopeParalax";
import GearsParalax from "./svg/GearsParalax";
import StarsParalax from "./svg/StarsParalax";


const CalendarParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;
const ClockParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;
const CommentsParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;
const EnvilopeParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;
const GearsParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;
const StarsParalax = styled.div`
position: absolute;
z-index: 999999;
width: 100%;
height: 100%;
margin: 0 0 0 0;
`;


{createParallaxLayer(CalendarParalax, yOffset, 2)}
{createParallaxLayer(StarsParalax, yOffset, 3)}
{createParallaxLayer(ClockParalax, yOffset, 4)}
{createParallaxLayer(CommentsParalax, yOffset, 5)}
{createParallaxLayer(EnvilopeParalax, yOffset, 6)}
{createParallaxLayer(GearsParalax, yOffset, 7)}


*/}