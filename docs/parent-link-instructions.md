---
id: parent-link-instructions
title: Using Advanced Story Maps with the built-in parent link
---

### Basics

Jira offers custom hierarchy settings with Premium plans. You can learn more [here](https://support.atlassian.com/jira-software-cloud/docs/configure-custom-hierarchy-levels-in-advanced-roadmaps/).
In order to use them with Advanced Story Maps, please follow these setup instructions.

### Setup instructions

All nested issue types should be available in the project where you manage your story maps. The reason is that the app checks the available issue types from the project settings and offers these types to create issues from the story map.

Once you have added the issue types to the issue type scheme, there is one more step.

You need to add the field "parent" to all issue screens (view, edit and create screen) for the automatic linking to work. If the field is not on the right screen, then linking will silently fail, and you will not see the hierarchy correctly in a dynamic story map when you reload the page. The issue will be "hidden" to you on a static map since the linking feature is optional.

### Activating the feature

Please go to the admin configuration of Advanced Story Maps and check the "Premium features" toggle. You can now select the
"parent (built-in)" link type in hierarchy settings and the app will maintain the issue connections for you.