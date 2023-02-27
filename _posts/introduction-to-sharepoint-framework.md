---
title: 'Introduction to SharePoint Framework and related tool chain'
excerpt: 'The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and support for open source tooling.
With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready from day one.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Ved Mishra
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

![SharePoint Framework Toolchain](https://i.imgur.com/IqjyIJD.png)

## Introduction to SharePoint framework

The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and support for open source tooling.

With the SharePoint Framework, you can use modern web technologies and tools in your preferred development environment to build productive experiences and apps that are responsive and mobile-ready from day one.

The SharePoint Framework works for SharePoint Online and also for on-premises (SharePoint 2016 Feature Pack 2 and SharePoint 2019).

**Key features of the SharePoint Framework include the following:**
* It runs in the context of the current user and connection in the browser. There are no iFrames for the customization (JavaScript is embedded directly to the page).
* The controls are rendered in the normal page DOM.
* The controls are responsive and accessible by nature.
It enables the developer to access the lifecycle in addition to render, load, serialize and deserialize, configuration changes, and more.
* It is framework-agnostic. You can use any JavaScript framework that you like: React, Handlebars, Knockout, Angular, and more.
* The toolchain is based on common open source client development tools such as npm, TypeScript, Yeoman, webpack, and gulp.
* Performance is reliable.
* End users can use SPFx client-side solutions that are approved by the tenant administrators (or their delegates and site collection admins) on all sites, including self-service team, group, or personal sites.
* SPFx web parts can be added to both classic and modern pages.

## Tools used in SharePoint framework

**Google Chrome browser**
Google chrome has better developer tools and it has better integration with Visual Studio code for debugging and running apps. However, using google chrome is completely optional. Use IE if you wish.

**NodeJS LTS version**
Node.js is an open source, cross-platform runtime environment for hosting and serving JavaScript code. You can use Node.js to develop server-side web applications written in JavaScript. The Node.js ecosystem is tightly coupled with npm and task runners such as gulp to provide an efficient environment for building JavaScript-based applications. Node.js is similar to IIS Express or IIS, but includes tools to simplify client-side development.

NodeJS is required for developing SharePoint framework solutions. Download latest one (LTS version) from NodeJS.org.

If you have NodeJS already installed, check that you have the latest version by using node -v. It should return the current LTS version.

Go to nodejs.org and download and install latest LTS version.

**Node Modules – Yeoman and Gulp**
SharePoint client-side development tools use the npm package manager, which is similar to NuGet, to manage dependencies and other required JavaScript helpers. npm is typically included as part of Node.js setup.

Yeoman helps you kick-start new projects, and prescribes best practices and tools to help you stay productive. SharePoint client-side development tools include a Yeoman generator for creating new web parts. The generator provides common build tools, common boilerplate code, and a common playground website to host web parts for testing. Think of it as something similar to Visual Studio project templates.
SharePoint client-side development tools use gulp as the build process task runner to:

* Bundle and minify JavaScript and CSS files.
* Run tools to call the bundling and minification tasks before each build.
* Compile LESS or Sass files to CSS.
* Compile TypeScript files to JavaScript.
* Install both Yeoman and Gulp node modules using npm with following command

> npm install -g yo gulp

**Install Yeoman SharePoint generator**
The Yeoman SharePoint web part generator helps you quickly create a SharePoint client-side solution project (like Visual Studio Project templates) with the right toolchain and project structure.

To install the SharePoint Framework Yeoman generator globally, enter the following command:

> npm i @microsoft/generator-sharepoint

(Note: depending on the tool you could use shorter version of verb. In this example I have just typed “i” instead of the full word “install”)

**Code Editor**
Install Visual Studio Code. It is a free source code editor from Microsoft and it is much lighter than Visual Studio.

**Tool comparison between Traditional Vs. SP Fx development**
To someone who is more used to traditional SharePoint development approach Andrew Connell has explained (here) how SharePoint framework development toolchain compare to the traditional SharePoint development style.

**My Afterthoughts**
There are many new tools in SharePoint Framework and it may feel daunting for experienced SharePoint developer at first. To be up and running, I tried implementing an example hello world web part and followed through from setup, development, debugging to deployment. In the next article, I will talk about building a hello world web part with a few additional observations.