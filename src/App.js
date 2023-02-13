import FormSection from './components/Form/FormSection'
import { useState } from 'react'
import UsersSection from './components/Users/UsersSection'

function App() {
  const [users, setUsers] = useState([
    { id: '1', username: 'Nader', age: '26' },
  ])

  const addUser = (user) => {
    user.id = Math.max(...users.map((u) => u.id)) + 1
    setUsers((prevState) => [...prevState, user])
  }
  return (
    <>
      <FormSection addUser={addUser} />
      <UsersSection users={users} />
    </>
  )
}
export default App
