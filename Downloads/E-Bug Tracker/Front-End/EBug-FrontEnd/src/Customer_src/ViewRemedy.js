import axios from 'axios';
import { useEffect, useState } from 'react';
import HeaderCustomer from './HeaderCustomer';
import FooterCustomer from './FooterCustomer';

const ViewBugs = () => {

    //Step 1.1: Get Customer for DrowpDown List
    const [Customer, setCustomer] = useState([]);
    const [custID, setCustId] = useState([]);

    //Step 1.2- server call 
    const getAllCustomer = () => {
        axios.get(`http://localhost:9001/customer/viewAllCustomer`).then(
            (response) => {
                setCustomer(response.data);
                console.log("Successfully got all the Customer Dropdown")
            },
            (error) => {
                //for Error
                console.log(error);
            }
        );
    };

    useEffect(() => {
        getAllCustomer();  
        
    }, [true]);
    //Function Call to server:
    const [bugs, setBug] = useState([]);
    const getAllBugs = () => {
        axios.get(`http://localhost:9001/customer/viewStatusOfRaisedBugs/${custID}`).then(
            (response) => {
                //Success
                console.log("success");
                setBug(response.data);
            },
            (error) => {
                //for Error
                console.log(error);
            }
        );
    };

    //calling Loading Bugs Fun

    const handleForm = (e) => {
        console.log(custID);
        getAllBugs();
        e.preventDefault();
    }

    // Getting Customer id from Dropdown
    const getCustId = (val) => {
        setCustId(val.target.value);
    }

    return (
        <div>
      <HeaderCustomer/>
      <br></br>
        <div className="container-sm">
            
            <form onSubmit={handleForm}>
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
                    <div className='text-center'>
                <button type="submit" className="btn btn-primary btn-lg"  >Submit</button>
                </div>
                </div>
                </form>
            <br></br>
            <div className='container-fluid'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Ticket no.</th>
                            <th scope="col">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            bugs.map(
                                bug =>
                                    <tr key={bug.ticketNo}>
                                        <td>{bug.ticketNo}</td>
                                        <td>{bug.remedy}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            
        </div>
         <FooterCustomer/>
         </div>
    );
}

export default ViewBugs;