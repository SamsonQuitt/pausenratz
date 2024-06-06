import { Link } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';
import {AppBar, Box, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LayoutGuest({ children }: PropsWithChildren) {
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
                    height={'100vh'}
                    justifyContent={'center'}
                >
                    {children}
                </Stack>
            </Container>
        </>

    );
}
