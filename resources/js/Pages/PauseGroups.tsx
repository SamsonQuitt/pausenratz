import {PageProps, User} from "@/types";
import { Stack } from "@mui/material";
import UserGroupAccordion from "@/Components/UserGroupAccordion";
import {Gauge} from "@mui/x-charts";

export default function PauseGroups({users, threshold}: PageProps<{ users: User[], threshold: number }>) {

    const notEnough = users.filter(user => user.pauses_sum_duration < threshold)
    const paused = users.filter(user => user.state === 1)
    const enough = users.filter(user => user.pauses_sum_duration >= threshold)

    const actives = users.filter(user => user.state === 0)
    const excursions = users.filter(user => user.state === 2)
    const absents = users.filter(user => user.state === 3)

    const ratio = Math.round(((notEnough.reduce(
        (accumulator, currentUser) => accumulator + currentUser.pauses_sum_duration,
        0
    ) + enough.length * threshold) / (users.length * threshold)) * 100)

    return (
        <Stack spacing={4} paddingX={5} alignContent={'center'}>
            <Stack spacing={0}>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Gauge
                        width={200}
                        height={200}
                        startAngle={-110}
                        endAngle={110}
                        text={
                            ({value, valueMax}) => value + '%'
                        }
                        value={ratio}
                        valueMax={100}
                    />
                </Stack>
                <UserGroupAccordion label={'In der Pause'} users={paused}/>
            </Stack>
            <Stack spacing={1}>
                <UserGroupAccordion label={'Noch keine Pause gemacht'} users={notEnough}/>
                <UserGroupAccordion label={'Bereits Pause gemacht'} users={enough}/>
            </Stack>
            <Stack spacing={1}>
                <UserGroupAccordion label={'Auf dem Gelände'} users={actives}/>
                <UserGroupAccordion label={'Auf Ausflügen'} users={excursions}/>
                <UserGroupAccordion label={'Krank / Abwesend'} users={absents}/>
            </Stack>
        </Stack>
    )
}
