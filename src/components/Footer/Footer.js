import React from "react";
import '../../styles/footer.css'
const Footer = () => {
  return (
    <footer className="footer-area footer--light">
      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  ©   <span>{new Date().getFullYear()}</span> {/* Outputs 2020 */}
                  <a href="#">Company</a>.Created by
                  <a href="#">Devasri</a>
                </p>
              </div>
              {/* <div className="go_top">
                <span className="icon-arrow-up"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
