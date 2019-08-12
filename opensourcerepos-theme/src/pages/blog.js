import React, { Component } from 'react';
import { Header } from '../components/header';
import { Blog } from '../components/blog';
import { Footer } from '../components/footer';

class BlogPage extends Component {

  render(){
    const { pageContext } = this.props;
    return <React.Fragment>
      <Header />
      <div className="container-fluid">
        <Blog data={pageContext} />
      </div>
      <Footer />
    </React.Fragment>
  }
}

export default BlogPage;