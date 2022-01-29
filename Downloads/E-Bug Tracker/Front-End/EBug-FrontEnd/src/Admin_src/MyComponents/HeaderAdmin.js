import {Link} from "react-router-dom";

const header=()=>{
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h2>Admin Portal</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-center">
        <Link className="nav-link active" to ="/Viewbugs"><h4>View Bugs</h4></Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active" to ="/Assignwork"><h4>Assign Work</h4></Link>
        </li>
        
        <li className="nav-item text-center">
        <Link className="nav-link active" to ="/Send_message_customer"><h4>Send Message</h4></Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active" to ="/viewStaff"><h4>View Staff</h4></Link>
        </li>
        <li className="nav-item text-center">
        <Link className="nav-link active" to ="/login">
        <button className="btn btn-outline-danger"  type="submit">Log Out</button>
        </Link>
        </li>
      </ul>
      
      <form className="d-flex">1
        
      
      </form>
    </div>
  </div>
</nav>
</div>

    );
}

export default header;