import {router, useForm} from "@inertiajs/react";
import PaperSection from "@/Components/PaperSection";
import {Button, Stack, TextField, Typography} from "@mui/material";
import React from "react";
import {User} from "@/types";

export default function ProfilePassword({user}: {user: User}) {
    const { data, setData, processing, errors } = useForm({
        current_password: '',
        password: '',
        password_confirmed: ''
    })

    const mismatch = data.password !== data.password_confirmed

    function submitPassword() {
        router.put(route('auth.password.update', user.id), data)
    }

    return (
        <PaperSection>
            <Stack padding={4} spacing={2}>
                <Typography variant={'h2'} fontSize={24}>
                    Passwort
                </Typography>
                <TextField
                    type={'password'}
                    variant={'filled'}
                    label={'Altes Passwort'}
                    value={data.current_password}
                    onChange={event => setData('current_password', event.currentTarget.value)}
                />
                <TextField
                    type={'password'}
                    variant={'filled'}
                    label={'Neues Passwort'}
                    value={data.password}
                    onChange={event => setData('password', event.currentTarget.value)}
                />
                <TextField
                    type={'password'}
                    variant={'filled'}
                    label={'Passwort bestätigen'}
                    value={data.password_confirmed}
                    error={mismatch}
                    helperText={mismatch && "Passwörter müssen übereinstimmen."}
                    onChange={event => setData('password_confirmed', event.currentTarget.value)}
                />
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Button
                        variant={'contained'}
                        onClick={submitPassword}
                        disabled={processing || mismatch}
                    >
                        Speichern
                    </Button>
                </Stack>
            </Stack>
        </PaperSection>
    )
}
