import { Delete, ArrowForward } from "@mui/icons-material";
import React, { useState, useReducer } from "react";
import { List, ListItem, ListItemText, Chip, Divider } from "@mui/material";
export default function ViewPage(props: any) {
    let data = localStorage.getItem('input@code_soham');
    const [arr, setArray] = useState(data ? Array.from(JSON.parse(data)) : []);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    console.log(arr)
    function rmvRel(data: Array<String>) {
        localStorage.setItem('input@code_soham', JSON.stringify(arr));
        let feed = localStorage.getItem('edges@code_soham');
        let parsedFeed: Array<{ id: String, adj: Array<String> }> = feed !== null ? JSON.parse(feed) : [];
        parsedFeed.forEach(item => {
            if (item.id === data[0]) {
                item.adj = item.adj.filter(adj => adj !== data[1]);
            }
            if (item.id === data[1]) {
                item.adj = item.adj.filter(adj => adj !== data[0]);
            }
        });
        localStorage.setItem('edges@code_soham', JSON.stringify(parsedFeed));
    }
    return (
        <List
            sx={{
                width: '90vw',
                position: 'relative',
                height: '80vh',
                margin: 'auto',
                marginTop: '1vh',
                color: 'white',
                overflow: 'auto',
            }}
        >
            {arr.map((item: any, index: number) => {
                return (
                    <ListItem
                        key={index}
                        button
                        sx={{
                            width: '100%',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <ListItemText
                        >
                            <Chip label={item[0]} />
                            <ArrowForward sx={{
                                margin: '0 20px'
                            }} />
                            <Chip label={item[1]} />
                        </ListItemText>
                        <Delete
                            sx={{
                                color: 'red',
                            }}
                            onClick={() => {
                                arr.splice(index, 1);
                                rmvRel(item);
                                setArray(arr);
                                forceUpdate();
                            }}
                        />
                        <Divider />
                    </ListItem>)
            })}
        </List>
    )
}