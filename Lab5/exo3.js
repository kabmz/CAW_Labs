
import React, { useState } from 'react';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { username, password }]);
    setUsername('');
    setPassword('');
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Login };

