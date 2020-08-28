import React, { Component } from 'react';
import styles from './banner.module.css';

class Banner extends Component{
  render(){
    return <div className="row mt-2">
      <div className={styles.banner}/>
    </div>
  }
}

export default Banner;