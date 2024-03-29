import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
    <Link
      to="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto ml-4 text-dark"
    >
      <i
        className="bi bi-pc-display-horizontal ms-5 me-2"
        style={{ fontSize: "2rem", color: "orange" }}
      />

      <span className="fs-4">System Info </span>
    </Link>
    <h6 className='me-3 mt-2'>A wrapper of <a href='https://github.com/sebhildebrandt/systeminformation' target="_blank" rel="noopener" className='text-dark'>Systeminformation.js</a></h6>
  </header>
);
