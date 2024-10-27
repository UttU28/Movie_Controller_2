// components/NormalButton.js
"use client";

import { Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '../context/AppStateContext'; // Import context

export default function NormalButton({ buttonName, icon, alias, iconColor = 'white', whatToDoOnClick }) {
  const { goBack } = useAppState(); // Use context to handle goBack

  const defaultHandleButtonClick = async () => {
    try {
      console.log(buttonName);
      if (buttonName === 'goBack') {
        goBack(); // Call goBack to reset visibility
      } else {
        const response = await fetch('http://localhost/action', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ action: buttonName }),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log('Success:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button
      size="small"
      variant=""
      onClick={whatToDoOnClick || defaultHandleButtonClick} // Use provided function or default
      sx={{
        width: 50,
        height: 50,
        padding: 0,
        margin: 0,
        borderRadius: 2,
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: iconColor, fontSize: '1.25rem' }} />
      <Typography variant="caption" sx={{ pt: 0.5, color: iconColor, fontWeight: 'bold', fontSize: '0.50rem' }}>
        {alias}
      </Typography>
    </Button>
  );
}
