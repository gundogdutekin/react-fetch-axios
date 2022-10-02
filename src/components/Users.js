import { useState, useEffect } from 'react'
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))*/
    axios.get('https://jsonplaceholder.typicode.com/users') 
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {loading&&<div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Users
