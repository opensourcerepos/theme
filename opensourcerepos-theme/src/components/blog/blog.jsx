import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';

class Blog extends Component{
  render(){
    const { data } = this.props;
    return(
      <div className="row">
        <Helmet>
          <title>{data.frontmatter.title}</title>
          <meta name="description" content={data.excerpt} />
        </Helmet>
        <div className="col-md-9">
          <div className={styles.blog} dangerouslySetInnerHTML={{__html: data.html}}>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.tableOfContents} dangerouslySetInnerHTML={{__html: data.tableOfContents}}>

          </div>
        </div>
      </div>
    )
  }
}

export default Blog;