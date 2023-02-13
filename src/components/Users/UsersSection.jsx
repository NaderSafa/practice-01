import React from 'react'
import { Container } from '@mui/material'
import UsersList from './UsersList'

function UsersSection({ users }) {
  return (
    <Container maxWidth='xs' sx={{ marginTop: 2 }}>
      <UsersList users={users} />
    </Container>
  )
}

export default UsersSection
