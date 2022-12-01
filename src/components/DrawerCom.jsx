import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText ,IconButton,Button,Tabs,Tab} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

import {PAGES} from '../constant/const'

function DrawerCom(props) {
    const [state, setState] = useState(false)
    const [value, setValue] = useState(0)
    return (
        <>
        
            <Drawer open={state} onClose={()=>setState(false)}>
            <List>
                    {
       
                        <Tabs
                            value={value}
                            onChange={() => setValue(value)}
                            orientation="vertical"
                            indicatorColor="none"> 
                        {PAGES.map((item, index) => (
                            <Tab label={item} key={index} />
                        ))}
                        </Tabs>
                    }
                    
            </List>

            </Drawer>
            <IconButton onClick={() => setState(!state)}>
                <MenuIcon color='primary'/>
            </IconButton>
            
           
        </>
    );
}

export default DrawerCom;