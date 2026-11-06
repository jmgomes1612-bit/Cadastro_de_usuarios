import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
  async function searchUsers() {
      const response = await axios.get('http://localhost:3000/Usuarios')
      setUsers(response.data)    
  }

  searchUsers();
}, []);


  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="app">
      <h1>Cadastro de usuários</h1>
      <h2>Total de utilizadores: {users.length}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
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
          placeholder="Idade"
          value={age}
          required
          onChange={(event) => setAge(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <div className="users-list">
        {users.map((user) => (
          <UserCard key = {user._id} user = {user}/>
        ))}
      </div>
    </div>
  );
}

export default App;
