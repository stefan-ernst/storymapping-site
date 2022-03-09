---
id: pro-story-mapping
title: Using Story Mapping app
---

### Basics

The first row of the user story map defines the step row. Story Mapping app calls the elements
in this row "Epics" but steps would be the correct term in this context.
You can add issues to this row that have a certain Jira issue type. This is the issue type
you picked on the [setup screen](./pro-setup) of the user story map. You can also change this issue type in the settings.

Under each epic / steps, you can add issues that get associated with your epic.
All these issues appear in a column, that we call the epic column.

You can also add already existing issues to the story map. These issues can be selected from
the "backlog" which is usually an agile board associated with the user story map.

### Organizing user stories

Epics can be re-arranged from left to right or from right to left via drag and drop. You can
re-order them horizontally without doing any change to the issues associated to these epics.

Jira issues can be also reordered or associated to another epic via drag and drop, anywhere on the map.

Issues can not be dropped into the step row as there is a clear separation between the issue types
used.

You can add colors to each step to visually separate them. If you want to, you can also 
go to Settings -> Display and enable all issues in the column to inherit this color, helping
to visually separate them.

### Assigning issues to sprints, releases

If you want to plan sprints or releases, you can do so by selecting the "Swimlanes" dropdown
in the top left corner. If you do not see either the sprint or release options, the board
associated to your story map, may not support this feature. See [troubleshooting](./troubleshooting) for details.

When switching the story map to either of these modes, you will see existing
sprints or releases from the underlying agile board. You can also a new swimlane via the button
add the top of the list.

When dragging an issue from either the unassigned swimlane or another sprint / release swimlane,
story mapping app will associate the issue in the background with this sprint or release.
The change happens instantly in the UI, so you can quickly rearrange many issues at once.

### Custom swimlanes

Sometimes, building story maps simply via sprints or releases is not enough. Custom
swimlanes help you with planning either more long term or in dealing with "fuzziness" - for 
example if you don't exactly know when a change can occur. 
Custom swimlanes work with free form text, so you call them something like "Iteration 1", "Iteration 2", etc.

Or you could use "Near term", "Medium term" and so on to do a more rough outline of your product roadmap.

### Estimation

If you board supports estimation via story points, you will see little bubbles with the story point estimate appearing
on the cards. You can click them to change the estimates on the fly. If the swimlanes 
are displaying story point statistics (see [settings](./pro-settings)) these
changes will be reflected in the story point totals displayed for each sprint / release or custom swimlane.

![Story Points Bubble](/img/story-points.png)

### Goals / Activities

Story Mapping app supports a level above the epic / step row, that represents user activities or high level goals
in a story map. Read more on this in our dedicated guide on [Top Level Elements](./top-level-elements).
### Filters / Quick Filters

If you have an agile board associated with the story map, you can find all 
quick filters from this board when you click the filter symbol next to the swimlane drop
down in the top right hand corner. You can activate these filters by clicking them. 

You can also add custom filters by using the filter manager popup, which you can open 
when clicking the "Manage Filters" button.

Filtering will limit the issues being displayed but will not affect the "step / epic" row. 
We suggest adding different story maps when you want to have a different backbone in the story map.


