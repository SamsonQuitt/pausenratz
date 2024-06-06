import React, { PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Container,
    IconButton,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from '@mui/icons-material/Home';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';


export default function LayoutAuthenticated({ children }: PropsWithChildren<{}>) {
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
                                component={Link}
                                href={route('login')}
                            >
                                <AccountCircleIcon/>
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Stack
                    component={'main'}
                    paddingTop={10}
                    minHeight={'90vh'}
                >
                    {children}
                </Stack>
                <BottomNavigation
                    showLabels={true}
                >
                    <BottomNavigationAction
                        component={Link}
                        href={route('dashboard')}
                        label={'Home'}
                        icon={<HomeIcon/>}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href={route('users-by-pause')}
                        label={'Pausen'}
                        icon={<AddAlarmIcon/>}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href={route('users-by-location')}
                        label={'Orte'}
                        icon={<NotListedLocationIcon/>}
                    />
                </BottomNavigation>
            </Container>
        </>
    );
}
