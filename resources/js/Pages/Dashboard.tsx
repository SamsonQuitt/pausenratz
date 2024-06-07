import {Head, router, usePage} from '@inertiajs/react';
import {PageProps} from '@/types';
import {IconButton, Stack, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {NotListedLocation} from "@mui/icons-material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export default function Dashboard({}: PageProps<{ }>) {
    const {auth} = usePage().props
    console.log(auth)
    function pause() {
        if (auth.user.state === 0) {
            router.post(route('users.pauses.store', auth.user.id), {
                time_start: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
        } else if (auth.user.state === 1) {
            router.put(route('users.pauses.update', auth.user.id), {
                time_end: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
        }
    }

    return (
        <>
            <Head title="Dashboard" />
            <Stack spacing={3} paddingY={10} flexGrow={1} justifyContent={'space-around'}>
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
                <Stack direction={'row'} justifyContent={'center'}>
                    <Stack>
                        <IconButton onClick={pause}>
                            {auth.user.state === 0 ?
                                <PauseCircleIcon/> :
                                <HomeIcon/>
                            }
                        </IconButton>
                        {auth.user.state === 0 ? 'Pause' : 'Zurück'}
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Stack>
                        <IconButton>
                            <NotListedLocation/>
                        </IconButton>
                        Ausflug
                    </Stack>
                    <Stack>
                        <IconButton>
                            <NotInterestedIcon/>
                        </IconButton>
                        Abwesend
                    </Stack>
                </Stack>


            </Stack>
        </>
    );
}
