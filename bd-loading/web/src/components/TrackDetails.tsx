import React from "react";

import { shallowEqual, useSelector } from "react-redux";

import Box from "@mui/material/Box";

export default function TrackDetails(props: any) {
    const sx = props.sx;

    return (
        <Box sx={sx}>
            <Box
                sx={{
                    typography: "subtitl3",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}
            >
                {props.title}
            </Box>
            <Box
                sx={{
                    typography: "subtitle2",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}
            >
                {props.artist}
            </Box>
        </Box>
    );
}