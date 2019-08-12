import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';
import { TableOfContents } from '../table-of-contents';

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
        <div className="col-md-3 mb-3">
          <TableOfContents data={data.tableOfContents} />
        </div>
      </div>
    )
  }
}

export default Blog;