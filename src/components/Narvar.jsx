import React from 'react';
import { AppBar,styled,Toolbar,Button,Box,Link} from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection:"row",
    gap: "20px",

    [theme.breakpoints.down("sm")]:{
       display:'none',
        flexDirection:"column",
        
    }
    
}))



function Narvar(props) {
    return (
        <AppBar>
            <Box sx={{
                    display: { xs: 'block', sm: 'none'},
                }}>
                    <Button variant="contained">Contained</Button>
            </Box>
            
                <StyledToolbar>
                    <Box>
                        <Link href="#" color='inherit'>Link</Link>
                    </Box>
                    <Box>
                        <Link href="#" color='inherit'>Link</Link>
                    </Box>
                    <Box>
                        <Link href="#" color='inherit'>Link</Link>
                    </Box>
                    <Box>
                        <Link href="#" color='inherit'>Link</Link>
                    </Box>
                    <Box>
                        <Link href="#" color='inherit'>Link</Link>
                    </Box>
                
            </StyledToolbar>
        </AppBar>
    );
}

export default Narvar;
