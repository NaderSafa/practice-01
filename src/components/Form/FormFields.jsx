import { Button, TextField, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send'
import ErrorModal from './ErrorModal'

function FormFields({ addUser }) {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [validUsername, setValidUsername] = useState(true)
  const [validAge, setValidAge] = useState(true)
  const [open, setOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    username.trim().length < 3
      ? setValidUsername(false)
      : setValidUsername(true)

    age < 18 ? setValidAge(false) : setValidAge(true)
  }, [username, age])

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }

  const ageHandler = (e) => {
    setAge(e.target.value)
  }

  const resetFields = () => {
    setAge('')
    setUsername('')
  }

  const submitHandler = (e) => {
    if (validUsername && validAge) {
      const user = { username, age }
      addUser(user)
      resetFields()
    } else {
      setErrorMsg('error yasta')
      handleOpen()
    }
  }

  return (
    <>
      <Grid container justify='flex-end' spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!validUsername}
            label='Username'
            variant='filled'
            value={username}
            onChange={usernameHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={!validAge}
            label='Age'
            variant='filled'
            value={age}
            type='number'
            onChange={ageHandler}
          />
        </Grid>
        <Grid item text-align='right'>
          <Button
            variant='contained'
            onClick={submitHandler}
            endIcon={<SendIcon />}
            aria-label='submit'
          >
            Add User
          </Button>
        </Grid>
      </Grid>
      {open && (
        <ErrorModal msg={errorMsg} handleClose={handleClose} open={open} />
      )}
    </>
  )
}

export default FormFields
