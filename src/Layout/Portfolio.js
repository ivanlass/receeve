import React from 'react';
import List from '../Components/List'
import { Grid } from '@material-ui/core';


export default function Portfolio(props) {
    let stocksFromLocal = []
    Object.entries(props.stocks).forEach(([key, value]) => stocksFromLocal.push({ symbol: key, name: value }));

    let localStocks = stocksFromLocal.map(stock => (
        <Grid key={stock.symbol} container
            spacing={2}
            justify="center"
            alignItems="center">
            <List deleteLocalData={props.deleteLocalData} name={stock.name} symbol={stock.symbol} />
        </Grid>

    ))

    return (
        <>
            {localStocks}
        </>
    );
}


//    let listOfStocks = Object.keys(props.stocks).forEach(e => console.log(`${e}  ${props.stocks[e]}`));