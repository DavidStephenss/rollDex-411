import React from "react";

class PersonDetails extends React.Component {
  state = {
    showDetail: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      showDetail: !prevState.showDetail,
    }));
  };

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
    } = this.props;
    let display;
    if (this.state.showDetail) {
      display = (
        <li>
          <span className="name">{firstName}</span>{" "}
          <span className="name">{lastName}</span>
          <br></br>
          <img src={picture} alt={lastName} />
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
      );
    } else if (!this.state.showDetail) {
      display = (
        <li>
          <span className="name">{firstName}</span>{" "}
          <span className="name">{lastName}</span>
          <br></br>
          <img src={picture} alt={lastName} />
          <br></br>
        </li>
      );
    }
    return (
      <div>
        {display}
        <button onClick={this.handleClick}>
          {firstName} {lastName} Details
        </button>
      </div>
    );
  }
}

export default PersonDetails;
