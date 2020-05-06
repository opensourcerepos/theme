import React, { PureComponent } from 'react';
import GithubIcon from '../../../assets/github.svg';
import styles from './repo-information.module.css';

class RepoInformation extends PureComponent{
  render(){
    const { blog } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.headertitle}>Repository Information</span>
        </div>
        <div className={styles.reponame}>
          <img src={GithubIcon} width="22" height="22"/> <a target="_blank" href={`https://github.com/${blog.frontmatter.repoOrganization}/${blog.frontmatter.repoName}`}>{`${blog.frontmatter.repoOrganization}/${blog.frontmatter.repoName}`}</a>
        </div>
        <div className={styles.excerpt}>
          <p>{blog.excerpt}</p>
        </div>
      </div>
    )
  }
}

export default RepoInformation;