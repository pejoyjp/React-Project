import React, { useState } from 'react';
import {Drawer,List,ListItemButton,ListItemIcon,ListItemText,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const PAGES = ["Products", "Services", "Aboutus", "Contactus","Login","Logout"]


function DrawerComp(props) {
    
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)
    const handleClick = (e) => {
       
        console.log(e)
        setOpen(false)
    }
    
    return (
        <>
            <Drawer open={open}
                    onClose={()=>setOpen(false)}>
                <List>
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton onClick={handleClick}
                                key={index}
                                
                            >
                        
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                    
                </List>

            </Drawer>
            <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={() => setOpen(!open)}>
                <MenuIcon color='primary'/>

            </IconButton>
        </>
    );
}

export default DrawerComp;