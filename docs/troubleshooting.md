---
id: troubleshooting
title: Common Issues & Questions
---

### Release button is not visible

You might be using a Next-Gen project where the Release feature is not enabled.
Please go to the Project Administration -> Features and enable Releases.

### Sprint button is not visible

In Next-Gen projects, it is possible that Sprint feature is disabled. See above for the same problem
with the Release feature.
If you are using a Classic Project (or using Server or Data Center), the selected board might not support
Sprints or you do not have Manage Sprints permission.

### Sprint creation fails even though I have Manage Sprints permission

The selected board contains more than one project. You need to have Manage Sprints permission
in all included projects.

### I can't find Story Mapping App in the project sidebar

Currently only Software Projects are supported. You won't find the Sidebar item in Business or Jira Service Management projects.

Additionally, you need "Edit Issues" permission in the project in order to use the story mapping features.

### How do I change the epic issue type

(This only applies to the free version)

You can rename the epic issue type in Jira.

If you do, Story Mapping app will ask you for the epic type once. In the free version, there is no
feature to change this later. But if you absolutely need to, you can look at the Projects Entity Properties (you can install the Entity Property App to do this) - then
change the "tech.realigned.project.stmEpicId" property to the new value.

Note that a feature to use arbitrary issue types as epics will be included in the Pro version.