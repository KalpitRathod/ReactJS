# Git & GitHub Quick Reference Guide (Expanded)

This guide is a practical, copy‑paste‑friendly reference for everyday Git + GitHub usage, with **what**, **why**, and **when** explanations.

---

## 1. Initial Setup (New Repository)

Use this when your project folder is **not yet tracked by Git**.

```bash
git init
```

Initializes a new Git repository by creating a `.git` folder.

```bash
git config --global init.defaultBranch main
```

Sets `main` as the default branch name for all new repositories.

```bash
git add .
```

Stages all files so Git knows what to track.

```bash
git commit -m "Initial commit"
```

Creates the first snapshot of your project.

---

## 2. Connecting to GitHub (Remote Repository)

Link your local repo to GitHub:

```bash
git remote add origin <PASTE_YOUR_REPO_URL_HERE>
```

`origin` is just a nickname for the remote GitHub repository.

Check the connection:

```bash
git remote -v
```

Shows fetch & push URLs.

If GitHub already has commits (README, license, etc.):

```bash
git pull origin main --allow-unrelated-histories
```

Merges GitHub history with your local history.

Push and set upstream (do this once):

```bash
git push -u origin main
```

After this, you can just run `git push`.

---

## 3. Day‑to‑Day Workflow

### Typical Flow

```bash
git status
git add .
git commit -m "Describe what changed"
git push
```

### Command Reference

| Action          | Command                        | Explanation                               |
| --------------- | ------------------------------ | ----------------------------------------- |
| Check status    | `git status`                   | See modified, staged, and untracked files |
| View history    | `git log`                      | Shows commit history                      |
| Compact history | `git log --oneline`            | One commit per line                       |
| Stage file      | `git add file.js`              | Stage specific file                       |
| Unstage file    | `git restore --staged file.js` | Remove from staging                       |
| Discard changes | `git restore file.js`          | Revert to last commit                     |

---

## 4. Branch Management

### Create & Switch Branch

```bash
git checkout -b feature-login
```

Creates and switches to a new branch.

### List Branches

```bash
git branch
```

Current branch is marked with `*`.

### Switch Branch

```bash
git checkout main
```

### Delete Branch

```bash
git branch -d feature-login
```

Deletes local branch (safe delete).

---

## 5. Merging & Pull Requests

### Merge Locally

```bash
git checkout main
git pull origin main
git merge feature-login
git push origin main
```

### If Merge Conflict Happens

1. Open conflicted files
2. Fix conflict markers `<<<<<<`
3. Save file
4. Run:

```bash
git add .
git commit
```

---

## 6. Pull, Fetch & Rebase

### Pull (Fetch + Merge)

```bash
git pull
```

### Fetch Only

```bash
git fetch origin
```

Downloads changes without merging.

### Rebase (Clean History)

```bash
git pull --rebase
```

Applies your commits on top of remote commits.

---

## 7. Undoing Mistakes (Very Important)

### Undo Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Delete Changes)

```bash
git reset --hard HEAD~1
```

⚠️ Dangerous: deletes work.

### Fix Commit Message

```bash
git commit --amend
```

---

## 8. Stashing (Temporary Save)

Save work without committing:

```bash
git stash
```

Restore stashed work:

```bash
git stash pop
```

List stashes:

```bash
git stash list
```

---

## 9. Tags & Releases

Create a version tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Used for releases and deployments.

---

## 10. Troubleshooting & Fixes

Rename branch to main:

```bash
git branch -M main
```

Delete remote branch:

```bash
git push origin --delete branch-name
```

Fix divergent branch warning:

```bash
git config pull.rebase false
```

Reset local branch to match remote:

```bash
git reset --hard origin/main
```

---

## 11. Best Practices

* Commit small, meaningful changes
* Write clear commit messages
* Pull before you push
* Never commit secrets (`.env` files)
* Use branches for features & experiments

---

## 12. Common Commit Message Style

```text
feat: add user login
fix: resolve payment bug
refactor: clean up auth service
docs: update README
```

---

If you want, I can also:

* Turn this into a **1‑page printable cheat sheet**
* Customize it for **React / Node / CI‑CD workflows**
* Add **real‑world examples with GitHub PR flow**
