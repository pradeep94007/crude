import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Read() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const history = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(p) => {
    p.preventDefault();
    const formData = {
      ...form,
       // Generating unique ID
    };
    axios.post(`http://localhost:3000/form`, form)
      .then(() => {
        history("/add"); // Redirect to "/add" route after successful form submission
      })
     ;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Read;
