// ButtonContainer.js
"use client";

import { Box, Button } from "@mui/material";

export default function ButtonContainer({ onLeftClick, onRightClick }) {
  return (
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
        onClick={onLeftClick}
        sx={{ width: "100%", color: 'white', border: '1px solid white', borderRadius: 2, fontSize: 10 }}
      >
        Left Click
      </Button>
      <Button
        onClick={onRightClick}
        sx={{ width: "100%", color: 'white', border: '1px solid white', borderRadius: 2, fontSize: 10 }}
      >
        Right Click
      </Button>
    </Box>
  );
}
