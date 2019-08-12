---
title: 'Getting started with the code base of OpenSourceRepos'
date: "2019-07-23"
path: 'getting-started-with-the-code-base-of-open-source-repos'
excerpt: 'Learn how to get started with the codebase of opensourcerepos and install all the dependencies.'
versionControl: GitHub
repositoryUrl: https://github.com/opensourcerepos/opensourcerepos
repoOrganization: opensourcerepos
repoName: opensourcerepos
author: sant0shg
---

# Introduction

OpenSourceRepos has a client-server architecture. The stack is primarily javascript based. The blogs are converted to static content for faster time to load and SEO. You can read more on the architecture of opensourcerepos in the older blog post. 

In this post, we are going to look into getting started with the codebase of OpenSourceRepos and setting it up in your local machine. Let us start by defining various libraries and framework that we use in the frontend and backend of the web application.

- Front End - Simple javascript, jquery and bootstrap library is used across the site. For text editors, we use TinyMCE. 

- Back End - Loopback server. Loopback is a Nodejs framework which helps to create APIs.

- Database - PostgresSQL version 10

<img src="/assets/image.png" width="100%" height="300">

# Github Repository

You can see the source code of OpenSourceRepos at the following GitHub URL.

https://github.com/opensourcerepos/opensourcerepos

# Setting up the environment

We are using Nodejs version 8 and npm version 5. You need to download and install the above node and npm. There are many tutorials available on the internet which show you how to download a particular node version. You can also use "nvm" (node version manager) to switch between versions of Nodejs.

You also need to download the PostgresSQL database. We are using version 10 of PostgresSQL. You can download command-line versions of PostgresSQL, or a database management application for Postgres like PostgresApp. Using PostgresApp, you can start, stop and manage the Postgres server. 

# Getting started with code

Once you have installed the required Node and PostgresSQL, you can start with setting up the codebase of opensourcerepos.

To download the source code, clone the GitHub repository.

```js
git clone https://github.com/opensourcerepos/opensourcerepos

```

This will download and clone the opensourcerepos in a folder called "opensourcerepos". 

Go inside that folder, and install all the node dependencies using below command

```
npm install
```

Above command will install all the dependencies for opensourcerepos. 

In order to start the server, run the following command

```
npm start
```

You can see the server is started at the URL http://localhost:3000.

# Configuring the credentials

There are credentials for Postgres database, GitHub credentials for accessing the GitHub APIs, and file upload credentials in the file "config.js". 

The credentials used in production code of OpenSourceRepos is different from the one checked in the repository. If the existing credentials do not work for you, you can always edit the config.js. 