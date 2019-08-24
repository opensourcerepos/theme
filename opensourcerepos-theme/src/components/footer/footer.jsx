import React, { Component } from 'react';
import styles from './footer.module.css';
import GithubIcon from './github.svg';
import TwitterIcon from './twitter.svg';

class Footer extends Component{
  render(){
    return(
      <div className={styles.footer}>
<footer class="page-footer font-small blue pt-4">

<div class="container text-center text-md-left">

  <div class="row">

    <div class="col-md-8 mt-md-0 mt-3">

      <h5>About</h5>
      <p>Open source repos is a open source project to make the developers understand the codebase and architecture of the open source projecs. <a href="/about" target="_blank">Read more</a></p>

    </div>

    <hr class="clearfix w-100 d-none d-sm-none d-md-none pb-3"/>

    <div class="col-md-4 mb-md-0 mb-3">

      <div class="d-flex flex-column justify-content-end justify-content-md-center">
      
      <h5>Social</h5>

      <ul class="list-unstyled">
        <li>
          <a href="https://github.com/opensourcerepos" target="_blank"><img height="16" width="20" class="mr-1" src={GithubIcon} alt="github repo"/>OpenSourceRepos</a>
        </li>
        <li>
          <a href="https://twitter.com/OpenSourceRepos" target="_blank"><img height="16" width="20" class="mr-1" src={TwitterIcon} alt="twitter handle"/>OpenSourceRepos</a>
        </li>
      </ul>
    </div>

    </div>
  </div>
</div>
</footer>

      </div>
    )
  }
}

export default Footer;