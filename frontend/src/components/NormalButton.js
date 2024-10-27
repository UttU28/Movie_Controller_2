// components/NormalButton.js
"use client";

import { Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '../context/AppStateContext'; 
import { sendButtonAction } from '../context/apiRequests'; 

export default function NormalButton({ buttonName, icon, alias, iconColor = 'white', whatToDoOnClick }) {
  const { goBack } = useAppState();

  const defaultHandleButtonClick = async () => {
    try {
      console.log(buttonName);
      if (buttonName === 'goBack') {
        goBack();
      } else {
        await sendButtonAction(buttonName);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button
      size="small"
      variant=""
      onClick={whatToDoOnClick || defaultHandleButtonClick}
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
