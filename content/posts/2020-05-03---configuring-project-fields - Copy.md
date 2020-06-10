---
title: Configuring project fields
date: "2020-05-03T22:40:32.169Z"
template: "post"
draft: false
slug: "configuring-project-fields"
category: "APP"
tags:
  - "Setup"
  - "Help"
description: "StoryPurpose can fetch additional information from custom fields. This post has all the instructions to configure issue specific custom fields."
---

StoryPurpose can fetch additional information from custom fields to give a better perspective of the issue in hand. Which information should be visible per project type is customizable.

When any issue is loaded and the related project is not configured earlier, a "Configure now" button is visible in the top menu, clicking on which project configuration section is visible.

![Configure new project](/media/configure-new-project.png)

You can configure project later by dismissing the above notification. 

![Configure existing project](/media/configure-existing-project.png)

Following sections provides details of project configuration. There are primarily 3 sections

- [Hierarchy fields](#hierarchy-fields)
- [Standard issue types](#standard-issue-types)
- [Sub-Task issue types](#sub-task-issue-types)

## Hierarchy fields

Primary goal of StoryPurpose is to help users ensure every story's purpose aligns back to the overall purpose of the organization.
This is achieved by providing a hierarchical view of the story. It starts by presenting organization purpose --> project purpose --> epic purpose --> story purpose.

This hierarchy can further be extended by configuring hierarchy fields. For example, if the current set of epics and stories are part of a bigger initiative or a theme, the StoryPurpose hierarchy can be extended to include these fields as well.

![hierarchy field configuration](/media/hierarchy-field-config.png)

Once configured, the field then appears in the hierarchy of an issue.

![view configured herarchical field](/media/view-herarchical-field.png)

The same hierarchy is then visible on the Purpose section on the details view of the selected issue in the right pane.

## Standard issue types

When working on workbench, where you need to get the holistic view of all the relevant information around the story you are working on, StoryPurpose can be configured to pull relevant information from custom fields by simply selecting those custom fields per issue.

This is done by following the below steps
1. Open project configuration
2. Under _Standard issue types_ section, select the appropriate issue type
3. Selected one or more custom fields that you want to view information for

![standard issue type configuration](/media/standard-issuetype-config.png)

The configured custom fields are now available on the workbench section.

## Sub-task issue types

For the same steps mentioned above. This values are then visible on the task breakup section for the selected issue.

A good example of this could be when reviewing all the related test cases against multiple user stories in a given epic.

Consider following setup
- Standard issuetype: Test Suite
- Subtask issuetype: Test case
- Test Case subtask has following custom fields
   - Test steps
   - Expected behaviour
   - Actual Results

With the above configuration, it then becomes very easy to navigate through all testcases in a testsuite and review details in a single view as against opening multiple tabs otherwise.

![view subtask field](/media/view-subtask-field.png)
