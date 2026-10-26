# Screenshot Guide for Merge Conflict Activity

**Student:** Pearl Paulene S. Sulana  
**Activity:** Module 2 – Lesson 3–4, Slide 18

---

## Required Screenshots for Submission

This document outlines the key screenshots you should capture to document the merge conflict activity.

### Screenshot 1: Initial Repository State
**What to capture:**
- Command: `git log --oneline --all --graph`
- Shows the initial state of the repository before creating branches

**Expected output:**
```
* c9e2039 Fixed email overflow in contact section
* c61f8d1 Updated focus to system analysis and documentation
* fea80e1 Initial commit: Added CV webpage and README
```

---

### Screenshot 2: Branch Creation - Branch-A
**What to capture:**
- Command: `git checkout -b branch-a`
- Command: `git branch`

**Expected output:**
```
Switched to a new branch 'branch-a'

* branch-a
  main
```

---

### Screenshot 3: Branch-A Changes
**What to capture:**
- The modified README.md file showing Branch-A changes
- Command: `git diff` (before committing)
- Or open README.md in a text editor

**Key changes to show:**
- Project Status: Completed
- Last Updated: September 2026
- Added technologies: JavaScript, Bootstrap Framework

---

### Screenshot 4: Branch-A Commit
**What to capture:**
- Command: `git add README.md`
- Command: `git commit -m "Branch-A: Add project status and expand technologies list"`
- Command: `git log --oneline`

**Expected output:**
```
[branch-a ca486d5] Branch-A: Add project status and expand technologies list
 1 file changed, 5 insertions(+)

ca486d5 Branch-A: Add project status and expand technologies list
c9e2039 Fixed email overflow in contact section
c61f8d1 Updated focus to system analysis and documentation
fea80e1 Initial commit: Added CV webpage and README
```

---

### Screenshot 5: Branch Creation - Branch-B
**What to capture:**
- Command: `git checkout main`
- Command: `git checkout -b branch-b`
- Command: `git branch`

**Expected output:**
```
Switched to branch 'main'
Switched to a new branch 'branch-b'

  branch-a
* branch-b
  main
```

---

### Screenshot 6: Branch-B Changes
**What to capture:**
- The modified README.md file showing Branch-B changes (DIFFERENT from Branch-A)
- Command: `git diff` (before committing)

**Key changes to show:**
- Development Phase: In Progress
- Version: 1.0
- Added technologies: CSS3 (with Flexbox and Grid), Mobile-First Design

---

### Screenshot 7: Branch-B Commit
**What to capture:**
- Command: `git commit -m "Branch-B: Add development phase and update CSS description"`
- Command: `git log --oneline --all --graph`

**Expected output showing diverged branches:**
```
* f323026 Branch-B: Add development phase and update CSS description
| * ca486d5 Branch-A: Add project status and expand technologies list
|/  
* c9e2039 Fixed email overflow in contact section
* c61f8d1 Updated focus to system analysis and documentation
* fea80e1 Initial commit: Added CV webpage and README
```

---

### Screenshot 8: MERGE CONFLICT! (Most Important)
**What to capture:**
- Command: `git merge branch-a`

**Expected output:**
```
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

---

### Screenshot 9: Conflict Status
**What to capture:**
- Command: `git status`

**Expected output:**
```
On branch branch-b
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
	both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

---

### Screenshot 10: Viewing the Conflict Markers
**What to capture:**
- Open README.md in a text editor or use `type README.md`
- Show the conflict markers clearly

**Must show:**
```markdown
<<<<<<< HEAD
**Development Phase:** In Progress  
**Version:** 1.0

## Technologies Used
- HTML5
- CSS3 (with Flexbox and Grid)
=======
**Project Status:** Completed  
**Last Updated:** September 2026

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Bootstrap Framework
>>>>>>> branch-a
```

---

### Screenshot 11: Resolved File
**What to capture:**
- The README.md file AFTER resolving the conflict
- Show that all conflict markers are removed
- Show the combined content

**Should show:**
```markdown
**Project Status:** Completed  
**Version:** 1.0  
**Last Updated:** September 2026

## Technologies Used
- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript
- Bootstrap Framework
- Responsive Web Design
- Mobile-First Design
- GitHub Pages
```

---

### Screenshot 12: Committing the Resolution
**What to capture:**
- Command: `git add README.md`
- Command: `git commit -m "Resolve merge conflict: Combine project info from both branches"`

**Expected output:**
```
[branch-b d4b0f62] Resolve merge conflict: Combine project info from both branches
```

---

### Screenshot 13: Final Git Log Graph
**What to capture:**
- Command: `git log --oneline --all --graph`

**Expected output showing merged branches:**
```
*   d4b0f62 Resolve merge conflict: Combine project info from both branches
|\  
| * ca486d5 Branch-A: Add project status and expand technologies list
* | f323026 Branch-B: Add development phase and update CSS description
|/  
* c9e2039 Fixed email overflow in contact section
* c61f8d1 Updated focus to system analysis and documentation
* fea80e1 Initial commit: Added CV webpage and README
```

---

### Screenshot 14: Push to GitHub
**What to capture:**
- Command: `git push origin main`
- Command: `git push origin branch-a`
- Command: `git push origin branch-b`

**Expected output:**
```
To https://github.com/pearlsulana/pearl-cv-portfolio.git
   c9e2039..d4b0f62  main -> main

To https://github.com/pearlsulana/pearl-cv-portfolio.git
 * [new branch]      branch-a -> branch-a

To https://github.com/pearlsulana/pearl-cv-portfolio.git
 * [new branch]      branch-b -> branch-b
```

---

### Screenshot 15: GitHub Repository
**What to capture:**
- Open https://github.com/pearlsulana/pearl-cv-portfolio in a web browser
- Show the branches dropdown with all three branches visible
- Show the commit history
- Show the resolved README.md file

---

## How to Take Screenshots

### Windows:
1. **Full Screen:** Press `Windows Key + Print Screen`
2. **Snipping Tool:** Press `Windows Key + Shift + S`
3. **Specific Window:** Press `Alt + Print Screen`

### Organizing Screenshots:
1. Create a folder named "Merge_Conflict_Screenshots"
2. Name each screenshot clearly:
   - `01_initial_repository.png`
   - `02_branch_a_creation.png`
   - `03_branch_a_changes.png`
   - etc.

---

## Commands to Run for Screenshots

**SETUP:**
```powershell
cd C:\Users\Administrator\Downloads\Project\pearl-cv-portfolio
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

**Screenshot 1:**
```powershell
git log --oneline --all --graph
```

**Screenshot 2:**
```powershell
git checkout branch-a
git branch
```

**Screenshot 3:**
```powershell
git show ca486d5
```

**Screenshot 4:**
```powershell
git log --oneline
```

**Screenshot 5:**
```powershell
git checkout branch-b
git branch
```

**Screenshot 6:**
```powershell
git show f323026
```

**Screenshot 7:**
```powershell
git log --oneline --all --graph
```

**Screenshot 8-10:** (To recreate the conflict view)
```powershell
# View the merge commit to see how conflict was resolved
git show d4b0f62
```

**Screenshot 11:**
```powershell
git checkout main
type README.md
```

**Screenshot 12:**
```powershell
git log --oneline --all --graph --decorate
```

---

## Submission Checklist

- [ ] Screenshot 1: Initial repository state
- [ ] Screenshot 2: Branch-A creation
- [ ] Screenshot 3: Branch-A changes
- [ ] Screenshot 4: Branch-A commit
- [ ] Screenshot 5: Branch-B creation
- [ ] Screenshot 6: Branch-B changes
- [ ] Screenshot 7: Branch-B commit and diverged branches
- [ ] Screenshot 8: Merge conflict error message
- [ ] Screenshot 9: Git status showing conflict
- [ ] Screenshot 10: Conflict markers in file
- [ ] Screenshot 11: Resolved file without conflict markers
- [ ] Screenshot 12: Commit resolution
- [ ] Screenshot 13: Final git log graph
- [ ] Screenshot 14: Push commands
- [ ] Screenshot 15: GitHub repository view
- [ ] MERGE_CONFLICT_ACTIVITY_REPORT.md document
- [ ] This SCREENSHOT_GUIDE.md document

---

**Note:** All the work has been completed. You can now take screenshots by running the commands listed above.

**Repository URL:** https://github.com/pearlsulana/pearl-cv-portfolio

---

**Prepared by:** Pearl Paulene S. Sulana  
**Date:** September 29, 2026
