import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

function UsersItem({ user }) {
  const displayedText = `${user.username} (${user.age} years)`
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={displayedText} />
      </ListItemButton>
    </ListItem>
  )
}

export default UsersItem
