import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import UserCard from "./Components/UserCard";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect( () => {
    async function buscarUsuarios(){
      const resposta = await axios.get('http://localhost:3000/Usuarios')
      console.log(resposta)
    }
    buscarUsuarios()
  
  }, [])

  
  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      age: age,
    };

    setUsers([...users, newUser]);

    console.log(newUser);
    console.log(users);
  }

  return (
    <div className="app">
      <h1>Cadastro de usuários</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          required
          onChange={(event) => setAge(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <div className="users-list">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
export default App;
