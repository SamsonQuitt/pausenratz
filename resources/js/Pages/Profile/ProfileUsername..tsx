import PaperSection from "@/Components/PaperSection";
import {Button, Stack, TextField, Typography} from "@mui/material";
import React from "react";
import {router, useForm} from "@inertiajs/react";
import {User} from "@/types";

export default function ProfileUsername({user}: {user: User}) {
    const { data, setData, processing, errors } = useForm({
        name: user.name,
    })

    function submitUsername() {
        router.put(route('users.name.update', user.id), data)
    }

    return (
        <PaperSection>
            <Stack padding={4} spacing={2}>
                <Typography variant={'h2'} fontSize={24}>
                    Benutzername
                </Typography>
                <TextField
                    variant={'filled'}
                    label={'Benutzername'}
                    value={data.name}
                    onChange={event => setData('name', event.currentTarget.value)}
                />
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Button
                        variant={'contained'}
                        onClick={submitUsername}
                        disabled={processing}
                    >
                        Speichern
                    </Button>
                </Stack>
            </Stack>
        </PaperSection>
    )

}
