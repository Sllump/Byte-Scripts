import React from "react";
import IconButton from "@mui/material/IconButton";
import SkipNextIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/PauseRounded";
import { Box } from "@mui/material";

export default function Controls(props: any) {
    const sx = props.sx;

    const playing = props.playing;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                ...sx,
            }}
        >
            <IconButton size="large" onClick={props.backwardMusic}>
                <SkipPreviousIcon fontSize="large" />
            </IconButton>

            <IconButton
                size="large"
                onClick={props.handlePlay}
            >
                {playing ? (
                    <PauseIcon fontSize="large" />
                ) : (
                    <PlayIcon fontSize="large" />
                )}
            </IconButton>

            <IconButton size="large" onClick={props.forwardMusic}>
                <SkipNextIcon fontSize="large" />
            </IconButton>
        </Box>
    );
}