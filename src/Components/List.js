import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Modal from './Modal'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        background: "#f7f7f7",
        margin: "10px"
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));



export default function Lists(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid >
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List >

                            <ListItem >
                                <ListItemText
                                    primary={props.name}
                                    secondary={props.symbol}
                                    value={props.symbol}
                                />
                                <Modal name={props.name} symbol={props.symbol} />
                                <ListItemSecondaryAction>
                                    <IconButton value={props.symbol} onClick={props.deleteLocalData} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </List>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}