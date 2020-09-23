import React from 'react';

function RandomUserInfo(props)  {
  return(
    <div>
      {props.randomList.map(people =>
         <li>
           {people.name.first}
            <img src={people.picture.thumbnail} alt="user Image" /> 
         </li>   
      )}
   </div>
  )
}

export default RandomUserInfo;