import React from 'react';

function RandomUserInfo(props) {
  return(
    <div>
      {props.randomList.map(people =>
         <li>
            {people.name.first} 
            {people.name.last}
            {people.location.country}
            {people.email}
            {people.login.username}
            {people.dob.age}
            {people.phone}
            <img src={people.picture.thumbnail} alt="user Image" /> 
            <button> show Details </button>
         </li>
       )}
    </div>
  )
}

export default RandomUserInfo;