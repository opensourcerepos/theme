import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Header} from '../components/header';
import { Footer } from '../components/footer';
import { Card } from '../components/card';

class AboutPage extends Component {

  render(){
    return <React.Fragment>
      <Header />
      <Helmet>
          <title>{"About"}</title>
          <meta name="description" content={"About OpenSourceRepos"} />
        </Helmet>
        <div className="col-md-9">
          <Card>
            <h1>Introduction</h1>
            <p>Open source repos is a project to make the developers understand the codebase and architecture of the open source projecs, so that they can contribute to it, use the implementation in their own projects and know about the tools and best practices. The entire code of opensourcerepos.com is available at the following github repository.
            https://github.com/opensourcerepos</p>

            <p>Here are the main goals of OpenSourceRepos.com</p>
            
            <h3>Help developers contribute</h3>
            <p>Many people use open source projects in their codebase. But not many developers know how the open source projects code works. How many developers would know the architecture of react or angular or *some other big open source project*. Open source repos provides code code-walkthrough of the open source projects in github (many more to come) so that developers can easily understand the code and also contribute to it. </p>
            
            <h3>Understand the architecture</h3>
            <p>If you know how the popular open source projects are architectured, it will help you in some way in your own project in future. Tomorrow, if your boss comes and says to you "Hey, we want to use a drag and drop library, but our custom requirement does not suit the open source ones. Can you create a custom drag and drop library which suits our needs?"
            How would you react to it? If you have done the code walkthrough of some drag and drop library like "react-dnd", and also know the architecture of it, you would be confident enough to create a custom drag and drop library to suit your custom needs.
            There are other benefits of knowing the architecture as well. What if 10 years down the line, you want to implement the "diff rendering" feature of react in some other framework or library. It would help to know the architecture of "diff rendering" in react first.</p>
            
            <h3>Understand the best practices</h3>
            <p>The popular open source projects follow some best practices, in terms of coding guidelines, security aspects of the project, performance aspects of the project, user interaction etc. Because many people have agreed upon these, it makes sense for you to understand what are the best practices followed in the open source project, so that you can also implement it in your own office project or hobby project.</p>

            <h3>Understand the tools</h3>
            <p>Open source projects use many tools, be it for cross browser testing, linting of the code, unit testing, integration testing, performance testing, security testing etc. Knowing the implementation of tools will help you to implement similar things in your own projects. If you know how to do cross browser testing for last 5 versions of all popular browsers using a service called sauce labs in travis ci, you can do the same in your office project (the CI used in your office will be different, the cross browser testing service will be different from sauce labs, but you atleast know how it should be done)</p>
          </Card>
        </div>
      <Footer />
    </React.Fragment>
  }
}

export default AboutPage;