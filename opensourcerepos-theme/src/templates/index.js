import React, { Component } from 'react';
import { map, get, isUndefined, filter } from 'lodash';
import { BlogListItem, NavBar } from './components';

class IndexPage extends Component {
  
  // getData = (d) => {
  //   if(isUndefined(get(d,['frontmatter', 'title']))){
  //     return;
  //   }
  //   return {
  //     title: get(d,['frontmatter', 'title']),
  //     excerpt: get(d,['frontmatter', 'excerpt']),

  //   }
  // }

  filterData = (data) => {
    return filter(data, d=>{
      const title = get(d,['frontmatter', 'title'])
      if(isUndefined(title)){
        return false;
      }
      return true;
    })
  }

  render(){
    const { pageContext } = this.props;
    const data = this.filterData(pageContext);
    return <React.Fragment>
      <NavBar/>
      <div className="list">
      {
        map(data, (d) => {
          return <BlogListItem blog={d}/>
        })
      }
      </div>
    </React.Fragment>
  }
}

export default IndexPage;