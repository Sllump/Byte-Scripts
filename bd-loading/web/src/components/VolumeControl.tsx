import React from "react";

import { Slider, IconButton, Box } from "@mui/material";
import {
    VolumeUp as VolumeUpIcon,
    VolumeDown as VolumeDownIcon,
} from "@mui/icons-material";

export default function VolumeControl(props: any) {
    const sx = props.sx;

    const handleSliderChange = (event: any, newValue: any) => {

    };

    return (
        <Box
            sx={{
                display: "flex",
                direction: "row",
                wrap: "nowrap",
                alignItems: "center",
                "& > .children": {
                    mx: 1,
                },
                ...sx,
            }}
        >
            <IconButton
                className="children"
                size="large"
                onClick={props.handleDecreaseVolume}
            >
                <VolumeDownIcon />
            </IconButton>
            <Slider
                className="children"
                value={props.volume}
                aria-labelledby="continuous-slider"
                onChange={props.handleVolume}
                min={0}
                max={100}
            />
            <IconButton
                className="children"
                size="large"
                onClick={props.handleIncreaseVolume}
            >
                <VolumeUpIcon />
            </IconButton>
        </Box>
    );
}