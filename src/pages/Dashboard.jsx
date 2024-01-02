import React from "react";
import { SlideMotion } from "../libs/FramerMotion";

function Dashboard() {
  return (
    <>
      <SlideMotion>
        <div className="Wrapper">
          <p style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
            Choose a plan that's just right for you...
          </p>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-strech">
              <div className="card w-100">
                <div className="card-body">
                  <div>
                    <h5
                      className="card-title fw-bold mb-1"
                      style={{ fontSize: "1.6rem", fontWeight: "bold" }}
                    >
                      Basic
                    </h5>
                    <p
                      className="card-subtitle mb-0"
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      $89.99/mo
                    </p>
                    <p
                      class="card-subtitle mb-0"
                      style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                    >
                      $9.99/mo
                    </p>
                    <div className="d-flex align-items-center gap-2 mt-4">
                      <span
                        style={{
                          backgroundColor: "#e8c98c",
                          color: "black",
                          fontSize: "5rem",
                          width: "8rem",
                          height: "2rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="badge rounded-1 fw-semibold fs-3"
                      >
                        Get Started{" "}
                        <i
                          className="fas fa-arrow-right me-2"
                          style={{ marginLeft: "0.5rem" }}
                        ></i>
                      </span>
                    </div>
                    <hr
                      style={{
                        width: "100%",
                        margin: "8px 0",
                        backgroundColor: "#343a40",
                      }}
                    />{" "}
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <p>What you'll get:</p>
                      </div>
                      <br />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i class="fas fa-user me-2 mb-2"></i>Upto 25 Users
                    </li>
                    <li>
                      <i class="fas fa-cloud-upload-alt  me-2 mb-2"></i>Upto
                      25gb Storage
                    </li>
                    <li>
                      <i class="fas fa-envelope  me-2 mb-2"></i>Email Support
                    </li>
                  </ul>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        textDecoration: "underline",
                      }}
                    >
                      EXPLORE FEATURE
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-strech">
              <div className="card w-100">
                <div className="card-body">
                  <div>
                    <h5
                      className="card-title fw-bold mb-1"
                      style={{ fontSize: "1.6rem", fontWeight: "bold" }}
                    >
                      Standard
                    </h5>
                    <p
                      className="card-subtitle mb-0"
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      $189.99/mo
                    </p>
                    <p
                      class="card-subtitle mb-0"
                      style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                    >
                      $99.99/mo
                    </p>
                    <div className="d-flex align-items-center gap-2 mt-4">
                      <span
                        style={{
                          backgroundColor: "#e87ea2",
                          color: "black",
                          fontSize: "5rem",
                          width: "8rem",
                          height: "2rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="badge rounded-1 fw-semibold fs-3"
                      >
                        Get Started{" "}
                        <i
                          className="fas fa-arrow-right me-2"
                          style={{ marginLeft: "0.5rem" }}
                        ></i>
                      </span>
                    </div>
                    <hr
                      style={{
                        width: "100%",
                        margin: "8px 0",
                        backgroundColor: "#343a40",
                      }}
                    />{" "}
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <p>What you'll get:</p>
                      </div>
                      <br />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i class="fas fa-user  me-2 mb-2"></i> Upto 50 Users
                    </li>
                    <li>
                      <i class="fas fa-cloud-upload-alt  me-2 mb-2"></i> Upto
                      60gb Storage
                    </li>
                    <li>
                      <i class="fas fa-envelope  me-2 mb-2"></i>
                      Email+Chat Support
                    </li>
                  </ul>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        textDecoration: "underline",
                      }}
                    >
                      EXPLORE FEATURE
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-strech">
              <div className="card w-100">
                <div className="card-body">
                  <div>
                    <h5
                      className="card-title fw-bold mb-1"
                      style={{ fontSize: "1.6rem", fontWeight: "bold" }}
                    >
                      Premium
                    </h5>
                    <p
                      className="card-subtitle mb-0"
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      $389.99/mo
                    </p>
                    <p
                      class="card-subtitle mb-0"
                      style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                    >
                      $199.99/mo
                    </p>
                    <div className="d-flex align-items-center gap-2 mt-4">
                      <span
                        style={{
                          backgroundColor: "#e4a5e6",
                          color: "black",
                          fontSize: "5rem",
                          width: "8rem",
                          height: "2rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="badge rounded-1 fw-semibold fs-3"
                      >
                        Get Started{" "}
                        <i
                          className="fas fa-arrow-right me-2"
                          style={{ marginLeft: "0.5rem" }}
                        ></i>
                      </span>
                    </div>
                    <hr
                      style={{
                        width: "100%",
                        margin: "8px 0",
                        backgroundColor: "#343a40",
                      }}
                    />{" "}
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <p>What you'll get:</p>
                      </div>
                      <br />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i class="fas fa-user  me-2 mb-2"></i>Upto 75 Users
                    </li>
                    <li>
                      <i class="fas fa-cloud-upload-alt  me-2 mb-2"></i> Upto
                      100gb Storage
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="fas fa-envelope  me-2 mb-2"></i>
                      Email+Chat+Whatsapp Support
                    </li>
                  </ul>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        textDecoration: "underline",
                      }}
                    >
                      EXPLORE FEATURE
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

  
<div className="row">
    <div className="col-md-6 mb-4">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2">
              <span
                className="badge text-black rounded-1 fw-semibold fs-2"
                style={{
                  backgroundColor: "rgb(108 245 131 / 73%)",
                  borderRadius: "10px",
                }}
              >
                Free Forever{" "}
                <i className="bi bi-arrow-down-circle ml-1 mb-2"></i>
              </span>
            </div>
            <h5 className="card-title fw-bold mb-1" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
              Free Starters
            </h5>
            <p className="card-subtitle mb-0" style={{ fontSize: "1rem" }}>
              The quickest and easiest way to try Protocols with basic functionalities
            </p>
            <div className="d-md-flex align-items-center gap-2 mt-4">
              <span
                style={{
                  backgroundColor: "rgb(108 245 131 / 73%)",
                  color: "black",
                  fontSize: "5rem",
                  width: "8rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="badge rounded-1 fw-semibold fs-3"
              >
                Get Started
                <i className="fas fa-arrow-right ms-md-2"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2">
          <ul>
            <li><i className="fas fa-user me-2 mb-2"></i> Upto 8 Users</li>
            <li><i className="fas fa-cloud-upload-alt me-2 mb-2"></i> Upto 3gb Storage</li>
            <li><i className="fas fa-envelope me-2 mb-2"></i> Email Support</li>
            <li>
              <i className="fas fa-check me-2 mb-2"></i>
              Task Flow, Voting, Accounting, Basics of Documentation, Banking, Notes, Investor, Director, and Team Management included
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <div className="col-md-6 mb-4">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex align-items-center gap-2">
              <span
                className="badge text-black rounded-1 fw-semibold fs-2"
                style={{ backgroundColor: "#9dc6ff" }}
              >
                Let's Connect{" "}
                <i className="bi bi-arrow-down-circle ml-1 mb-2"></i>
              </span>
            </div>
            <h5 className="card-title fw-bold mb-1" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
              Free Starters
            </h5>
            <p className="card-subtitle mb-0" style={{ fontSize: "0.9rem" }}>
              The quickest and easiest way to try Protocols with basic functionalities
            </p>
            <div className="d-md-flex align-items-center gap-2 mt-4">
              <span
                style={{
                  backgroundColor: "#9dc6ff",
                  color: "black",
                  fontSize: "5rem",
                  width: "8rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="badge rounded-1 fw-semibold fs-3"
              >
                Get Started{" "}
                <i className="fas fa-arrow-right ms-md-2"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5 d-md-flex">
          <ul>
            <li><i className="fas fa-user me-2 mb-2"></i> More than 75 Users</li>
            <li><i className="fas fa-check me-2 mb-2"></i> Customization of all other features</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
        </div>
      </SlideMotion>

    </>
  );
}

export default Dashboard;
