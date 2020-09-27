import React from "react"

export default class PersonDetails extends React.Component {
  state = {
    showDetail: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
    }))
  }

  render() {
    const {
      firstName,
      lastName,
      country,
      email,
      userName,
      dob,
      phone,
      picture,
    } = this.props
    let display
    if (this.state.showDetail) {
      display = (
        <li>
          <span className="name">{firstName}</span>{" "}
          <span className="name">{lastName}</span>
          <br></br>
          <img
            onClick={this.handleClick}
            src={picture}
            alt={firstName + lastName}
          />
          <br></br>
          Country: <span className="details">{country}</span>
          <br></br>
          Email: <span className="details">{email}</span>
          <br></br>
          Username: <span className="details">{userName}</span>
          <br></br>
          Age: <span className="details">{dob}</span>
          <br></br>
          Phone: <span className="details">{phone}</span>
        </li>
      )
    } else if (!this.state.showDetail) {
      display = (
        <li>
          <span className="name">{firstName}</span>{" "}
          <span className="name">{lastName}</span>
          <br></br>
          <img
            onClick={this.handleClick}
            src={picture}
            alt={firstName + lastName}
          />
          <br></br>
        </li>
      )
    }
    return (
      <div>
        {display}
        <button onClick={this.handleClick}>
          {firstName} {lastName} Details
        </button>
        <hr></hr>
      </div>
    )
  }
}
