import React, { Component } from 'react'
import axios from 'axios'

class FetchRandoms extends Component {
  state = {
    randomList: []
  }

  fetchRandoms = () => {
    return axios.get('https://randomuser.me/api?results=25')
    .then(res => {
      const peeps = res.data
      this.setState({ randomList: peeps});
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.fetchRandoms}> get randoms</button>
      </div>
    )
  }
}

export default FetchRandoms;