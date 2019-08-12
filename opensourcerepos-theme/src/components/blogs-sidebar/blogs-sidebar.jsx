import React, { Component } from 'react';
import styles from './blogs-sidebar.module.css';

class BlogsSidebar extends Component {
  render(){
    return(
      <div className={styles.sidebar}>
        {/* <div className={styles.header}>
          Recommend
        </div> */}
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#">The crucial line of react-dnd?</a></li>
          <li className={styles.li}><a href="#">The crucial line of react-dnd?</a></li>
          <li className={styles.li}><a href="#">The crucial line of react-dnd?</a></li>
        </ul>
      </div>
    )
  }
}

export default BlogsSidebar;