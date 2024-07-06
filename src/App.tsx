import { User } from "./Services/user-service";
import userService from "./Services/user-service";
import useUsers from "./Hooks/useUsers";

function App() {
  const { users, error, isLoading, setError, setUsers } = useUsers();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Faisal" };
    setUsers([newUser, ...users]);

    userService
      .add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService
      .update(updatedUser)
      // .then((res) => console.log(res.data))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  function deleteUser(user: User) {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Upadte
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
