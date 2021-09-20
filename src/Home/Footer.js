import React, { memo } from 'react'
import "../CSS/footer.css"

export default memo(function Footer() {
    return (
        <div id="footer">
            <div class="footer-column">
                <h2>About Us:</h2>
                <p>
                We are a team of content creaters dedicated to making multimedia experiences.
                <br></br>
                <br></br>
                Our goal is to share our tools with others at DS so that we can all create 3DExperiences together.
                </p>
            </div>
            <div class="footer-column">
                <h2>Learn More:</h2>
                    <p>
                   Lorem ipsum
                    <br></br>
                    <br></br>
                   Lorem Ipsum
                    </p>
            </div>
        </div>
    )
})
