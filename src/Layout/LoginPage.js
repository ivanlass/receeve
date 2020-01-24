import React from 'react'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const LoginPage = (props) => {
    return (
        <>
            <Grid container
                style={{ height: "100vh" }}
                justify="center"
                alignItems="center">
                <Button variant="contained" color="primary" onClick={props.signIn}>Sign in with Google</Button>
            </Grid>
        </>
    )
}


export default LoginPage
