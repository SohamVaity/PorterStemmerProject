import React, { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";
import LiquidEther from "../components/LiquidEther";

const AlgoBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  position: relative;
`;

const AlgoContainer = styled.div`
  background: rgba(34, 34, 59, 0.85);
  color: #fff;
  box-shadow: 0 6px 36px rgba(70, 130, 180, 0.09);
  border-radius: 18px;
  padding: 32px 24px;
  max-width: 700px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 32px;
  font-weight: 700;
  color: #fff;
`;

const TextBox = styled.textarea`
  width: 96%;
  min-height: 120px;
  border-radius: 7px;
  border: 1px solid #5227ff;
  padding: 16px;
  margin-bottom: 30px;
  font-size: 1.2rem;
  background: #232338;
  color: #fff;
  resize: vertical;
  transition: background 0.3s, color 0.3s;
`;

const Button = styled.button`
  background-color: #5227ff;
  color: #fff;
  border: none;
  padding: 14px 26px;
  font-size: 1.1rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  &:hover {
    background-color: #2e1b4e;
    transform: scale(1.05);
  }
`;

function Algorithm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleStem = async () => {
    try {
      const response = await fetch("http://localhost:5000/stem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: text }),
      });

      const data = await response.json();
      if (data.stemmed) {
        setResult(`Stemmed word: ${data.stemmed}`);
      } else {
        setResult("Error: " + (data.error || "Unknown"));
      }
    } catch (err) {
      setResult("⚠️ Failed to connect to backend");
    }
  };

  return (
    <AnimatedPage>
      <AlgoBackground>
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
        <AlgoContainer>
          <Heading>Porter Stemmer Algorithm Demo</Heading>
          <TextBox
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={handleStem}>Run Algorithm</Button>
          {result && (
            <p
              style={{
                marginTop: "20px",
                fontSize: "1.2rem",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {result}
            </p>
          )}
        </AlgoContainer>
      </AlgoBackground>
    </AnimatedPage>
  );
}

export default Algorithm;
