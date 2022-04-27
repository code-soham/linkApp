import React, { useState } from 'react';//eslint-disable-line
import { Box, TextField, Button } from '@mui/material';//eslint-disable-line
export default function FindPage(props: any) {
    const [p1value, setP1value] = useState('');
    const [p2value, setP2value] = useState('');
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TextField
                id="Person1"
                label="Person 1"
                required
                variant="standard"
                sx={{
                    minWidth: '300px',
                    maxWidth: '60vw',
                    color: 'blue',
                    margin: '20px auto',
                }}
                value={p1value}
                onChange={(event:any) => {
                    setP1value(event.target.value);
                }}
            />
            <TextField
                id="Person2"
                required
                label="Person 2"
                variant="standard"
                sx={{
                    minWidth: '300px',
                    maxWidth: '60vw',
                    color: 'blue',
                    margin: '20px auto',
                }}
                value={p2value}
                onChange={(event: any) => {
                    setP2value(event.target.value);
                }}
            />
            <Button sx={{
                minWidth: '300px',
                maxWidth: '60vw',
                margin: '20px auto',
            }} variant="contained"
                onClick={()=>props.searchLink([p1value,p2value])}
            >SEARCH</Button>
        </Box>
    );
}