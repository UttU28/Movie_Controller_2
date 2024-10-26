// page.js
"use client";

import React from 'react';
import { Container, Typography } from "@mui/material";
import HomeFunctions from "../containers/HomeFunctions";
import HotKeys from "../containers/HotKeys";
import TabControl from "../containers/TabControl";
import AppTray from "../components/AppTray";
import YouTube from "../containers/YouTube";
import AmazonPrime from "../containers/AmazonPrime";
import Netflix from "../containers/Netflix";
import FMovies from "../containers/FMovies";
import GoogleChrome from "../containers/GoogleChrome";
import { useAppState } from '../context/AppStateContext'; // Import context

export default function Home() {
    const { visibleContentID } = useAppState(); // Get visible content from context

    return (
        <Container>
            <Typography variant="h4" component="h3" gutterBottom>
                APNE BAAP KA CONTROLLER 2.0
            </Typography>
            <HomeFunctions />
            <HotKeys />
            {!visibleContentID && (
                <>
                    <TabControl />
                    <AppTray />
                </>
            )}

            {/* Render selected content */}
            {visibleContentID === "youTube" && <YouTube />}
            {visibleContentID === "fMovies" && <FMovies />}
            {visibleContentID === "googleChrome" && <GoogleChrome />}
            {visibleContentID === "primeVideos" && <AmazonPrime />}
            {visibleContentID === "netflix" && <Netflix />}
        </Container>
    );
}
