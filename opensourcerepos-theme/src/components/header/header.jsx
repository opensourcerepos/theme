import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';

class Header extends Component{
  render(){
    return(
      <div className={styles.nav}>
        <nav className="navbar navbar-expand-lg px-0 mx-0">
          <a className="navbar-brand" href="/">OpenSourceRepos</a>
          <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                {/* <form className="form-inline my-2 my-lg-0" method="GET" action="/app/search">
                  <input className="form-control mr-sm-2 custom-input-element" id="searchNavBar" name="repo" type="search" placeholder="Search repository" aria-label="Search"/>
                  <button className="btn my-2 my-sm-0 search-submit-button" type="submit">Search</button>
                </form> */}
              </li>
            </ul>

            <div className="my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active" id="navbar-newblog-link">
                  <Link to="/new-blog" className="btn btn-primary">New Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;