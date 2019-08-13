import React, { Component } from 'react';
import { map, get, isUndefined, filter } from 'lodash';
import { Helmet } from 'react-helmet';
import { BlogListItem } from '../blog-list-item';

class BlogList extends Component{
  
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
    const { data } = this.props;
    const filteredData = this.filterData(data);
    return(
      <div>
        <Helmet>
          <title>OpenSourceRepos</title>
          <meta name="description" content="Open Source Repos is a blog site for explaining the architecture, code-walkthrough and key takeways for the github repository. Out main aim to is to help more developers contribute to open source projects." />
        </Helmet>
      {
        map(filteredData, (d) => {
          return <BlogListItem blog={d}/>
        })
      }
      </div>
    )
  }
}

export default BlogList;