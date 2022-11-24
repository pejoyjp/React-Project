import React, { useState } from 'react';
import {AppBar,Toolbar,Tabs,Tab,Button,useMediaQuery,useTheme,Typography} from '@mui/material'
import DrawerComp from './DrawerComp';

const PAGES=["Products","Services","Aboutus","Contactus"]
function Header(props) {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const handleChange = (e,value) => {
        setValue(value)
        if (value === 0) {
            console.log("products")
        }
        if (value === 2) {
            console.log("About")
        }
                                
    }


    return (
        <>
            <AppBar sx={{bgcolor:'black'}}>
                <Toolbar>
                    {
                        isMatch ? (
                            <>
                                <Typography>
                                    Shopee
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs textColor='inherit'
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                    >
                                        {
                                            PAGES.map((page, index) => (
                                                <Tab key={index} label={page} />
                                                
                                            ))
                                        }

                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant="contained">
                                    Login
                                </Button>
                                <Button sx={{ marginLeft: "10px" }} variant="contained">
                                    LogOut
                                </Button>
                            </>
                                
                        )
                    }
                    
                </Toolbar>
               
            </AppBar>
            
        </>
    );
}

export default Header;