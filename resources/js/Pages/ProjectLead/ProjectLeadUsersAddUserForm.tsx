import {Button, Stack, TextField} from "@mui/material";
import React from "react";
import {router, useForm} from "@inertiajs/react";

export default function ProjectLeadUsersAddUserForm({projectInstanceId}: {projectInstanceId: number}) {
    const {data, setData, processing} = useForm({
        name: '',
        password: '',
        password_confirmed: ''
    })

    const mismatch = data.password !== data.password_confirmed

    function submitUser() {
        router.post(route('project-instances.users.store', projectInstanceId), data)
    }

    return (
        <Stack spacing={2}>
            <TextField
                label={'Benutzername'}
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
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
                <Button variant={'contained'}>
                    Speichern
                </Button>
            </Stack>
        </Stack>
    )
}
