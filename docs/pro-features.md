---
id: pro-features
title: Pro Features
---

import EpicSelect from '../static/img/EpicSelect.png'


### Activating the Goals Feature

The goals feature is disabled by default but can easily be enabled when needed. Click
on the 3 dots icon the top right corner and select "Features".

Then toggle "Goal Visibility" to display the swimlane.

Note than you can toggle this on or off later at any time. It will simply hide the goal
swimlane and not affect any data.

### Working with custom timeframes

The Pro Version of Story Mapping app lets you define custom timeframes.
These are meant to provide you with more high level planning capabilities than
short-dated sprint iteration in the basic version.

After installation you can see a button title "Custom" in the top right corner. 
Clicking it, will bring you to the custom planning mode.

![Timeframe View](/img/SME6.webp)

You can drag and drop your issues to these timeframes, freely, without affecting
existing mapping to sprint and version. The timeframe attribute will be saved inside
a property attached the issue.

When removing a timeframe, with issues in it, the issue property will be removed and
the issues will be reset on the board (into the Unassigned section).

### Adding custom fields to cards

Click the context menu in the top right hand corner and select "Settings".
You can add a limited number of built-in fields and custom fields to your cards here.
Supported are mostly fields of type "Text" (for example single line textfields), as well
as users fields.
Story Mapping app also supports the built-in estimation fields, labels and issue links.
If you are missing any field that you want to add, reach out to our support team, we are happy to help.

### Changing the epic issue type

You can change the epic issue type used for the story map at any time.
In theory, it is also possible to mix issue types in the epic row this way (even though
we do not recommend it).
The epic type dropdown can be accessed from the settings menu.

<img src={EpicSelect} style={{width:245,height:232}} alt="Epic Selector" />

When switching the epic type from the default built-in Epic issue type,
the story map will automatically switch to virtual linking which can not be disabled.

### What is virtual linking?

Story Mapping Pro introduces virtual linking to give you more flexibility.
Normally, Jira only lets you link issues to Epics in a 1:n relationship. With virtual linking,
anything can be linked, even Epics to Epics. You can also use this feature if you don't want to actually
change the epic relationships of certain issues or if you want to use a custom issue type instead of Epics.