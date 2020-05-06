import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';
import { TableOfContents } from '../table-of-contents';
import { RepoInformation } from '../repo-information';

class Blog extends Component{
  render(){
    const { data } = this.props;
    return(
      <div className="row">
        <Helmet>
          <title>{data.frontmatter.title}</title>
          <meta name="description" content={data.excerpt} />
        </Helmet>
        <div className="col-sm-12 d-lg-none">
          <TableOfContents data={data.tableOfContents} />
          <RepoInformation blog={data} />
        </div>
        <div className="col-md-9 col-sm-12">
          <div className={styles.blog}>
          <h1>{data.frontmatter.title}</h1>
          </div>
          <div className={styles.blog} dangerouslySetInnerHTML={{__html: data.html}}>
          </div>
        </div>
        <div className="col-md-3 mb-3 d-block-lg">
          <TableOfContents data={data.tableOfContents} />
          <RepoInformation blog={data} />
        </div>
      </div>
    )
  }
}

export default Blog;