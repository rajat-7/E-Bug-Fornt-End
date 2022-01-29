
import axios from 'axios';
import React, {useState, useEffect } from "react"

import { ToastContainer,toast } from 'react-toastify';

import HeaderCustomer from './HeaderCustomer';
import FooterCustomer from './FooterCustomer';

const ReportBug = () => {

    //Step 1: Get Customer for DrowpDown List
    const [Customer, setCustomer] = useState([]);
    const [custID,setCustId]=useState();
    const[bugPriority,setBugPriority] =useState();
    const[department,setDepartment] = useState();
    const[snippet,setSnippet]= useState();
    
    const getAllCustomer = () => {
        axios.get(`http://localhost:9001/customer/viewAllCustomer`).then(
            (response) => {
                setCustomer(response.data);
                console.log(response.data)
            },
            (error) => {
                //for Error
                console.log(error);
            }
        );
    };

    // Step 1.2- Calling GetstaffIds.()
    useEffect(() => {
        getAllCustomer();
        return () => {
        }
    }, [])

    //const obj = {bugPriority,snippet,department};

    //Step 2.1 Report Request
    
    
     const addBug = () => {
        const config = { headers: {'Content-Type': 'application/json'} };
        axios.post(`http://localhost:9001/customer/reportBug/${custID}`, {
            "bugPriority": bugPriority,
            "snippet": snippet,
            "relatedDepartment": department
          },config).then(
            (response) => {
                //console.log(response.data);
                console.log("Sucess");
            },
            (error) => {
                //for Error
                console.log(error);
                toast.error('Data Not Sufficient !!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            }
        );
    }; 

     //Step 2.2- put method from form
      const handleForm = (e) => {
        setSnippet();
            addBug();
            e.preventDefault();
    
        }
    
    
    // Getting Form Value
    const getSnippet = (val) => {
        setSnippet(val.target.value);
    }
    const getCustId = (val) => {
        setCustId(val.target.value);
    }
    const getBug = (val) => {
        setBugPriority(val.target.value);
    }
    const getDepartment = (val) => {
        setDepartment(val.target.value);
    }
    return (

        <div>
      <HeaderCustomer/>
      <br></br>
        <div className="container-sm">
            <form onSubmit={handleForm} >

                <div className="col-md-4 col-10 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label"><h3 className="text">Customer Id</h3></label>
                        <select id="disabledSelect" className="form-select" onClick={getCustId}>
                        {
                            Customer.map(
                                cust =>
                                    <option key={cust.customerId} >{cust.customerId}</option>
                            )
                        }   
                    </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label"><h4>Bug Priority</h4></label>
                        <select id="disabledSelect" className="form-select" onClick={getBug}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label"><h4>Related Depart</h4></label>
                        <select id="disabledSelect" className="form-select" onClick={getDepartment}>
                            <option>Java</option>
                            <option>Python</option>
                            <option>C</option>
                            <option>C#</option>
                            <option>C++</option>
                            <option>Pl/SQL</option>
                        </select>
                    </div>
                    <h4>Describe your issue</h4>
                    <div className="input-group mb-3">
                    <span className="input-group-text">Enter your text here</span>
                    <textarea className="form-control" onChange={getSnippet}></textarea>
                
                </div>
                <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-lg"  >Submit</button>
                </div>
                </div>
                <br></br>
                

            </form>
            <ToastContainer/>
        </div>
        <FooterCustomer/>
    </div>
    )
}


export default ReportBug;