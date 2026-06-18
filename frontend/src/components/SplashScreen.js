import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SplashContainer = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #280059ff, #6200ffff);
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    show && (
      <SplashContainer>
        <motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
  <img
    src="/img/logo.png"
    alt="DY Patil Logo"
    style={{ width: 700, height: "auto", borderRadius: 12 }}
  />
</motion.div>
      </SplashContainer>
    )
  );
}

export default SplashScreen;
