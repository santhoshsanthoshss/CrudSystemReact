import React, { useState } from "react";

const Edit = (props) => {
  const [user, setuser] = useState(props.currentUser);
  const inputchange = ({ target: { name, value } }) => {
    setuser({ ...user, [name]: value });
  };
  const usersubmit = (e) => {
    e.preventDefault();
    if (!user.names || !user.username) return;
    props.updateuser(user.id, user);
  };
  return (
    <form action="" onSubmit={usersubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="names"
        value={user.names}
        onChange={inputchange}
      />
      <label htmlFor="">UserName</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={inputchange}
      />
      <button>Update User</button>
      <button
        className="button muted-button"
        onClick={() => {
          props.setediting(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default Edit;
