import React, { useState } from 'react';
import { AppBar, Toolbar, styled,Tabs, Tab, useMediaQuery, useTheme, Typography } from '@mui/material'
import { Box } from '@mui/system';
import logo from '../images/logo.png';
import smallLogo from '../images/smal_logo.png'
import DrawerCom from './DrawerCom';
import {PAGES} from '../constant/const'


function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
}


function Narvar(props) {
    const [value, setValue] = useState(0)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
      <>
        <AppBar sx={{ bgcolor: '#b39ddb' }} position='sticky'>
          {
            isMatch ? (
              <>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>      
                  <img src={smallLogo} alt='' width={50} />
                  <Typography variant="h4" paddingTop={1}>Welcome to my world</Typography>
                  <DrawerCom />
                </Box>
              </>
  
          ):(
          <>
            <Toolbar>
              <Box>
              <img src={logo} alt='' width={130} />  
              </Box>
              <Tabs value={value}
             
              onChange={() => setValue(value)}
              indicatorColor="none"> 
                {PAGES.map((item, index) => (
                  <LinkTab label={item}
                  texttransform='none'
                    key={index}
                    />
                ))}
              </Tabs>
          </Toolbar>
          </>
          )}
        </AppBar>
        
    </>
    );
}

export default Narvar;