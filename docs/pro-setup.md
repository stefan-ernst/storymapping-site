---
id: pro-setup
title: First steps
---

import Setup1 from '/static/img/setup1.png'

After installation, Story Mapping app will be available in 
all Software projects (Business projects are not supported at this time).

See the [Administrators Guide](./pro-admin-guide) on how to only enable the app on certain projects.

The app will first redirect you to the [overview screen](./overview) of a project, where you can
add and manage story maps. 
The app attaches user story maps to projects. However, this does not mean that they 
are limited in this way. You can add issues from any project and configure boards with 
multiple projects to use as backlog for the story map. 

### Adding a new story map

You can create new story map by clicking the button in the top right corner.

The welcome assistant will open - where you can specify a name for the story map. You can
then define which issue you want to use for the activity row of the story map. See our best practice guide
that describes the structure of a user story map.
If you leave this field empty, the map will either (a) pick the standard epic issue type or (b) ask again
when opening the map if the standard epic type is not available in your project.

<img src={Setup1} style={{width:'450px'}} />

Lastly, you can select an agile board to use as a backlog. This step is **optional**.
You can either select a board later or add the issues manually to the story map if you do not
want to use Jira Software features or only have a Jira Core license.

### Importing Issues

The welcome assistant lets you import issues with the selected issue type automatically, 
either from the current project or - if you have selected one - from the agile board.

This way for example, existing epics and all issues within those epics will be imported into
the story map. Please beware that it is discouraged to manage the same issues from multiple story maps.