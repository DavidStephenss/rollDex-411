import React, { Component } from 'react'
import axios from 'axios'
import RandomUserInfo from './randominfo'
class FetchRandoms extends Component {
  state = {
    randomList: []
  }

  fetchRandoms = () => {
    return axios.get('https://randomuser.me/api?results=25')
    .then(res => {
      const peeps = res.data.results;
      this.setState({ randomList: peeps});
    })
  }


  render() {
    return(
      <div>
        <button onClick={this.fetchRandoms}> get randoms</button>
        <RandomUserInfo randomList={this.state.randomList}/>
      </div>
    )
  }
}

export default FetchRandoms;