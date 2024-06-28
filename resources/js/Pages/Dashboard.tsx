import {Head, router, usePage} from '@inertiajs/react';
import {PageProps, UserState} from '@/types';
import {Button, IconButton, Stack, Typography, useTheme} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {NotListedLocation} from "@mui/icons-material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import React from "react";

export default function Dashboard({userStates}: PageProps<{userStates: UserState[] }>) {
    const {auth} = usePage().props
    const theme = useTheme()
    console.log(auth)
    function pause() {
        if (auth.user.state === 0) {
            router.post(route('users.pauses.store', auth.user.id), {
                time_start: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
        } else if (auth.user.state !== 1) {
            router.put(route('users.pauses.update', auth.user.id), {
                time_end: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
        }
    }

    function submitState(newState: number) {
        router.put(route('users.state.update', auth.user.id),
            {
                'newState': newState
            })
    }

    console.log(userStates)

    return (
        <>
            <Head title="Dashboard" />
            <Stack spacing={4} paddingY={10} flexGrow={1} justifyContent={'space-around'}>
                <Stack width={1} alignItems={'center'}>
                    <Typography>
                        Dein Status:
                    </Typography>
                    <Typography  color={auth.user.state === 0 ? 'green': 'orange'}>
                        {auth.user.state === 0 ?
                            'Auf dem Gelände' :
                            'Abwesend'
                        }
                    </Typography>
                </Stack>
                <Stack spacing={1} alignItems={'center'} width={1} justifyContent={'center'}>
                    <Button
                        onClick={pause}
                        sx={{
                            borderRadius: '100%',
                            width: '200px',
                            height: '200px',
                            boxShadow: '0 0 10px ' + theme.palette.primary.main,
                            '&:hover': {
                                boxShadow: '0 0 30px ' + theme.palette.primary.main,
                            }
                        }}
                    >
                        {auth.user.state === 0 ?
                            <PauseCircleIcon/> :
                            <HomeIcon/>
                        }

                    </Button>
                    <Typography>
                        {auth.user.state === 0 ? 'Pause' : 'Zurück'}
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Stack alignItems={'center'}>
                        <Button
                            onClick={() => submitState(2)}
                            sx={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '100%',
                                boxShadow: '0 0 10px ' + theme.palette.primary.main,
                            }}
                        >
                            <NotListedLocation/>
                        </Button>
                        Ausflug
                    </Stack>
                    <Stack alignItems={'center'}>
                        <Button
                            onClick={() => submitState(3)}
                            sx={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '100%',
                            boxShadow: '0 0 10px ' + theme.palette.primary.main,
                        }}
                        >
                            <NotInterestedIcon/>
                        </Button>
                        Abwesend
                    </Stack>
                </Stack>


            </Stack>
        </>
    );
}
