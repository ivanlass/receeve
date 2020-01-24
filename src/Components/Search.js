import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: 200
        },
    },
}));

export default function Search(props) {
    const classes = useStyles();

    return (
        <form style={{ textAlign: "center" }} className={classes.root} noValidate autoComplete="off" onSubmit={props.findStock}>
            <TextField onChange={props.searchValue} id="standard-basic" label="Search" />
            <Button size="large" type="submit" variant="contained" color="primary"><SearchIcon />Search</Button>
        </form >
    );
}