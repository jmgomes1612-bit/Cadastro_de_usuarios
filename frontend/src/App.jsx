import { useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
function App() {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

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
          onChange={(event) => setage(event.target.value)}
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
