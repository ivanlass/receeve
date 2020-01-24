import React from 'react'
import Card from '../Components/Card'
import { Grid } from '@material-ui/core';

const AllStocks = (props) => {

    return (
        <>
            {/* <button onClick={props.signOut}>Sign out</button> */}
            <Grid container
                spacing={2}
                justify="center"
                alignItems="center">
                {props.stocks.bestMatches && props.stocks.bestMatches.map(stock => (
                    < Card
                        addToPortfolio={props.addToPortfolio}
                        key={stock["1. symbol"]}
                        symbol={stock["1. symbol"]}
                        name={stock["2. name"]}
                        region={stock["4. region"]}
                        marketOpen={stock["5. marketOpen"]}
                        marketClose={stock["6. marketClose"]}
                        currency={stock["8. currency"]}
                    />
                ))}
            </Grid>
        </>
    )
}


export default AllStocks