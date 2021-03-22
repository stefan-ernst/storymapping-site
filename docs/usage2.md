---
id: usage2
title: Sprints & Releases
---

### Using sprints

Once you have configured a backlog for the story map, the sprints feature will become available

![Backlog overview](/img/smfree/smetutorial7.png)

By clicking the sprints or releases button, you can quickly switch between the two planning modes.

In sprint planning mode, you will be able to see all open or future sprints of the agile boards.

![Sprints](/img/smfree/smetutorial8.png)

You can drag and drop issues into sprint columns. You can also assign issues to a new epic 
and a new sprint at the same time.

If needed, you can create new sprints directly from the story map. Notice that this might fail if
board permissions are not setup correctly, see [Troubleshooting](/docs/troubleshooting) for more details.

### Planning releases

The release mode works the same way as the sprint mode, here you can also add new releases to the current
Jira project with start and end date.

![Adding a release](/img/smfree/smetutorial9.png)

When dragging an issue to a release swimlane, Story Mapping App will try to set the "Fix Versions"
field of Jira. In the story map, only one release per issue is supported at a time, so the 
previous values will be removed from the "Fix Versions" field when moving an issue.

![Issue in the new release](/img/smfree/smetutorial10.png)
