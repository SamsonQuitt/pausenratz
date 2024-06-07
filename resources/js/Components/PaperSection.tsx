import {PropsWithChildren} from "react";
import {Paper, useTheme} from "@mui/material";

export default function PaperSection({children}: PropsWithChildren) {
    const theme = useTheme()
    return (
        <Paper
            elevation={3}
            sx={{backgroundColor: theme.palette.info.main}}
        >
            {children}
        </Paper>
    )
}
