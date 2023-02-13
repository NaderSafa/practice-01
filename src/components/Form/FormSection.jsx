import React from 'react'
import { Container } from '@mui/material'
import FormFields from './FormFields'

function FormSection({ addUser }) {
  return (
    <Container maxWidth='xs' sx={{ marginTop: 2 }}>
      <FormFields addUser={addUser} />
    </Container>
  )
}

export default FormSection
