import React, { Component } from 'react';
import { Header } from '../components/header';
import { Blog } from '../components/blog';
import { Footer } from '../components/footer';

class NewBlog extends Component {

  render(){
    return <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="card p-3 m-3">
        <h4>How to submit new blog?</h4>
        <p>In order to submit a new blog to our site, send a pull request to the repository of OpenSourceRepos in github.</p>
        <h4>Send a pull request</h4>
        <p>In order to send the pull request, follow the following steps</p>
        <ul>
          <li>Clone the repository <a href="https://github.com/opensourcerepos/blogs" target="blank">https://github.com/opensourcerepos/blogs</a></li>
          <li>Set up the repository in your local machine.</li>
          <li>Send the pull request to the repository.</li>
          <li>Once the pull request is reviewed and merged by the admins, the blog will be published.</li>
        </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  }
}

export default NewBlog;