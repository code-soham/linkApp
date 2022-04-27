import React, { useState, useReducer } from 'react';//eslint-disable-line
import './App.css';
import { Box, Paper, BottomNavigation,  BottomNavigationAction } from '@mui/material/';
import { Add, Search, GridView } from '@mui/icons-material';
import AddPage from './pages/addPage';
import ViewPage from './pages/viewPage';
import FindPage from './pages/findPage';

export default function App() {
  const [value, setValue] = useState(0);
  function setPage() {
    if (value === 0) {
      return <AddPage />
    }
    else if (value === 1) {
      return <ViewPage />
    }
    else if (value === 2) {
      return <FindPage />
    }
  }
  return (
    <div className="App">
      
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: '98vw',
            height: '98vh',
            color: 'blue',
            margin: 'auto',
            marginTop: '1vh',
            backgroundColor: '#529eebaa',
          },
        }}
      >
        <Paper variant="elevation"
          elevation={24}
          sx={{
            display: "block"
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction onClick={() => setValue(0)} label="Add Connection" icon={<Add />} />
            <BottomNavigationAction onClick={() => setValue(1)} label="View Added" icon={<GridView />} />
            <BottomNavigationAction onClick={() => setValue(2)} label="Search Connection" icon={<Search />} />
          </BottomNavigation>
          {setPage()}
        </Paper>
      </Box>
    </div>
  );
}