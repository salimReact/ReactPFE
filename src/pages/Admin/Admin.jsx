import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Admin() {
  
  return (
    <Fragment>
      <Header />
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Admin</h2>
                <span>Welcome Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm">
  <div className="profile">
    <div className="d-flex justify-content-center bg-white">
      <div className="col-xl-8 order-xl-1 mx-auto">
        <div className="card bg-secondary shadow mb-3">
          <div className="card-header bg-white border-0">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="d-flex justify-content-center bg-white mb-0">Users</h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h6 className="heading-small text-muted mb-4">Your Activities</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-10">
                  <div className="form-group focused">
                    <ul>
                    <li>
                        <a href="/CheckUser">Check User</a>
                      </li>
                      <li>
                        <a href="/CheckCampaign">Check Campaign</a>
                      </li>
                      <li>
                        <a href="/CheckContract">Check Contract</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </Fragment>
  );
}
