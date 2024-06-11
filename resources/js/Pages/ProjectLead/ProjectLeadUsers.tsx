import {User} from "@/types";
import PaperSection from "@/Components/PaperSection";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List,
    ListItem,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {ReactNode} from "react";
import {Add, PlusOne} from "@mui/icons-material";

export default function ProjectLeadUsers({users, addForm}: {users: User[], addForm: ReactNode}) {
    return (
        <PaperSection>
            <Stack padding={4} width={1}>
                <Typography variant={'h2'}>
                    Betreuungskräfte
                </Typography>
                <List>
                    {users.map(user =>
                        <ListItem key={user.id} sx={{paddingX: 0}}>
                            <Accordion sx={{width: 1}}>
                                <AccordionSummary>
                                    {user.name} {user.roles.find(role => role.keyword === 'pl')?.title && '- PL'}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>
                                        <Button variant={'outlined'} color={'info'}>
                                            Passwort ändern
                                        </Button>
                                        <Button variant={'contained'} color={'warning'}>
                                            Löschen
                                        </Button>
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        </ListItem>
                    )}
                    <ListItem sx={{paddingX: 0}}>
                        <Accordion sx={{width: 1}}>
                            <AccordionSummary>
                                <Stack width={1} direction={'row'} justifyContent={'center'}>
                                    <Add/>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                {addForm}

                            </AccordionDetails>
                        </Accordion>
                    </ListItem>
                </List>
            </Stack>
        </PaperSection>
    )
}
