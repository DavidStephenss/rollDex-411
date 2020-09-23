import React from 'react'

class PersonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDetail: false
     }
 
  
  const handleClick = () => {
    showDetails = !showDetails
    console.log(showDetails)
  }

  if(this.state.showDetail) {  
  render() { 
    return ( 
      <div>
            {people.name.last}
            {people.location.country}
            {people.email}
            {people.login.username}
            {people.dob.age}
            {people.phone}
         
      </div>
      <button onClick={handleClick()}> show Details </button>
     );
    }
  } 
}
}
export default PersonDetails;








