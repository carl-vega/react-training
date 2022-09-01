import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from './Dialog'

import TextField from '@mui/material/TextField';

export default function CheckboxesGroup() {
    const [open, setOpen] = React.useState(false);
    const [formState1, setFormState1] = React.useState({
        first: '',
        last: '',
        email: '',
    });
    const [formState2, setFormState2] = React.useState({
        phone: '',
        sandwich: '',
        cloud: ''
    });
    const handleSubmit1 = () => {
        console.log(formState1)
    }
    const handleSubmit2 = () => {
        console.log(formState2)
    }
    const handleSubmitBoth = () => {

        console.log({ ...formState1, ...formState2 })
    }
    const handleChange1 = ({ target: { name, value } }) => {
        setFormState1({ ...formState1, [name]: value });
    };
    const handleChange2 = ({ target: { name, value } }) => {
        setFormState2({ ...formState2, [name]: value });
    };
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Information</FormLabel>
                <FormGroup spacing={2}>
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' onChange={handleChange1} name="first" />
                        }
                        label="First"
                    />
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' onChange={handleChange1} name="last" />
                        }
                        label="Last"
                    />
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' onChange={handleChange1} name="email" />
                        }
                        label="Email"
                    />
                    <Button variant="text" onClick={handleSubmit1}>Send Left</Button>
                </FormGroup>
            </FormControl>
            <FormControl
                // required
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">Better Information</FormLabel>
                <FormGroup>
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' label="Phone" onChange={handleChange2} name="phone" />
                        }

                    />
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' label="Sandwich" onChange={handleChange2} name="sandwich" />
                        }

                    />
                    <FormControlLabel sx={{ margin: 1 }}
                        control={
                            <TextField variant='outlined' label="Cloud" onChange={handleChange2} name="cloud" />
                        }

                    />
                    <Button variant="text" onClick={handleSubmit2}>Send Right</Button>
                </FormGroup>
            </FormControl>
            <Button variant="text" onClick={handleSubmitBoth}>Send Both</Button>
            <Dialog />
        </Box>
    );
}
