---
id: storyvsjourneymap
title: User Story vs Journey Map
---

import CheckItem from './components/CheckItem';

We have developed Journey Mapping for Jira alongside Story Mapping for Jira
in order to support the different needs of each process.

Although a journey map and user story map may contain
some of the same pieces, they are used at different points of the process.

A story map is for planning and implementation while a journey map let's you validate
features from a user's perspective and also aims at discovery and understanding of user's requirements.

Therefore, our apps do two very different things. In practical terms:

| Feature        |      Story Mapping for Jira - Free      |   Journey Mapping for Jira |
| ------------- | :-----------: | :-----------: |
| One map for each use case<br /> or scenario     | <CheckItem isX /> |  <CheckItem /> |
| Overview over all issues at once     | <CheckItem /> |  <CheckItem isX /> |
| Uses standard issue types <br />like Epic, Story, etc.    |    <CheckItem />    |   Custom |
| Analyse personas and<br /> their behaviour |   <CheckItem isX />     |    <CheckItem />  |
| Assign Personas to <br /> individual issues |    <CheckItem />     |    <CheckItem isX />  |

## Let's have a look at a simple example

You are building an e-commerce platform and you have two types of users.

### Personas
#### Sean 
Wants to waste no time and searches directly for what he wants.
#### Michael
He likes to browse and is a bit undecided, so he will look through the categories of your shop

### Journey Mapping

In order to satisfy both, your shop software will need to support these two approaches as best as possible.
You should write down each individual approach to using your shop in a journey map for later reference.

Let's quickly look at Michael's Journey:

![Michael's Journey](/img/journey-michael.png)

As you can see, these items are no actionable for your team.
They also go into great detail about Michael's behaviour so you
may not want to represent these as Epics within your backlog.

Journey Mapping for Jira let's you link individual tickets to these steps.
But provides no planning features as it is designed for the discovery phase and planning 
and implementation is best done on the User Story Map.

### User Story Mapping

This is what a simple story map for your shop software could look like:

![Example User Story](/img/story-map-example.png)

As you can see, the epics at the top present a generalized version of the user's actions.
You can add the individual tickets to sprints or releases for planning purpose.

## Conclusion

User Story Mapping and Journey Mapping complement each other very well. 
While the process of journey mapping forces you to look at the overarching process and behaviours or your users.
You can easily build a shared understanding of their personas and requirements.

Story mapping on the other hand will help you implement these processes into your software and prioritze 
which features come first, by giving developers and product managers and easier overview of actionable items.