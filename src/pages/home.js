import React, {useState, useEffect} from 'react';
import FireDb from "../firebase";
import { Link } from 'react-router-dom';
import "./Home.css";
import { toast } from 'react-toastify';

const Home = () => {
  const [contact, setContact] = useState ({});

  useEffect (() => {
    FireDb.child("contact").on("value", (snapshot) => {
     if(snapshot.val()!== null) {
        setContact({ ...snapshot.val()});
     } else {
        setContact({});
     }
    });

    return () => { 
      setContact({});  
    };
  }, []);
  const onDelete = (id) => {
    if(window.confirm("are you sure that you wanted to delete that contact?")
    ) {
      FireDb.child(`contact/${id}`).remove((err) =>{
        if (err) {
          toast.error(err);        
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
     };   
  return (
    <div style={{marginTop: "100px"}}>
      <table className='styled-table'>
        <thead>
          <tr> 
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(contact).map((id, index) => {
            return (
              <tr key={id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{contact[id].name}</td>
                  <td>{contact[id].email}</td>
                  <td>{contact[id].contact}</td>
                  <td>
                    <Link to={`/update/${id}`}>
                      <button className='btn btn-edit'>Edit</button>
                    </Link>
                    <button className='btn btn-delete'  onClick={() => onDelete(id)}>Delete</button>
                    <Link to={`/view/${id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

export default Home;

