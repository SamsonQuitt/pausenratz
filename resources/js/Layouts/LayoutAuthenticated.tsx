import React, { PropsWithChildren } from 'react';
import {Link, router, usePage} from '@inertiajs/react';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Container,
    IconButton, Paper,
    Stack,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from '@mui/icons-material/Home';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';


export default function LayoutAuthenticated({ children }: PropsWithChildren<{}>) {
    const [botSelected, setBotSelected] = React.useState()
    const { auth } = usePage().props
    const theme = useTheme()

    function handleLogout() {
        router.post('/logout')
    }

    return (
        <>
            <Container maxWidth={'sm'}>
                <AppBar>
                    <Toolbar sx={{justifyContent: 'center'}}>
                        <Stack
                            width={1}
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignContent={'center'}
                            alignItems={'center'}
                            maxWidth={'sm'}
                        >
                            <Typography>
                                Spielratz-Logo
                            </Typography>
                            <IconButton
                                onClick={handleLogout}
                            >
                                <LogoutIcon/>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Stack
                    component={'main'}
                    paddingY={10}
                    minHeight={'90vh'}
                >
                    {children}
                </Stack>
                <Paper
                    elevation={3}
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: 1,
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <BottomNavigation
                        value={botSelected}
                        onChange={(e, newValue) => setBotSelected(newValue)}
                        showLabels={true}
                        sx={{
                            width: 1,
                            maxWidth: 'sm',
                        }}
                    >
                        <BottomNavigationAction
                            component={Link}
                            href={route('dashboard')}
                            value={route('dashboard')}
                            label={'Home'}
                            icon={<HomeIcon/>}
                        />
                        <BottomNavigationAction
                            component={Link}
                            href={route('users-by-pause')}
                            value={route('users-by-pause')}
                            label={'Pausen'}
                            icon={<AddAlarmIcon/>}
                        />
                        <BottomNavigationAction
                            component={Link}
                            href={route('profile.edit')}
                            value={route('profile.edit')}
                            label={'Profil'}
                            icon={<AccountCircleIcon/>}
                        />
                        {auth.user.roles.find(role => role.keyowrd === 'pl') !== null &&
                            <BottomNavigationAction
                                component={Link}
                                href={route('pl.view')}
                                value={route('pl.view')}
                                label={'Projektleitung'}
                                icon={<PeopleAltIcon/>}
                            />
                        }
                    </BottomNavigation>
                </Paper>
            </Container>
        </>
    );
}
