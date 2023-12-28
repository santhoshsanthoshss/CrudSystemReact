import React from "react";

const UserTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.demo.length > 0
          ? props.demo.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.names}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.editchange(user);
                      }}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                    <button
                      style={{ marginLeft: "4px" }}
                      className="button muted-button"
                      onClick={() => {
                        props.DeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          : "No Users"}
      </tbody>
    </table>
  );
};

export default UserTable;
