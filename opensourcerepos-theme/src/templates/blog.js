import React from 'react';

export default ({pageContext: data})=>{
  return (<div className="row">
    <div dangerouslySetInnerHTML={{__html: data.html}}></div>
    <div dangerouslySetInnerHTML={{__html: data.tableOfContents}}></div>
  </div>)
} 