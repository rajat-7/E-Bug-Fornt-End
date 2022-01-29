import {Link} from "react-router-dom";

const Header=()=>{
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h2>Customer Portal</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-center">
        <Link className="nav-link active" to ="/reportBugs"><h4>Report Bugs</h4></Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active" to ="/changeBugStatus"><h4>Change Bug Status</h4></Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active" to ="/viewRemedy"><h4>View Remedy</h4></Link>
        </li>
        <Link className="nav-link active text-center" to ="/login">
        <button className="btn btn-outline-danger" type="submit">Log Out</button>
        </Link>
      </ul>
      
      <form className="d-flex">1
        
      
      </form>
    </div>
  </div>
</nav>
</div>

    );
}

export default Header;