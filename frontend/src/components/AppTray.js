// AppTray.js
"use client";

import React from 'react';
import { Grid, Box, Container, Button, Typography } from '@mui/material';
import { faFilm, faN } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGoogle, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '../context/AppStateContext'; // Import the context

const appTray = [
    [
        { name: "youTubeButton", icon: faYoutube, contentColor: "red", contentID: "youTube", alias: "YouTube" },
        { name: "fMoviesButton", icon: faFilm, contentColor: "lightblue", contentID: "fMovies", alias: "FMovies" },
        { name: "googleChromeButton", icon: faGoogle, contentColor: "white", contentID: "googleChrome", alias: "Chrome" },
        { name: "primeVideosButton", icon: faAmazon, contentColor: "lightblue", contentID: "primeVideos", alias: "Prime" },
        { name: "netflixButton", icon: faN, contentColor: "red", contentID: "netflix", alias: "Netflix" }
    ]
];

export default function AppTray() {
    const { showApp } = useAppState(); // Use context to handle state

    return (
        <Container>
            <Grid container spacing={1}>
                {appTray.map((group, index) => (
                    <Grid item xs={12} key={index}>
                        <Box display="flex" justifyContent="center" mb={2}>
                            {group.map((button, secondIndex) => (
                                <Box mx={1} key={secondIndex}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => showApp(button.contentID)} // Call showApp from context
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 2,
                                            fontWeight: 'bold',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={button.icon}
                                            style={{ color: button.contentColor, fontSize: '1.25rem', fontWeight: 'bold' }}
                                        />
                                        <Typography variant="caption" sx={{ pt: 0.5, color: 'white', fontWeight: 'bold', fontSize: '0.50rem' }}>
                                            {button.alias}
                                        </Typography>
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
