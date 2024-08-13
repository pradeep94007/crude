import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link, redirect } from "react-router-dom";

function Add() {
  const [data, setData] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:3000/form").then((res) => {
      setData(res.data);
    });
  };
  console.log(data);

  useEffect(() => {
    getdata();
  }, []);

  const handel = (id) => {
    axios.delete(`http://localhost:3000/form/${id}`).then(() => {
      getdata();
    });
  };
  const redirect = useNavigate();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachdata) => {
            return (
              <tr>
                <td>{eachdata.id}</td>
                <td>{eachdata.name}</td>
                <td>{eachdata.email}</td>
                <td>
                  {/* <Link to="/up"> */}
                  <button
                    className="btn-primary"
                    onClick={() => {
                      redirect("/up/" + eachdata.id);
                    }}
                  >
                    Edit
                  </button>
                  {/* </Link> */}
                </td>

                <td>
                  <button
                    className="btn-danger"
                    onClick={() => handel(eachdata.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Add;
