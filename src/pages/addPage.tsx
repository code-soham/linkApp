import React, { useState } from 'react';//eslint-disable-line
import { Box, TextField, Button } from '@mui/material';//eslint-disable-line
export default function AddPage(props: any) {
    const [p1value, setP1value] = useState('');
    const [p2value, setP2value] = useState('');
    function addLink(data: Array<String>) {
        var arr: Array<{ id: String, adj: Array<String> }> = [];
        let feed = localStorage.getItem('edges@code_soham');
        arr = feed !== null ? JSON.parse(feed) : [];

        console.log(arr);
        let d1 = arr.find(item => item.id === data[0]);
        if (d1 === undefined) {
            arr.push({
                id: data[0],
                adj: [data[1]]
            });
        }
        else {
            if (d1.adj.find(item => item === data[1]) === undefined) {
                d1.adj.push(data[1]);
            }
        }
        let d2 = arr.find(item => item.id === data[1]);
        if (d2 === undefined) {
            arr.push({
                id: data[1],
                adj: [data[0]]
            });
        }
        else {
            if (d2.adj.find(item => item === data[0]) === undefined) {
                d2.adj.push(data[0]);
            }
        }
        localStorage.setItem('edges@code_soham', JSON.stringify(arr));


        var input : Array<Array<String>> = [];
        let infeed = localStorage.getItem('input@code_soham');
        input = infeed !== null ? JSON.parse(infeed) : [];
        if(input.find(item => item[0] === data[0] && item[1] === data[1]) === undefined){
            input.push(data);
        }
        localStorage.setItem('input@code_soham', JSON.stringify(input));
    }
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
                onChange={(event: any) => {
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
            <TextField
                id="Relation"
                required
                defaultValue={"Relation : Friend"}
                disabled
                variant="standard"
                sx={{
                    minWidth: '300px',
                    maxWidth: '60vw',
                    color: 'blue',
                    margin: '20px auto',
                }}
            />
            <Button sx={{
                minWidth: '300px',
                maxWidth: '60vw',
                margin: '20px auto',
            }} variant="contained"
                onClick={() => addLink([p1value, p2value])}
            >ADD</Button>
        </Box>
    );
}