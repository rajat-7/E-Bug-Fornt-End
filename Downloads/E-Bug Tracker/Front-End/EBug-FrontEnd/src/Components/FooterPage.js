import './FooterPage.css'
import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <div>
            <footer id="footer" className="footer-color text-white d-flex-column text-center">
                <hr className="mt-0" />

                <div className="text-center">
                    <h4>You can find us at</h4>
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a href="#!" className="sbtn btn-large mx-1" title="Facebook">
                                <i className="fa fa-facebook-square fa-2x"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="sbtn btn-large mx-1" title="Linkedin">
                                <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="sbtn btn-large mx-1" title="Twitter">
                                <i className="fa fa-twitter-square fa-2x"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="sbtn btn-large mx-1" title="Youtube">
                                <i className="fa fa-youtube-square fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <hr className="mb-0" />

                <div className="container text-left text-md-center">
                    <div className="row">

                        <div className="col-md-3 mx-auto shfooter">
                            <h5 className="my-2 font-weight-bold d-none d-md-block">Company</h5>
                            <div className="d-md-none title" data-target="#Company" data-toggle="collapse">
                                <div className="mt-3 font-weight-bold">Company
                                    <div className="float-right navbar-toggler">
                                        <i className="fas fa-angle-down"></i>
                                        <i className="fas fa-angle-up"></i>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-unstyled collapse nav-item" id="Company">
                                
                                <li><Link className="nav-link active link" to="/about">About</Link></li>
                                <li><Link className="nav-link active link" to="/Careers">Careers</Link></li>
                                <li><Link className="nav-link active link" to="/support">Support</Link></li>
                                <li><Link className="nav-link active link" to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                              
                                <div className="col-md-3 mx-auto shfooter">
                                    <h5 className="my-2 font-weight-bold d-none d-md-block">Get Help</h5>
                                    <div className="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
                                        <div className="mt-3 font-weight-bold">Get Help
                                            <div className="float-right navbar-toggler">
                                                <i className="fas fa-angle-down"></i>
                                                <i className="fas fa-angle-up"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled collapse" id="Get-Help">
                                        
                                        <li><Link className="nav-link active link" to="/help">Help Center</Link></li>
                                        <li><Link className="nav-link active link" to="/contactus">Contact Us</Link></li>
                                        <li><Link className="nav-link active link" to="/privacy">Privacy Policy</Link></li>
                                        <li><Link className="nav-link active link" to="/terms">Terms</Link></li>
                                        <li><Link className="nav-link active link" to="/login">Login</Link></li>
                                        
                            
                                    </ul>
                                </div>
                               
                            </div>
                    </div>
                   
                    <hr className="mb-0"/>
                       
                        <div className="py-3 text-center">
                            Copyright
                            <script>
                                document.write(new Date().getFullYear())
                            </script> <a href="#">EBUG TRACKER</a> | It is free for use
                        </div>
                       
                    </footer>
                    

                </div>
                );
}
export default FooterPage