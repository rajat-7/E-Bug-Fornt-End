import React, { useEffect, useState } from "react";
import Staffservices from "../../Services/Staffservices";

import HeaderStaff from './HeaderStaff';
import FooterStaff from './FooterStaff';

const ViewBugs = () => {
  const [assignedTicketIds, setAssignedTicketIds] = useState([]);
  const [Staff, setStaff] = useState([]);
  const [staffId, setStaffId] = useState([]);

  //Get Staff IDS for Dropdown List
  const getAllStaff = () => {
    Staffservices.getAllStaffs().then(
      (response) => {
        setStaff(response.data);
      },
      (error) => {
        //for Error
        console.log(error);
      }
    );
  };

  //Calling GetstaffIds.()
  useEffect(() => {
    getAllStaff();
    return () => {
    }
  }, [])

  //Getting Assigned ticket Ids for staff
  //Form Submit Function   
  const handleSubmit = () => {

    Staffservices.findStaffById(staffId)
      .then((response) => {
        setAssignedTicketIds(response.data.assignedTicketIds);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <HeaderStaff />
      <br></br>
      <div className="container-sm">
        <div className="col-md-4 col-10 mx-auto">
          <div className="mb-3 text-center">
            <br></br>
            <label><h3>Staff Id</h3></label>

            <select id="disabledSelect" className="form-select" onClick={(e) => {
              setStaffId(e.target.value)
            }}>
              {
                Staff.map(
                  staff =>
                    <option key={staff.staffId}>{staff.staffId}</option>
                )
              }
            </select>

          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button>
          </div>

          <br></br>
          <br></br>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <h4>View Assigned Bug Ticket Numbers</h4>
            </label>
            <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Staff Id</th>
                            <th scope="col">Assigned Tickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {        <tr>
                                        <td>{staffId}</td>
                                        <td>{assignedTicketIds}</td>
                                    </tr>
                            
                        }
                    </tbody>
                </table>

          </div>
        </div>
      </div>
      <FooterStaff />
    </div>
  );
};

export default ViewBugs;