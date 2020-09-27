import React from "react"
import axios from "axios"
import ListingComponent from "./ListingComponent"

export default class FetchRandoms extends React.Component {
  state = {
    randomList: [],
  }

  fetchRandoms = () => {
    return axios.get("https://randomuser.me/api?results=25").then(res => {
      const peeps = res.data.results
      this.setState({ randomList: peeps })
    })
  }

  componentDidMount() {
    this.fetchRandoms()
  }

  render() {
    return (
      <div>
        <ListingComponent userList={this.state.randomList} />
      </div>
    )
  }
}
