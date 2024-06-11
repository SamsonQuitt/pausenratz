import PaperSection from "@/Components/PaperSection";
import React from "react";
import {Button, Slider, Stack, Typography} from "@mui/material";
import ProjectLeadPauseGoal from "@/Pages/ProjectLead/ProjectLeadPauseGoal";
import {ProjectInstance} from "@/types";
import ProjectLeadUsers from "@/Pages/ProjectLead/ProjectLeadUsers";
import ProjectLeadUsersAddUserForm from "@/Pages/ProjectLead/ProjectLeadUsersAddUserForm";

export default function ProjectLead({projectInstance}: { projectInstance: ProjectInstance }) {
    const [pauseGoal, setPauseGoal] = React.useState(10)
    return (
        <Stack spacing={4}>
            <ProjectLeadPauseGoal currentGoal={projectInstance.pause_goal} projectInstanceId={projectInstance.id}/>
            <ProjectLeadUsers users={projectInstance.users} addForm={<ProjectLeadUsersAddUserForm projectInstanceId={projectInstance.id}/>}/>
        </Stack>

    )
}
