import React, { Component } from 'react';
import axios from 'axios'

export default class New extends Component {

    static async getInitialProps(ctx) {

        const res = await axios.get(`https://api.punkapi.com/v2/beers/${ctx.query.id}`)
        const beerList = res.data

        return {
            beerList: beerList
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            beerList: props.beerList
        }
    }

    componentDidMount() {
        console.log('props:', this.props);
        setTimeout(() => {
            // this.setState({name: "parker"})
        }, 3000);
    }

    render() {
        return <div>
            {this.state.beerList.map((beer) => {
                return <div>
                    {beer.name}
                </div>
            })}
        </div>;
    }

}
  
