import React, { useState } from 'react' //eslint-disable-line
import { Box, TextField, Button, Chip, Modal } from '@mui/material' //eslint-disable-line
import { findRelation } from '../utils/graph'
import { ArrowDownwardRounded } from '@mui/icons-material'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '80vh',
  overflow: 'auto',
  p: 4,
}
export default function FindPage(props: any) {
  const [result, setResult] = useState<String[]>([])
  const [p1value, setP1value] = useState('')
  const [p2value, setP2value] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  function searchLink(data: String[]) {
    let res = findRelation(data)
    if(res === undefined) {
      setResult(['No relation found'])
    }
    else
    setResult(res || [])
    handleOpen()
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {result.map((item: String, index: number) => {
            // alert(item)
            return (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Chip
                  label={item}
                  sx={{
                    lineHeight: '30px',
                  }}
                />
                {index !== result.length - 1 ? <ArrowDownwardRounded sx={{margin:'auto'}} /> : <></>}{' '}
              </div>
            )
          })}
        </Box>
      </Modal>
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
          setP1value(event.target.value)
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
          setP2value(event.target.value)
        }}
      />
      <Button
        sx={{
          minWidth: '300px',
          maxWidth: '60vw',
          margin: '20px auto',
        }}
        variant="contained"
        onClick={() => searchLink([p1value, p2value])}
      >
        SEARCH
      </Button>
    </Box>
  )
}
