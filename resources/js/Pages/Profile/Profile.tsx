import {Button, Paper, Stack, TextField, Typography, useTheme} from "@mui/material";
import {useForm, usePage} from "@inertiajs/react";
import React from "react";
import ProfileUsername from "@/Pages/Profile/ProfileUsername.";
import ProfilePassword from "@/Pages/Profile/ProfilePassword";

export default function Profile() {
    const { auth } = usePage().props
    const theme = useTheme()
    return (
        <Stack spacing={4}>
            <ProfileUsername user={auth.user}/>
            <ProfilePassword user={auth.user}/>
        </Stack>
    )
}
