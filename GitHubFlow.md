GitFlow Branching Strategy
Two Long Branches:
•	Main: Production ready code 
•	Feature: Created off Main branch for each feature added to project

Feature Branch Workflow
1.	Create branch for new feature: git checkout –b feature_name
    a.	feature_name should be a descriptive title (i.e. navigation_bar_component, portfolio_layout, home_port-prev_component)

2.	Write code, adding/committing as usual to local
    a.	Final Feature Ready Commit: git commit –m “Feature Ready”

3.	Regularly push work to remote: git push origin feature_name
    a.	Must push before creating a pull request

4.	Open pull request: gh pr create --assignee “@me” --base main --head feature_name
    a.	Default --head is current branch
    b.	Can add title and body to pull request
        i.	--title “Pull Request Comment Title”
        ii.	--body “Pull Request Comment Body”

5.	Code can be reviewed, tested, etc.

6.	When production ready, merge feature_name back into main
    a.	Switch to main branch: git checkout main
    b.	gh pr merge feature_name -d -s 
        i.	without argument defaults to current branch
        ii.	-d deletes local and remote branch after merge
        iii.	-s squashes the commits into one commit and merge into base branch
        
7.	Pull remote main to local main to update local
    a.	git pull origin main
    b. npm run deploy <-- to update gh-pages branch (recreates it I think)

8. My calendar-appt-apt is getting an error after pulling remote main to local (step 7)
    a. "Error: ENOENT: no such file or directory, open 'D:\Web          Dev\Projects\calendar-appt-app\styles\instructorDash.scss'"
    b. try 'npm update'