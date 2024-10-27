"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Button, Slider, Typography, Container } from "@mui/material";

export default function TrackPad() {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [scrollStartY, setScrollStartY] = useState(null);
  const [multiplier, setMultiplier] = useState(1); // Movement sensitivity

  const deltaXRef = useRef(0);
  const deltaYRef = useRef(0);
  const requestIdRef = useRef(null);

  const sendMovement = useCallback(async () => {
    if (deltaXRef.current === 0 && deltaYRef.current === 0) {
      requestIdRef.current = requestAnimationFrame(sendMovement);
      return;
    }

    const dx = deltaXRef.current;
    const dy = deltaYRef.current;

    deltaXRef.current = 0;
    deltaYRef.current = 0;

    console.log(`Sending dx: ${dx}, dy: ${dy}`);

    try {
      await axios.post("http://192.168.0.132:5000/move", { dx, dy });
    } catch (error) {
      console.error("Error sending motion data:", error);
    }

    requestIdRef.current = requestAnimationFrame(sendMovement);
  }, []);

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(sendMovement);
    return () => {
      if (requestIdRef.current) cancelAnimationFrame(requestIdRef.current);
    };
  }, [sendMovement]);

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

    try {
      await axios.post("http://192.168.0.132:5000/scroll", { dy: deltaY });
    } catch (error) {
      console.error("Error sending scroll data:", error);
    }

    setScrollStartY(touch.clientY);
  };

  const handleScrollEnd = () => {
    setScrollStartY(null);
  };

  const handleLeftClick = async () => {
    try {
      await axios.post("http://192.168.0.132:5000/click", { button: "left" });
    } catch (error) {
      console.error("Error sending left click:", error);
    }
  };

  const handleRightClick = async () => {
    try {
      await axios.post("http://192.168.0.132:5000/click", { button: "right" });
    } catch (error) {
      console.error("Error sending right click:", error);
    }
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
        {/* Scrollbar */}
        <Box
          onTouchStart={handleScrollStart}
          onTouchMove={handleScrollMove}
          onTouchEnd={handleScrollEnd}
          sx={{
            flex: 0.1,
            height: "25vh",
            backgroundColor: "#ddd",
            borderRadius: 2,
            touchAction: "none",
          }}
        />

        {/* Trackpad */}
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            flex: 0.85,
            height: "25vh",
            backgroundColor: "#ddd",
            borderRadius: 2,
            touchAction: "none",
          }}
        />

        {/* Vertical Slider */}
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

      {/* Buttons Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleLeftClick}
          sx={{ width: "100%" }}
        >
          Left Click
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRightClick}
          sx={{ width: "100%" }}
        >
          Right Click
        </Button>
      </Box>
    </Container>
  );
}
