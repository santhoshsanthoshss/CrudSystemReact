import React, { useState } from "react";
import UserTable from "./components/Tables/UserTable";
import Form from "./components/Tables/Form/Form";
import Edit from "./components/Tables/Form/Edit";

const App = () => {
  const userData = [
    { id: 1, names: "Santhosh", username: "Delight" },
    { id: 2, names: "Harish", username: "User2" },
    { id: 3, names: "Kavin", username: "User3" },
  ];

  // ! add user is adding the new id to the user
  const addUser = (user) => {
    user.id = demo.length + 1;
    setdemo([...demo, user]);
  };
  const [demo, setdemo] = useState(userData);

  // ! edit user
  // ! to check the form is in editing mode or not
  const [editing, setediting] = useState(false);

  const initailState = { id: null, names: "", username: "" };
  // ! this currentuser state is for ,edit form will donot know user is clicking which form
  const [currentUser, setcurrentUser] = useState(initailState);

  // !editing button function
  const editchange = (user) => {
    setediting(true);
    setcurrentUser({ id: user.id, names: user.names, username: user.username });
  };

  const updateuser = (id, updatedUser) => {
    setediting(false);
    setdemo(demo.map((user) => (user.id === id ? updatedUser : user)));
  };

  // ! delete is delete the user based on the id
  const DeleteUser = (id) => {
    setdemo(
      demo.filter((ele) => {
        return ele.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h1>Edit User</h1>
              <Edit
                setediting={setediting}
                currentUser={currentUser}
                updateuser={updateuser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <Form addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            editchange={editchange}
            DeleteUser={DeleteUser}
            demo={demo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
