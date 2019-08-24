import React, { Component } from 'react';
import { Link } from "gatsby"
import styles from './blog-list-item.module.css';
import GithubIcon from './github.svg';

class BlogListItem extends Component{
  render(){
    const { blog } = this.props;
    return(
      <div className={styles.wrapper}>
        <div className="row d-flex justify-content-between">
          <div className={styles.repoName}>
            <img src={GithubIcon} width="22" height="22"/> <a href="">{`${blog.frontmatter.repoOrganization}/${blog.frontmatter.repoName}`}</a>
          </div>
          <div className={styles.timeToRead}>
            {blog.timeToRead} min read
          </div>
        </div>
        <div className={styles.title}>
          <Link to={blog.frontmatter.path || blog.fields.slug}>{blog.frontmatter.title}</Link>
        </div>
        <div className={styles.excerpt}>
          {blog.excerpt} 
        </div>
      </div>
    )
  }
}

export default BlogListItem;