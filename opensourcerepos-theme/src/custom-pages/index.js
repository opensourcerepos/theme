import React, { Component } from 'react';
import { map, get, isUndefined, filter } from 'lodash';
import {Header} from '../components/header';
import { BlogList } from '../components/blog-list';
import { TwitterCard } from '../components/twitter-card';
import styles from './index.module.css';
import { Footer } from '../components/footer';
import {Banner} from '../components/banner';

class IndexPage extends Component {

  render(){
    const { data } = this.props.pageContext;
    return <React.Fragment>
      <Header />
      <div className="container-fluid">
        <Banner/>
        <div className="row">
          <div className={styles.col}>
            <BlogList data={data} />
          </div>
          <div className={styles.col300}>
            {/* <BlogsSidebar /> */}
            <TwitterCard/>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  }
}

export default IndexPage;