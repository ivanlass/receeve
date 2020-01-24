import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllStocks from '../Layout/AllStocks'
import Search from '../Components/Search'
import Portfolio from '../Layout/Portfolio';


function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Navigation(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [portfStocks, setPortfStocks] = React.useState([])


    const addToPortfolio = (e) => {
        const symbol = e.currentTarget.value
        const name = e.currentTarget.name
        localStorage.setItem(symbol, name)
    }

    const getLocalData = () => {
        const arr = []
        setPortfStocks({ ...localStorage })
    }

    const deleteLocalData = (e) => {
        localStorage.removeItem(e.currentTarget.value);
        setPortfStocks({ ...localStorage })
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="All stocks" {...a11yProps(0)} />
                    <Tab onClick={getLocalData} label="Portfolio" {...a11yProps(1)} />
                    <Tab onClick={props.signOut} label="Sign Out" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Search searchValue={props.searchValue} findStock={props.findStock} />
                <AllStocks stocks={props.stocks} addToPortfolio={addToPortfolio} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Portfolio deleteLocalData={deleteLocalData} stocks={portfStocks} />
            </TabPanel>

        </div>
    );
}