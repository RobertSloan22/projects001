import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideBar.css';

const SideBar = () => {
    return (
      <div className="dropdown border-top">
        <a
          href="https://openai.com/"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="C:\Users\rstec\mayfirst2023\src\components\CarHologram.jpg"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="https://www.github.com">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://www.nasa.">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="https://robertsloan22.github.io/PatrickSloanPhotography.io/">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="https://robertsloan22.github.io/RobertSloan22.io/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
  };
  export default SideBar;
