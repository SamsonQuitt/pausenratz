import {PageProps, User} from "@/types";
import { Stack } from "@mui/material";
import UserGroupAccordion from "@/Components/UserGroupAccordion";

export default function PauseGroups({users, threshold}: PageProps<{ users: User[], threshold: number }>) {

    const notEnough = users.filter(user => user.pauses_sum_duration < threshold)
    const paused = users.filter(user => user.state === 1)
    const enough = users.filter(user => user.pauses_sum_duration >= threshold)
    return (
        <Stack spacing={1}>
            <UserGroupAccordion label={'Noch keine Pause gemacht'} users={notEnough}/>
            <UserGroupAccordion label={'In der Pause'} users={paused}/>
            <UserGroupAccordion label={'Bereits Pause gemacht'} users={enough}/>
        </Stack>
    )
}
