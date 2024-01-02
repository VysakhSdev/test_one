import React from "react";

function Header() {
  return (
    <>
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="p-2">
              <i className="ti ti-dots fs-7" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="d-flex align-items-center justify-content-between">
              <a
                href="javascript:void(0)"
                className="nav-link d-flex d-lg-none align-items-center justify-content-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobilenavbar"
                aria-controls="offcanvasWithBothOptions"
              >
                <i className="ti ti-align-justified fs-7" />
              </a>
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pe-0"
                    href="javascript:void(0)"
                    id="drop1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <div className="user-profile-img">
                        <img
                          src="../../dist/images/profile/user-1.jpg"
                          className="rounded-circle"
                          width={35}
                          height={35}
                          alt
                        />
                      </div>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop1"
                  >
                    <div
                      className="profile-dropdown position-relative"
                      data-simplebar
                    >
                      <div className="py-3 px-7 pb-0">
                        <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                      </div>
                      <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                        <img
                          src="../../dist/images/profile/user-1.jpg"
                          className="rounded-circle"
                          width={80}
                          height={80}
                          alt
                        />
                        <div className="ms-3">
                          <h5 className="mb-1 fs-3">Ram Mohan</h5>
                          <p className="mb-0 d-flex text-dark align-items-center gap-2">
                            <i className="ti ti-mail fs-4" />{" "}
                            Rammohan2@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="d-grid py-4 px-7 pt-8">
                        <a
                          href="authentication-login.html"
                          className="btn btn-outline-primary"
                        >
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
