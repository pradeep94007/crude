import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Update() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [form,setForm]=useState({
        name:"",
        email:""
    })
    const navigate = useNavigate();

    const {id} = useParams();
    const onchange=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
 const fech =()=>{
    axios.get(`http://localhost:3000/form/${id}`)
    .then((res)=>{setForm(res.data)}
        
    )
   
 }
 useEffect(()=>{
    fech();
},[])

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.put(`http://localhost:3000/form/${id}`, form)
        .then(() => {
            navigate("/add"); // Navigating after successful update
        })
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={onchange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={form.email}
                        name="email"
                        onChange={onchange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );

    }
export default Update;
