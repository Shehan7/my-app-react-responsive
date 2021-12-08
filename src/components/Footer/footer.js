import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import Logo from '../../logo.png';


const FooterSt = {
    backgroundColor: "#000",
    color: "lightgrey",
    paddingTop:"20px",
}

const FootHead = {
    color: "rgb(214, 0, 0)"
}

const footer = () => {
    return (
        <div>

        <footer className="page-footer font-small unique-color-dark" style={FooterSt}>
        <div className="container text-center text-md-left mt-5">
            <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                <h6 className="text-uppercase font-weight-bold"></h6>
                <img alt="logo footer" src={Logo} height="170px" width="250px" className="footerimg" />

            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                <h5 className="text-uppercase font-weight-bold" style={FootHead}>Contact Info</h5>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                <p className="contact-p" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
                    <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                    <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
                    </svg>
                    ABC services,
                    1/2, 123 Road,
                    Nowhere
                </p>

                <p className="contact-p" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <a href="tel:0112633237">
                    +94 11 2345678
                    </a>
                </p>

                <p className="contact-p" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                    <a href="mailto:info@1333.lk">
                    info@nowhere
                    </a>
                </p>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


                <h5 className="text-uppercase font-weight-bold" style={FootHead}>Pages</h5>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                <p>
                <a href="#/">HOME</a>
                </p>
                <p>
                <a href="#/about">ABOUT US</a>
                </p>
                <p>
                <a href="#/events">EVENTS</a>
                </p>
                <p>
                <a href="#/gallery">GALLERY</a>
                </p>


            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <form>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg> </button>
                </form><br />

                <p>This is a text on the footer which means nothing but something which is for a dummy text on the footer of this website.</p>
                
                <div>
                <div class="row">
                <div>
                    <ul class="social-network social-circle">
                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>


            </div>


        </div>

        <div className="footer-copyright text-center py-3" style={{backgroundColor: "#1f1f1f"}}>Copyright © 
            <a href="https://ushira.me/">2021.</a> All Rights Reserved
        </div>


        </footer>

        </div>
    )
}

export default footer;
