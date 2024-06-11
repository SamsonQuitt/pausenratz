import {User} from "@/types";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@mui/material";
import {Gauge} from "@mui/x-charts";
import theme from "tailwindcss/defaultTheme";

interface ComponentProps {
    showRatio: boolean
    goal: number
    label: string
    users: User[]
}
export default function UserGroupAccordion({showRatio = false, goal = 0, label, users}: ComponentProps) {
    return (
        <Accordion width={1}>
            <AccordionSummary>
                {label}: {users.length}
            </AccordionSummary>
            <AccordionDetails sx={{paddingX:0}}>
                <List disablePadding sx={{spacing: 4}}>
                    {users.map(user => {
                        const ratio = (user.pauses_sum_duration + 1 / goal) * 100
                        return (
                            <ListItem
                                key={user.id}
                                secondaryAction={showRatio &&
                                    <Gauge
                                        width={60}
                                        height={60}
                                        startAngle={0}
                                        endAngle={360}
                                        text={() => null}
                                        value={ratio}
                                        valueMax={100}
                                        sx={{
                                            '&.MuiGauge-valueArc': {
                                                fill: '#FF0000',
                                            }
                                        }}

                                    />
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar sizes={'small'}>
                                        {user.name[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    {user.name}
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
