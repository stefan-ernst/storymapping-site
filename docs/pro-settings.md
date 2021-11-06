---
id: pro-settings
title: Settings
---

The following section explains the many possible settings for your user story map

### Map Configuration

#### Epic Type

It is possible to change the epic issue type on the fly. Please note that this does
not alter the currently added issues. It only affects which issue you can add to the steps row.

<img src="/img/EpicSelect.png" style={{width:"250px"}} alt="Selecting Issue Type" />

If you had previously selected the Jira Epic issue type here and then make a change for a non-standard
epic issue type, the linking of the map will change - as will the filter for the story map. 
This can be confusing for users, so please be aware of this. Certain issues that were
not linked manually to the story map before, for example issues belonging to an epic that
were simply automatically imported into the story map, will disappear.

The same can happen if you have the Jira standard Epic selected and disable the "Epic Link" toggle.

#### Jira Issue Linking

When using a custom issue type, Story Mapping app can automatically maintain issue links for you.
You can select the link type from the drop-down that appears when Epic linking is disabled.

<img src="/img/LinkSelect.png" style={{width:"250px"}} alt="Selecting Issue Type" />

While updating the links between issues, Story Mapping app will remove all other uses of this 
link type from the issue, so please select a link type specifically for this purpose.

### Backlog Configuration

You can select a new Jira agile board here at any time. The agile board will be used to 
gather sprint and release information as well as to gather unassigned issues to form the
backlog of the story map.

Additionally, the sorting and filter of the backlog can be controlled here. 

### Field Configuration

#### Epic Fields

You can display statistics for the Epic here, for example, the number of issues in the Epic, which
state these issues have, the percentage of story points done or simply the percentage of issues done in total.

#### Swimlanes

Configure whether to either display the number of story points in each status or the number of issues in each status.

#### Issue Fields

You can select from a variety of fields to display in the story map. Story Mapping app
supports all text and number fields, as well a selection of multi- and single-select fields.

You can also display many Jira standard fields like Labels, Assignee, Reporter, etc.

### Display Options

#### Column coloring

Use the color selected for the epic to color the entire column. This helps separate columns visually.

#### Show goal swimlane

Display or hide the activity / goal swimlane of the story map. This will not affect any existing data.

#### Scrollable header (Cloud only)

The header can scroll down to the bottom of the story map. This is useful for large maps.

#### Hide Epic Issue Key

Hide the epic issue key in the story map. This can help with readability.

#### Show tool icons

Display all icons by default.

#### Show completed sprints & releases

These options let the story map display completed sprints and releases.

