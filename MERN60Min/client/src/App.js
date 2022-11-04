
import './App.css';
import { useEffect, useState } from 'react'
import Axios from 'axios'


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
    Axios.get('http://localhost:3000/getusers').then((response) => {
      console.log(response.data)
      setListOfUsers(response.data)

    })
  }, [])
  const createUser = () => {
    Axios.post("http://localhost:3000/createUser", {
      name,
      age,
      username
    }).then((response) => {
      setListOfUsers([...listOfUsers , {name:name , age:age, username:username}])
    })
  }

  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <div className='userDisplay'      >
        {listOfUsers.map((user) => {
          return (
            <div className='card'>

              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>

            </div>
          )


        })}
      </div>

      <input type="text" placeholder="enter the name..." onChange={(event) => {
        setName(event.target.value)
      }} />
      <input type="number" placeholder="enter the age..." onChange={(event) => {
        setAge(event.target.value)
      }} />
      <input type="username" placeholder="enter the username..." onChange={(event) => {
        setUsername(event.target.value)
      }} />
      <button onClick={createUser}>Create User</button>
    </div>
  );
}

export default App;
