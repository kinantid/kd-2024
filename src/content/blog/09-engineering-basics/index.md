---
title: "Engineering basics"
description: "Reminders for myself, a designer learning software engineering"
date: "08/30/24"
draft: false
---

As daunting as the task is, ask yourself: How can I do this?

Checklist when things don't work

- Problems - any import, type errors, something else?
- Check that your dependencies are up to date, and restart running processes
- Run eslint and pre-commit hooks
- Restart the TS server
- Uninstall and reinstall dependencies
- Restart the IDE
- Ask a code-specific GPT about the different approaches to debug this based on the context of your codebase structure, languages used, package manager
- Restart your computer


Principles
- DRY - Don't Repeat Yourself. If you're reusing something, make a modular/referenceable piece of code for it, instead of hard coding it. 
- If it doesn't work, break it down - strip it back to the simplest version and build the complexity back up layer by layer. This helps with debugging too
- Automate tests, leave things better than you found them

Shortcuts
- Command+D to edit multiple instances at once