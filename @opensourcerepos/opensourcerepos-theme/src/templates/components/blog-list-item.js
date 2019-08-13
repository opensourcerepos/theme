import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';

import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"

class BlogListItem extends Component{
  render(){
    const { blog } = this.props;
    return(
      
        <Card className="bloglistitem">
          <CardContent className="bloglistcontent">
          <Link to={blog.frontmatter.path} className="bloglistitema"> 
            <Typography gutterBottom className="bloglisttitle">
              {blog.frontmatter.title}
            </Typography>
            </Link>
            <Typography component="p" className="blogexcerpt">
              {blog.excerpt}
            </Typography>
            <Chip className="blogchip" label={`${blog.frontmatter.repoOrganization}/${blog.frontmatter.repoName}`} />
            {/* <Typography component="p" className="blogexcerpt">
              {blog.frontmatter.author}
            </Typography> */}
          </CardContent>
        </Card>
    )
  }
}

export default BlogListItem;