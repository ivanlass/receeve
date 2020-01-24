import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function AddToPortfolioBTN(props) {
    const classes = useStyles();
    return (
        <div symbol={props.value} className={classes.root}>
            <Button name={props.name} value={props.symbol} onClick={props.addToPortfolio} >
                <FavoriteIcon color="primary" />
                Add To Portfolio
            </Button>

        </div>
    );
}