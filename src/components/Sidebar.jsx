import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="left-sidebar">
        <div>
          <div className="d-flex align-items-center flex-column text-center py-9 mx-7 border-bottom">
            <img
              src="../../dist/images/profile/user-1.jpg"
              className="rounded-circle"
              width={80}
              height={80}
              alt=""
            />
            <div className="ms-3 mt-3">
              <h5 className="mb-1 fs-3 has-arrow">Ram Mohan</h5>

              <p className="mb-0 d-flex text-dark align-items-center gap-2">
                <i className="ti ti-mail fs-4" /> Rammohan2@gmail.com
              </p>
            </div>
            <div
              className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i
                className="ti ti-x fs-8 text-muted"
              />
            </div>
          </div>

          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <a className="sidebar-link " href={undefined} aria-expanded="false">
                  <span className="d-flex">
                    <i
                      className="fas fa-tachometer-alt "
                      style={{ color: "blue", marginRight: "0.5rem" }}
                    />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href={undefined}
                  aria-expanded="false"
                >
                  <span className="d-flex">
                    <i
                      className="fas fa-gift"
                      style={{ color: "blue", marginRight: "0.5rem" }}
                    />
                  </span>
                  <span className="hide-menu">Perks</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href={undefined}
                  aria-expanded="false"
                >
                  <span className="d-flex">
                    <i
                      className="fas fa-plus-square"
                      style={{ color: "blue", marginRight: "0.5rem" }}
                    ></i>
                  </span>
                  <span className="hide-menu">Addons</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href={undefined}
                  aria-expanded="false"
                >
                  <span className="d-flex">
                    <i
                      className="fas fa-question-circle"
                      style={{ color: "blue", marginRight: "0.5rem" }}
                    ></i>
                  </span>
                  <span className="hide-menu">FAQ</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href={undefined}
                  aria-expanded="false"
                >
                  <span className="d-flex">
                    <i
                      className="fas fa-headphones "
                      style={{ color: "blue", marginRight: "0.5rem" }}
                    ></i>
                  </span>
                  <span className="hide-menu">Support</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <Helmet>
        <script src="/dist/js/app.init.js"></script>
        <script src="/dist/js/sidebarmenu.js"></script>
      </Helmet>
    </>
  );
}

export default Sidebar;
