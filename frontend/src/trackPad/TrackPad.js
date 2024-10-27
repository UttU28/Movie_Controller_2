// TrackPad.js
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Box, Slider, Container } from "@mui/material";
import ScrollBar from "./ScrollBar";
import ButtonContainer from "./ButtonContainer";
import { sendMovement, sendScroll, sendClick } from "../context/apiRequests";

export default function TrackPad() {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [scrollStartY, setScrollStartY] = useState(null);
  const [multiplier, setMultiplier] = useState(1); // Movement sensitivity

  const deltaXRef = useRef(0);
  const deltaYRef = useRef(0);
  const requestIdRef = useRef(null);

  const sendMovementRequest = useCallback(async () => {
    if (deltaXRef.current === 0 && deltaYRef.current === 0) {
      requestIdRef.current = requestAnimationFrame(sendMovementRequest);
      return;
    }

    const dx = deltaXRef.current;
    const dy = deltaYRef.current;

    deltaXRef.current = 0;
    deltaYRef.current = 0;

    console.log(`Sending dx: ${dx}, dy: ${dy}`);
    await sendMovement(dx, dy);

    requestIdRef.current = requestAnimationFrame(sendMovementRequest);
  }, []);

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(sendMovementRequest);
    return () => {
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
    };
  }, [sendMovementRequest]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (startX === null || startY === null) return;

    const touch = e.touches[0];
    const deltaX = (touch.clientX - startX) * multiplier;
    const deltaY = (touch.clientY - startY) * multiplier;

    deltaXRef.current += deltaX;
    deltaYRef.current += deltaY;

    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setStartY(null);
  };

  const handleScrollStart = (e) => {
    const touch = e.touches[0];
    setScrollStartY(touch.clientY);
  };

  const handleScrollMove = async (e) => {
    if (scrollStartY === null) return;

    const touch = e.touches[0];
    const deltaY = (touch.clientY - scrollStartY) * (0.5 * multiplier);

    console.log(`Sending scroll: dy=${deltaY}`);
    await sendScroll(deltaY);

    setScrollStartY(touch.clientY);
  };

  const handleScrollEnd = () => {
    setScrollStartY(null);
  };

  const handleLeftClick = () => {
    sendClick("left");
  };

  const handleRightClick = () => {
    sendClick("right");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ display: "flex", height: "300px", gap: 1, flex: 1 }}>
        <ScrollBar
          onTouchStart={handleScrollStart}
          onTouchMove={handleScrollMove}
          onTouchEnd={handleScrollEnd}
        />

        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            flex: 0.85,
            height: "25vh",
            backgroundColor: "#212121",
            borderRadius: 2,
            touchAction: "none",
          }}
        />

        <Box
          sx={{
            flex: 0.05,
            height: "25vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Slider
            orientation="vertical"
            min={0.1}
            max={5}
            step={0.1}
            value={multiplier}
            onChange={(e, newValue) => setMultiplier(newValue)}
            sx={{ height: "80%", width: "50%" }}
          />
        </Box>
      </Box>

      <ButtonContainer onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
    </Container>
  );
}
