import React from 'react'

const Footer = () => {
  return (
    <div>

<div className="container" >
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 p-0">Home</li>
                <li className="nav-item mb-2 p-0">Features</li>
                <li className="nav-item mb-2 p-0">Services</li>
                <li className="nav-item mb-2 p-0">FAQs</li>
                <li className="nav-item mb-2 p-0">About</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Contact us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 p-0">Application Contact</li>
                <li className="nav-item mb-2 p-0">Customer Contact</li>
                <li className="nav-item mb-2 p-0">Investors Contact</li>
                <li className="nav-item mb-2 p-0">Media Contacts</li>
                <li className="nav-item mb-2 p-0">Sustainable Banking Contacts</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>More</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 p-0">Investors</li>
                <li className="nav-item mb-2 p-0">Corporates</li>
                <li className="nav-item mb-2 p-0">Reports</li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Get Exciting offers and Services offered by the bank</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>Copyright © NatWest Group plc 2022. Registered office: 250 Bishopsgate, London, EC2M 4AA.</p>
            <ul className="list-unstyled d-flex">
              {/* <li className="ms-3"><a className="link-dark" ></a></li>
              <li className="ms-3"><a className="link-dark" ></a></li>
              <li className="ms-3"><a className="link-dark" ></a></li> */}
            </ul>
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer