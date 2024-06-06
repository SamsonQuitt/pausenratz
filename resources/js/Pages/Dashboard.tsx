import {Head, router, usePage} from '@inertiajs/react';
import {PageProps} from '@/types';
import {IconButton, Stack} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {NotListedLocation} from "@mui/icons-material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';

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
            <Stack spacing={3}>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Stack>
                        <IconButton onClick={pause}>
                            <HomeIcon/>
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
