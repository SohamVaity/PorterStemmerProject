import React, { useRef } from "react";
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";
import LiquidEther from "../components/LiquidEther";
import VariableProximity from "../components/VariableProximity";

const AboutContainer = styled.div`
  padding: 24px 32px;
  max-width: 1000px;
  width: 90vw;
  color: #fff;
  background: rgba(34,34,59,0.85);
  border-radius: 18px;
  box-shadow: 0 6px 36px rgba(70,130,180,.09);
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
`;

const PageBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: transparent;
  transition: background 0.3s;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 60px;
  box-sizing: border-box;
  position: relative;
`;

function About() {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

  return (
    <AnimatedPage>
      <PageBackground>
        <LiquidEther
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
          }}
        />
        <AboutContainer>
          <div ref={headingRef} style={{ width: "100%", textAlign: "center", marginBottom: 32 }}>
            <VariableProximity
              label="About This Project"
              containerRef={headingRef}
              fromFontVariationSettings="'wght' 4000, 'opsz' 14"
              toFontVariationSettings="'wght' 2000, 'opsz' 40"
              radius={120}
              falloff="linear"
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                color: "#aa82ffff",
              }}
            />
          </div>
          <div ref={para1Ref} style={{ width: "100%", textAlign: "center", fontSize: "2rem", marginBottom: 16 }}>
            <VariableProximity
              label="This project is a modern frontend web demonstration of the Porter Stemmer Algorithm, a key technique in Natural Language Processing (NLP). The app reduces English words to their base or root form, making it easier to group similar meanings together for analysis and machine learning tasks."
              containerRef={para1Ref}
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1500, 'opsz' 30"
              radius={100}
              falloff="linear"
              style={{
                fontSize: "1.7rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
          <div ref={para2Ref} style={{ width: "100%", textAlign: "center", fontSize: "2rem", marginBottom: 12 }}>
            <VariableProximity
              label='The Porter Stemmer works by stripping common suffixes from words through a series of rules and steps, helping standardize different word variants for better searching and text analysis. For example, "running," "runner," and "ran" can all be reduced to their root "run."'
              containerRef={para2Ref}
              fromFontVariationSettings="'wght' 7001500, 'opsz' 9"
              toFontVariationSettings="'wght' 1500, 'opsz' 30"
              radius={100}
              falloff="linear"
              style={{
                fontSize: "1.7rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
          <div ref={para3Ref} style={{ width: "100%", textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>
            <VariableProximity
              label="You can use this site to visually explore stemming concepts and see how word forms are simplified."
              containerRef={para3Ref}
              fromFontVariationSettings="'wght' 7001500, 'opsz' 9"
              toFontVariationSettings="'wght' 1500, 'opsz' 30"
              radius={100}
              falloff="linear"
              style={{
                fontSize: "1.7rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
        </AboutContainer>
      </PageBackground>
    </AnimatedPage>
  );
}

export default About;
