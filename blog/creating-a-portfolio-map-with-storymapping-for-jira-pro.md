---
title: Creating a Portfolio Map with Story Mapping for Jira - Pro
author: Stefan Ernst
author_title: Co-creator of Story Mapping App
tags: [story-mapping,pro-edition,portfolio-management]
description: Today Jira is not only used by software teams but it can be really useful even for portfolio management. Learn how you can create a simple portfolio map using Story Mapping for Jira - Pro.
hide_table_of_contents: false
---
import PortfolioMap from '../static/img/blog/PortfolioMap.png'


Atlassian Jira has been used by software teams around the world for decades - and with
growing demand for digital task management solutions that integrate well, teams have found
that they can use Jira for even more disciplines in product or service delivery.
One of these is the portfolio management which can be done in
Jira in various ways. Did you know you can use a tool as simple as
a story mapping tool to create a high level portfolio map across multiple projects?
Let's take a look.

<!--truncate-->

On a high level portfolio management controls delivery over 
multiple teams, projects, initiatives or programs. In practice,
portfolio managers in Jira often deal with the limitations 
of Jira's default functionality. You can't put issues in the hierarchy 
above the built-in Epic issue type.
One way to circumvent this is by using issues links to connect issues
and then use either a third party tool like Jira Align or one of
the various Gantt-Chart or Roadmap-Apps from the Atlassian Marketplace
to build a high level overview over multiple Jira projects and Epics.

Another way to achieve this goal is to start simple - why not build a
simple map of your initiatives and link either Epics from projects or
other representations of high level planning items to these initiatives?
We do this by creating a new project and customizing it's issue types.

If you have a team-managed project in Jira, you can do this
with project administrator permissions. If you have a company managed project
or your lack the required administrative rights, you can ask your Jira
administrator to create issue types for you. In this example we will
use 3 issue types according to SAFe principles.

- Portfolio Epic
- Enabler
- Feature

You can name these any way you want or rename them later if needed.


<img src={PortfolioMap} style={{width:490,height:377}} alt="Portfolio Map Example" />


