import React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState} from 'react';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';

const Viewstaff =()=>{

  const[Staff,setStaff]=useState([]);

  //Function Call to server:
  const getAllStaff =()=>{
      axios.get(`http://localhost:9002/admin/findAllStaff`).then(
        (response)=>{
          //Success
          //console.log(response.data)
          toast.success('Staff has been Loaded', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          setStaff(response.data);
        },
        (error)=>{
          //for Error
          console.log(error);
        }
      );
  };

  //calling Loading Bugs Fun

  useEffect(() => {
    getAllStaff();
    return () => {
    }
  }, [])


  return(
    <div>
      <HeaderAdmin/>
      <br></br>
    <div className='container-sm'>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            
            <th scope="col">Staff Id</th>
            <th scope="col">Staff Name</th>
            <th scope="col">Department</th>
            <th scope="col">Assigned Tickets</th>
          </tr>
        </thead>
        <tbody>
          {  
            Staff.map(
              staff =>
              <tr key = {staff.staffId}>
                <td>{staff.staffId}</td>
                <td>{staff.staffName}</td>
                <td>{staff.department}</td>
                <td>{staff.assignedTicketIds}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <ToastContainer/>
    </div>
    <FooterAdmin/>
    </div>
  );
  }


export default Viewstaff;