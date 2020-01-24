import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Chart from './Chart'
import TimelineIcon from '@material-ui/icons/Timeline';


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        props.stocks["Meta Data"] ?
            < Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
                <DialogTitle style={{ textAlign: "center" }} id="simple-dialog-title">Daily Prices </DialogTitle>
                <DialogTitle variant="subtitle1" id="simple-dialog-title">{props.name} <span style={{ fontWeight: "bold" }}>{props.stocks["Meta Data"]["2. Symbol"]}</span></DialogTitle>
                <Chart stock={props.stocks["Time Series (Daily)"]} />
            </Dialog > : null
    );

}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(props.symbol);
    const [stocks, setStocks] = React.useState([])


    const handleClickOpen = () => {
        setOpen(true);
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${selectedValue}&apikey=VKRXZPTJIYUJ2VKS`)
            .then(res => {
                const stockfromAPI = res.data;
                setStocks(stockfromAPI)
            })

    };
    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <TimelineIcon color="primary" />
                Details
      </Button>
            <SimpleDialog name={props.name} stocks={stocks} selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}