import React, { Component } from 'react';
import styles from './table-of-contents.module.css';

class TableOfContents extends Component{
  render(){
    const { data } = this.props;
    return(
      <div className={styles.tableofcontents}>
        <div className={styles.header}>
          <span className={styles.headertitle}>Table of contents</span>
        </div>
        <div dangerouslySetInnerHTML={{__html: data}}></div>
      </div>
    )
  }
}

export default TableOfContents;