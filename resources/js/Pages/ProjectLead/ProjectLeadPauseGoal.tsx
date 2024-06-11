import {Button, Slider, Stack, Typography} from "@mui/material";
import PaperSection from "@/Components/PaperSection";
import React from "react";
import {router, useForm} from "@inertiajs/react";

export default function ProjectLeadPauseGoal({projectInstanceId, currentGoal}: {projectInstanceId: number, currentGoal: number}) {
    const {data, setData, put, processing} = useForm({
        'pause_goal': currentGoal
    })

    function submitGoal() {
        router.put(route('project-instances.pause-goal.update', projectInstanceId), data)
    }

    return (
        <PaperSection>
            <Stack padding={4} spacing={4}>
                <Typography variant={'h2'}>
                    Pausenziel
                </Typography>
                <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
                    <Typography>
                        10
                    </Typography>
                    <Slider
                        min={10}
                        max={60}
                        step={1}
                        valueLabelDisplay={'on'}
                        value={data.pause_goal}
                        onChange={(e) => setData('pause_goal', e.target.value)}
                    />
                    <Typography>
                        60
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        onClick={submitGoal}
                    >
                        Speichern
                    </Button>
                </Stack>
            </Stack>
        </PaperSection>
    )
}
