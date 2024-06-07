export interface User {
    id: number;
    name: string;
    state: number;
    pauses: Pause[];
    roles: Role[];
    pauses_sum_duration: number;
    email_verified_at: string;
}

export interface Role {
    id: number;
    keyword: string;
    title: string;
}

export interface Pause {
    id: number;
    user_id: number;
    time_start: string;
    time_end: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
