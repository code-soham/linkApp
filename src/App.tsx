import React, { useState, useReducer } from 'react';//eslint-disable-line
import './App.css';
import { Box, Paper, BottomNavigation, Modal, BottomNavigationAction, Chip } from '@mui/material/';
import { Add, Search, GridView } from '@mui/icons-material';
import AddPage from './pages/addPage';
import ViewPage from './pages/viewPage';
import FindPage from './pages/findPage';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function App() {
  // var result: Array<String> = [];
  const [result,setResult] = useState<String[]>([]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  function searchLink(data: Array<String>) {
    var res : String[] = [];
    setResult(res);
    const p1 = data[0], p2 = data[1];
    res.push(p1);
    res.push(p2);
    setResult(res);
    handleOpen();
  }
  function setPage() {
    if (value === 0) {
      return <AddPage />
    }
    else if (value === 1) {
      return <ViewPage />
    }
    else if (value === 2) {
      return <FindPage searchLink={searchLink} />
    }
  }
  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            result.map((item: String, index: number) => {
              // alert(item)
              return <Chip label={item} />
            })}
        </Box>
      </Modal>
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