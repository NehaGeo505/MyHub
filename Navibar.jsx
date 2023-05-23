import { Button,Toolbar,Typography,AppBar } from '@mui/material'
import React from 'react'

const Navibar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} align='left' color='darkblue'>New App</Typography>
                <Button variant='text' color='error'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navibar