import React, { useState } from 'react';
import { Container } from "react-bootstrap"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Video() {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const [hoveredDiv, setHoveredDiv] = useState(false);
    const toggleHoverDiv = () => setHoveredDiv(!hovered);


    return (
        <Container className="play-cta h5 d-flex justify-content-center"
            id={hoveredDiv ? 'animated' : ''}
            onMouseEnter={toggleHoverDiv}
            onMouseLeave={toggleHoverDiv}
        >
            <button
                className={hovered ? 'pulse animated' : ''}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
                Watch Video
            </button>
            &nbsp; &nbsp;
            {/* <svg className="fa-2x text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
            </svg> */}
        </Container>
    )
}

export default Video
