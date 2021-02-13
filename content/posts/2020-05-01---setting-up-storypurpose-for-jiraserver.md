---
title: Setting up StoryPurpose for JiraServer
date: "2020-05-01T23:46:37.121Z"
template: "post"
draft: false
slug: "setting-up-storypurpose-for-jiraserver"
category: "App"
tags:
  - "Setup"
  - "Help"
description: "StoryPurpose is a jira issue visualization tool. Find instructions to configure jira connection details in this blog post. The current version of the tool support jira server and jira cloud configuration."
socialImage: "/blog/media/jira-manual-setup.gif"
---

StoryPurpose is a jira issue visualization tool. The current version supports classic projects or in Jira Server or Data Center products.

This is not applicable for [next-gen projects](https://confluence.atlassian.com/jirasoftwarecloud/working-with-agility-boards-945104895.html)

![manual setup for jira classic projects](/blog/media/jira-manual-setup.gif)

Depending upon the jira setup in your organization, instructions vary for entering the credentials
Clicking on manual setup opens popup to enter connection details.

## Manual setup for jira server 
1. Select Jira server
2. Enter the jira url (this is the same url you use to access jira in your organization)
3. Enter your organization username
4. Enter your organization password
5. "Verify and save" will cache your credentials in the browser for that session.

## Manual setup for jira cloud 
### Pre-requisite
Make sure you have generated the API Token before hand. For instructions [see here](https://confluence.atlassian.com/cloud/api-tokens-938839638.html)
2. Select Jira server
3. Enter the jira url (this is the same url you use to access jira in your organization)
4. Enter your organization username
5. Enter your organization password
6. "Verify and save" will cache your credentials in the browser for that session.

Now for all subsequent sessions, you will only need to enter the credentials to proceed.
