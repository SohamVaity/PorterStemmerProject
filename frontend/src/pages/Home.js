import React, { useRef } from "react";
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LiquidEther from "../components/LiquidEther";
import VariableProximity from "../components/VariableProximity";

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 2;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 180px;
  box-sizing: border-box;
  `;

const Button = styled.button`
  background-color: #aa82ffff;
  color: #fff;
  border: none;
  padding: 14px 28px;
  font-weight: bold;
  font-size: 36px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: -75%;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    transform: skewX(-25deg);
    transition: left 0.6s cubic-bezier(0.4, 1, 0.3, 1);
    pointer-events: none;
  }

  &:hover::before {
    left: 120%;
    transition: left 0.65s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

function Home() {
  const navigate = useNavigate();
  const variableHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);

  return (
    <AnimatedPage>
      <MainContainer>
        <LiquidEther
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -2,
            width: "100vw",
            height: "100vh",
          }}
          primaryColor="#353569"
          secondaryColor="#4a4e69"
        />

        <div
          ref={variableHeadingRef}
          style={{
            width: "100%",
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <VariableProximity
            label={"Welcome to the Porter Stemmer Project"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={variableHeadingRef}
            radius={120}
            falloff="linear"
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#aa82ffff",
              textAlign: "center",
              width: "100%",
              display: "inline-block",
            }}
          />
        </div>

        <div
          ref={subHeadingRef}
          style={{ width: "100%", textAlign: "center", marginBottom: "30px" }}
        >
          <VariableProximity
            label={"Explore the power of text processing through stemming."}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 800, 'opsz' 40"
            containerRef={subHeadingRef}
            radius={120}
            falloff="linear"
            style={{
              fontSize: "2rem",
              fontWeight: "300",
              color: "#ccc",
              textAlign: "center",
              width: "100%",
              display: "inline-block",
            }}
          />
        </div>

        <Button onClick={() => navigate("/algorithm")}>Get Started</Button>
      </MainContainer>
    </AnimatedPage>
  );
}

export default Home;
