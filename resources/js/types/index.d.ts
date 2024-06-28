export interface User {
    id: number;
    name: string;
    state: number;
    pauses: Pause[];
    roles: Role[];
    pauses_sum_duration: number;
    email_verified_at: string;
}

export interface UserState {
    case: string;
    value: number;
    label: string
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

export interface Project {
    id: number;
    project_instances: ProjectInstance[]
    title: string;
    description: string;
    location: string;
    img_avatar: string;
    img_portrait: string;
}

export interface ProjectInstance {
    id: number;
    users: User[];
    project_id: number;
    date_start: string;
    date_end: string;
    pause_goal: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
