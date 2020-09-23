import React from 'react';

function RandomUserInfo(props) {
  return(
    <div>
      {props.randomList.map(people => <li><b>{people.name}:</b><br></br></li>)}
    </div>
  )
}

export default RandomUserInfo;