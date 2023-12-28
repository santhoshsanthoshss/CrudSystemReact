import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [field, setfield] = useState({ id: null, names: "", username: "" });

  const usersubmit = (e) => {
    e.preventDefault();
    if (!field.names || !field.username) return;
    addUser(field);
    setfield({ id: null, names: "", username: "" });
  };

  const inputchange = ({ target: { name, value } }) => {
    setfield({ ...field, [name]: value });
  };

  return (
    <form action="" onSubmit={usersubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="names"
        value={field.names}
        onChange={inputchange}
      />
      <label htmlFor="">UserName</label>
      <input
        type="text"
        name="username"
        value={field.username}
        onChange={inputchange}
      />
      <button>Add New User</button>
    </form>
  );
};

export default Form;
