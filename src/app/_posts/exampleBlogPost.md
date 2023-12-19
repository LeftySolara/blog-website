---
title: "Git Basics"
status: "draft"
date: "2023-12-19T06:10:00.222Z"
url: "git-basics"
author:
  name: Julianne Adams
---

Git is one of the world's most popular version control systems. Today we'll be discussing the basics of this system, why it's useful, and how to use it at a basic level. This article is for anyone who is new to git or wants to refresh their knowledge.

Note that git is primarily used via the command line, though GUI frontends for it do exist. Here we'll only be looking at the command line interface.

## What is Version Control?

In software development, _version control_ refers to a system that allows developers to track and control changes made to their code. While that is the most basic function, it's also used for a few other things, such as:

- Reverting changes made to code
- Resolving conflicts that occur when multiple people edit the same files
- Keeping different versions of a project available at once

So, why is this useful? As an example, imagine you're working on a group project in school. You write a document and send it to the rest of the group in a file called `project.txt`. Another member of your group makes edits and sends a new copy called `project_bob_edits.txt`, while the third member sends their own edited copy called `project_alice_edits.txt`. In this case, both Bob and Alice have edited the same parts of the document. The group will have to come together and decide whose changes should be kept. This repeats every time someone makes a change to the document.

With a version control system in place, there is one source of truth and everyone's changes are recorded in it. This allows the group to easily see all the changes in one place and decide what stays and what goes. No more having to send separate files to each other.

If working alone, version control can still be useful. Many of us have worked on documents and saved multiple copies named `document_v1.txt`, `document_v2.txt`, and `document_v3.txt`. With version control, there is only one file `document.txt` and all the changes are saved in the system. At any time, you can go into the system and revert to a specific version without having to keep multiple copies around.

## Enter Git

[Git](https://git-scm.com/) is a piece of version control software. It was originally created by Linus Torvalds to support the development of the Linux kernel. It allows developers to do all the cool things mentioned above, plus much more.

## Installation

To install git, select your operating system on the [downloads page](https://git-scm.com/downloads) and follow the instructions. For Linux users, this usually means installing the `git` package using you package manager. On MacOS, you can use `brew` or simply download the binary installer. Windows users can download a 32 or 64 bit installer file or a portable version.

## Basic Configuration

Before you can use git, you'll have to set a name and email address. This is because every change saved in the system is tied to a user, and users are identified by their name and email.

To set your email address, simply enter the following command in your terminal:

```bash
git config --global user.email <your email address>
```

And to set your name:

```bash
git config --global user.name <your name>
```

The name can be your real name or a username/alias. Just remember that whatever you enter will be attached to every change you save to git.

## Our Example Code

For the rest of this article, we'll be using the following Python code as our example that we will be using with git:

```python
count = 0

for i in range(0, 10):
    count += 1

print(f"count: {count}")
```

Which prints the following output:

```
count: 10
```

If you want to follow along, save this code in a file called `example.py` and put it into a directory called `my_repo`.

## Creating Your First Repository

A git _repository_ (also called a _repo_) is a place where you can store files and control the changes made to them. This is usually just a directory stored locally on your computer. You'll usually want to create a separate repo for each project you're working on. There are cases where multiple projects are saved under one repository. This is called a _monorepo_ and is beyond the scope of this article.

The repository directory is where you will run your git commands. To create a repository inside the `my_repo` directory, simply `cd` into that directory and run the following command:

```
git init
```

And that's it! You've created your first git repository.

## Your First Commit

The first thing you'll do with your shiny new repository is add files to it. Note that just because a file is saved in the repository's directory, that doesn't mean it's saved in the repository itself. In other words, the file exists in the directory but its changes are not being tracked yet.

Let's add our `example.py` file to the repository. First, run this command:

```bash
git status
```

You should see something like this:

```bash
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	example.py

nothing added to commit but untracked files present (use "git add" to track)
```

Let's go through this line-by-line:

**Line 1**: We can ignore this part for now. Branches will be discussed later in this article.

**Line 3**: This is saying that no changes have been saved in the repository yet. A _commit_ is a snapshot of the saved files at a specific point in time. We'll talk more about commits soon.

**Lines 5-7**: This is git telling us that our `example.py` file is not being tracked yet. It also gives us a hint that we need to use the `git add` command to set up tracking.

**Line 9**: This just means that we aren't saving any changes at the moment and that there are files in the directory that aren't being tracked yet.

