import React from "react";
import { Slider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import secondsToString from "../utils/secondsToString";

export default function ProgressBar(props: any) {
    const sx = props.sx;

    // NaN on division by zero
    const progress = (props.timePlayed / (props.timeLeft + props.timePlayed)) * 100 || 0;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                wrap: "nowrap",
                alignItems: "center",
                "& > .children": {
                    mx: 1,
                },
                ...sx,
            }}
        >
            <Typography className="children">
                {secondsToString(props.timePlayed)}
            </Typography>
            <Slider
                className="children"
                aria-labelledby="continuous-slider"
                value={progress}
            />
            <Typography className="children">{secondsToString(props.timeLeft)}</Typography>
        </Box>
    );
}