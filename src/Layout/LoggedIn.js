import React from 'react'
import Navigation from '../Components/Navigation'
import axios from 'axios';


class LoggedIn extends React.Component {
    constructor() {
        super()
        this.searchRef = React.createRef();
        this.state = {
            searchValue: "",
            stocks: []
        }
    }

    componentDidMount() {
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=a&apikey=VKRXZPTJIYUJ2VKS`)
            .then(res => {
                const stocks = res.data;
                this.setState({ stocks });
            })
    }

    searchValue = e => {
        this.setState({ searchValue: e.target.value })
    }

    findStock = (e) => {
        e.preventDefault()
        const search = this.state.searchValue
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=VKRXZPTJIYUJ2VKS`)
            .then(res => {
                const stocks = res.data;
                this.setState({ stocks });
            })
    }

    render() {
        return (
            <>
                <Navigation stocks={this.state.stocks} searchValue={this.searchValue} findStock={this.findStock} signOut={this.props.signOut} />

                {/* <p>Hello, {this.props.user.displayName}</p>
        <button onClick={this.props.signOut}>Sign out</button> */}
            </>
        )
    }
}

export default LoggedIn
