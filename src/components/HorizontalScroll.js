import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './hoor.css'

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll('.section');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${container.offsetWidth}`,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="container">
      <div className="section">  <div className="dashboard-box">
            <ul>
              <h1>
                <li>
                  Create a button that says clock in and a text box that will
                  show you the time. After clicking the button, the button will
                  change to red and make it as clock out instead of green clock
                  in.
                </li>
                <li>
                  Make another h1 that will show what time and date wasthe clock
                  in or out.
                </li>
                <li>
                  Create different pages that will be inserted on this dashboard
                  pag that will show different functionalities
                </li>
              </h1>
            </ul>
          </div></div>
      <div className="section"><div className="dashboard-box">
            <ul>
              <h1>
                <li>
                  Create a button that says clock in and a text box that will
                  show you the time. After clicking the button, the button will
                  change to red and make it as clock out instead of green clock
                  in.
                </li>
                <li>
                  Make another h1 that will show what time and date wasthe clock
                  in or out.
                </li>
                <li>
                  Create different pages that will be inserted on this dashboard
                  pag that will show different functionalities
                </li>
              </h1>
            </ul>
          </div></div>
      <div className=""><div className="dashboard-box section">
            <ul>
              <h1>
                <li>
                  Create a button that says clock in and a text box that will
                  show you the time. After clicking the button, the button will
                  change to red and make it as clock out instead of green clock
                  in.
                </li>
                <li>
                  Make another h1 that will show what time and date wasthe clock
                  in or out.
                </li>
                <li>
                  Create different pages that will be inserted on this dashboard
                  pag that will show different functionalities
                </li>
              </h1>
            </ul>
          </div> </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default HorizontalScroll;
