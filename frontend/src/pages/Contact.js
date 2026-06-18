import React, { useRef } from "react";
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";
import LiquidEther from "../components/LiquidEther";
import VariableProximity from "../components/VariableProximity";

const PageBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  transition: background 0.3s;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  box-sizing: border-box;
  position: relative;
`;

const MadeByContainer = styled.div`
  padding: 32px 24px;
  max-width: 700px;
  width: 90vw;
  color: #fff;
  background: rgba(34, 34, 59, 0.85);
  border-radius: 18px;
  box-shadow: 0 6px 36px rgba(70,130,180,.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

function MadeBy() {
  const headingRef = useRef(null);
  const name1Ref = useRef(null);
  const name2Ref = useRef(null);
  const name3Ref = useRef(null);
  const name4Ref = useRef(null);

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
        <MadeByContainer>
          <div ref={headingRef} style={{ width: "100%", textAlign: "center", marginBottom: 32 }}>
            <VariableProximity
              label="About Us"
              containerRef={headingRef}
              fromFontVariationSettings="'wght' 4000, 'opsz' 18"
              toFontVariationSettings="'wght' 2000, 'opsz' 40"
              radius={100}
              falloff="linear"
              style={{
                fontSize: "4rem",
                fontWeight: 12000,
                color: "#aa82ffff",
              }}
            />
          </div>
          {/* <div ref={name1Ref} style={{ width: "100%", textAlign: "center", marginBottom: 18 }}>
            <VariableProximity
              label="Tanish Shelar - 24CS5005"
              containerRef={name1Ref}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              radius={80}
              falloff="linear"
              style={{
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div> */}
          <div ref={name2Ref} style={{ width: "100%", textAlign: "center", marginBottom: 18 }}>
            <VariableProximity
              label="Soham Vaity - 24CS5016"
              containerRef={name2Ref}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              radius={80}
              falloff="linear"
              style={{
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
          <div ref={name3Ref} style={{ width: "100%", textAlign: "center", marginBottom: 18 }}>
            <VariableProximity
              label="Syed Mohsin - 23CB1045"
              containerRef={name3Ref}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              radius={80}
              falloff="linear"
              style={{
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
          <div ref={name4Ref} style={{ width: "100%", textAlign: "center" }}>
            <VariableProximity
              label="Shreya Haruray - 23CB1027"
              containerRef={name4Ref}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              radius={80}
              falloff="linear"
              style={{
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "#fff",
              }}
            />
          </div>
        </MadeByContainer>
      </PageBackground>
    </AnimatedPage>
  );
}

export default MadeBy;
