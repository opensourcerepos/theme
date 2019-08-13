import React, { Component } from 'react';
import styles from './twitter-card.module.css';

class TwitterCard extends Component{
  componentDidMount(){
    window.twttr.ready(()=>{
      window.twttr.widgets.load(
        document.getElementById('article')
      )
    })
    
  }

  render(){
    return(
      <div id="article" className={styles.article}>
        <a class="twitter-timeline"  href="https://twitter.com/OpenSourceRepos?ref_src=twsrc%5Etfw">Tweets by OpenSourceRepos</a>
      </div>
    )
  }
}

export default TwitterCard;