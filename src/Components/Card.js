import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal'
import AddToPortfolioBTN from './AddToPortfolioBTN'


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        display: "inline-block",
        margin: 20,
        background: "#f7f7f7"
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.symbol}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h4">
                        <span style={{ fontWeight: "bold" }}>Name: </span>{props.name.substring(0, 30)}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h4">
                        <span style={{ fontWeight: "bold" }}>Region: </span>{props.region}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <span style={{ fontWeight: "bold" }}>Open: </span>{props.marketOpen}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <span style={{ fontWeight: "bold" }}>Close: </span>{props.marketClose}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h5">
                        <span style={{ fontWeight: "bold" }}>Currency: </span>{props.currency}
                    </Typography>
                </CardContent>
            </CardActionArea >
            <CardActions>
                <Modal name={props.name} symbol={props.symbol} />
                <AddToPortfolioBTN name={props.name} symbol={props.symbol} addToPortfolio={props.addToPortfolio} />
            </CardActions>
        </Card >
    );
}