import { List } from '@mui/material'
import React from 'react'
import UsersItem from './UsersItem'

function UsersList({ users }) {
  return (
    <>
      <List>
        {users.map((u) => (
          <UsersItem key={u.id} user={u} />
        ))}
      </List>
    </>
  )
}

export default UsersList
