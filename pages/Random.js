import React, { Component } from "react";
import axios from "axios";
import Beeritem from "../components/Beeritem";
import BeerRandom from "../components/BeerRandom";
import Link from "next/link";
export default class New extends Component {
  static async getInitialProps() {
    const res = await axios.get(`https://api.punkapi.com/v2/beers/random`);
    const beerList = res.data;

    return {
      beerList: beerList,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      beerList: props.beerList,
    };
  }

  render() {
    return (
      <div>
        <div className="beer-random">
          <Link href="RELoading">
        <button onClick={() => window.location.reload(false)}>Click </button> 
        </Link>
        </div>
        {this.state.beerList.map((beer) => {
          return (
            <div className="random-grid">
              <div className="random-item img">
                <img src={beer.image_url} />
              </div>
              <div class="col-md-3">ชื่อ {beer.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
