import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ClickerContainer() {
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{backgroundColor:'cyan', height:'100vh'}} >
                </Typography>
            </Container>
        </React.Fragment>
    );
}