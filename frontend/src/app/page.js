// app/page.js
"use client";

import React from 'react';
import { Container, Typography } from "@mui/material";
import AppTray from "../components/AppTray";
import HomeFunctions from "../containers/HomeFunctions";
import HotKeys from "../containers/HotKeys";
import YouTube from "../containers/appFunctions/YouTube";
import AmazonPrime from "../containers/appFunctions/AmazonPrime";
import IBomma from "../containers/appFunctions/IBomma";
import Netflix from "../containers/appFunctions/Netflix";
import FMovies from "../containers/appFunctions/FMovies";
import GoogleChrome from "../containers/appFunctions/GoogleChrome";
import { useAppState } from '../context/AppStateContext'; // Import context
import TrackPad from "../containers/trackPad/TrackPad";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const { visibleContentID } = useAppState(); // Get visible content from context

    return (
        <Container>
            <Typography variant="h5" component="h5" gutterBottom>
                APNE BAAP KA CONTROLLER 2.0
            </Typography>
            <HomeFunctions />
            <HotKeys />
            {!visibleContentID && <AppTray />}

            {/* Render selected content */}
            {visibleContentID === "youTube" && <YouTube />}
            {visibleContentID === "fMovies" && <FMovies />}
            {visibleContentID === "iBomma" && <IBomma />}
            {visibleContentID === "googleChrome" && <GoogleChrome />}
            {visibleContentID === "primeVideos" && <AmazonPrime />}
            {visibleContentID === "netflix" && <Netflix />}

            <TrackPad />
            <SearchBar visibleContentId={visibleContentID} />
        </Container>
    );
}
