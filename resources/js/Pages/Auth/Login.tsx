import React, {useEffect, MouseEventHandler} from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';

import { Head, Link, useForm } from '@inertiajs/react';
import {Button, Stack, TextField} from "@mui/material";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        password: '',
        remember: true,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    function submit(e: MouseEventHandler){
        post(route('login'));
    }

    return (
        <Stack>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form>
                <div>

                    <TextField
                        label={'Name'}
                        id="name"
                        type="username"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextField
                        label={'Passwort'}
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button
                        variant={'contained'}
                        disabled={processing}
                        onClick={submit}
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </Stack>
    );
}
