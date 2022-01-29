
import axios from 'axios';

import { useEffect, useState } from 'react';
import HeaderCustomer from './HeaderCustomer';
import FooterCustomer from './FooterCustomer';

const ChangeBugStatus = () => {

  //Step 1 - For DropDown list of Tickets
  const [Bug, setBug] = useState([]);
  const [Ticket,setTicket] = useState([]);

  const getAllTicket = () => {
    axios.get(`http://localhost:9001/customer/viewAllBug`).then(
      (response) => {
        setBug(response.data);
        console.log("Success");
      },
      (error) => {
        //for Error
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getAllTicket();
    return () => {
    }
  }, [])

  // getting Values 
  const getTicket = (val) => {
    setTicket(val.target.value);
  }
    //Step 2 -  calling server
    const changeStatus=()=>{
      axios.put(`http://localhost:9001/customer/changeStatusToClosed/${Ticket}`).then(
        (response) => {
            //console.log(response.data);
            console.log("Sucess");
        },
        (error) => {
            //for Error
            console.log(error);
        }
    );
    };
  const handleForm=(e)=>{
    changeStatus();
    //console.log(Tickets);
    e.preventDefault();

  } 

  return (
    <div>
      <HeaderCustomer/>
      <br></br>
      <div className="container-sm">
        <form onSubmit={handleForm}>

          <div className="col-md-4 col-10 mx-auto">
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label"><h3 className="text">Ticket No.</h3></label>
              <select id="disabledSelect" className="form-select" onClick={getTicket}>
                        {
                            Bug.map(bug =>
                                    <option key={bug.ticketNo} >{bug.ticketNo}</option>
                            )
                        };
                    </select>
            </div>

         
          </div>
          <br></br>
          <div className='text-center'>
          <button type="submit" className="btn btn-primary" >CLOSE</button>
          </div>
        </form>
      </div>
      <FooterCustomer/>
    </div>

  );
}
export default ChangeBugStatus;