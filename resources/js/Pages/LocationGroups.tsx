import {PageProps, User} from "@/types";
import { Stack } from "@mui/material";
import UserGroupAccordion from "@/Components/UserGroupAccordion";

export default function LocationGroups({users}: PageProps<{users: User[]}>) {
    const actives = users.filter(user => user.state === 0)
    const paused = users.filter(user => user.state === 1)
    const excursions = users.filter(user => user.state === 2)
    const absents = users.filter(user => user.state === 3)

    return (
        <Stack spacing={1}>
            <UserGroupAccordion label={'Auf dem Gelände'} users={actives}/>
            <UserGroupAccordion label={'In der Pause'} users={paused}/>
            <UserGroupAccordion label={'Auf Ausflügen'} users={excursions}/>
            <UserGroupAccordion label={'Krank / Abwesend'} users={absents}/>
        </Stack>
    )
}
