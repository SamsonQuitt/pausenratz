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

interface ComponentProps {
    label: string
    users: User[]
}
export default function UserGroupAccordion({label, users}: ComponentProps) {
    return (
        <Accordion width={1}>
            <AccordionSummary>
                {label}: {users.length}
            </AccordionSummary>
            <AccordionDetails sx={{paddingX:0}}>
                <List disablePadding sx={{spacing: 4}}>
                    {users.map(user =>
                        <ListItem key={user.id}>
                            <ListItemAvatar>
                                <Avatar sizes={'small'}>
                                    {user.name[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                {user.name}
                        </ListItemText>
                        </ListItem>
                    )}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
