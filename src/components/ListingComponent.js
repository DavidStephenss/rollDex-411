import React from 'react'
import PersonDetails from './PersonDetails'

export default function ListingComponent(props) {
  return (
    <ul>
      {props.userList.map(x => {
        return (
          <PersonDetails
            firstName={x.name.first}
            lastName={x.name.last}
            country={x.location.country}
            email={x.email}
            userName={x.login.username}
            dob={x.dob.age}
            phone={x.phone}
            picture={x.picture.large}
          />
        )
      })}
    </ul>
  )
}
