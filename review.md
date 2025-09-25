# SDLC 

what is SDLC?
software development lifecycle = the process/steps we take when we develop software 

design 
  requirements gathering
  analyzing
development
    development
    test 
    uat
delivery
    release 
    maintenance 

methodology = a set of development concepts and practices; category of development concepts and practices; structured framework to guides the software design process 

big bang = jump straight into project development 

waterfall = managers sign off on each and every stage; expensive to go back to previous steps; common in government and healthcare sectors; heavy documentation; 
complete a phase before moving to the next; will follow the three phases (or 8 formal steps) of sdlc; requirements are fixed early in development; 
limited customer involvement after development has begun; long development process; 

agile = is NOT structured rules; agile IS a mindset; agile IS a set of values; 

examples of agile frameworks = scrum, kanban, lean, agile SAFe, xp programming

agile ceremonies = standup, sprint retrospective


plan development work within agile = user stories, user epics, story points, velocity

# Git and GitHub

git = version control system (VCS) that monitors changes in files; can roll back to previous version of file if there is an error; allows multiple developers to work together effectively; 
we can branch our codebase to different versions and then merge those branches; we would often use branching to work on new features without affecting the production branch; 
works with various cloud providers like github, bitbucket, azure devops; 

github = cloud platform and it works with git; used for hosting git repositories; 


local - git init 
    - working directory - git add moves items to staging area
    - staging area - git commit it will be committed 
    - saves our commit to the local commit history 
    - when we make a commit, a snapshot/copy of the project, used to preserve the file history  
    - git push will push commit history to remote 
remote 
    - stores my commit history with those snapshots of the repo 

# HTML

HTML - hyper text markup language; markup language that tells browsers what to display and how to organize the content; 

what is a markup language: used to structure a page; no interactivity on its own, we would need JavaScript for that

element = closing tag, opening tag; building blocks of the page; defines the structure and content of the page; 

tag = the syntax we use to create an element; self-closing tags vs non-self closing;

- semantic tags = used by screen readers to aid visually impaired people; they are self-describing, e.g. ```<header>```

attribute = additional information on the html element; alter the elements behavior, styling, and identify the element

head = defines the metadata which improves our search engine optimization (SEO)
body = contains the content the user sees 

# CSS

what is css? = cascading style sheets - used to style content on the webpage and we can include CSS either inline, internal, or external. 

inline = directly applied on element/tag
internal = applied within <style> element in html 
external = separate css file 

inline > internal > external -- order of precedence 

types of selectors:
element = p { } 
class = .className { } 
id = #idName { }
attribute = p[attributeName="someValue"] { }
pseudo-class selector = button:hover { }
pseudo-element selector  = p::first-letter { }
combinator selector = div p { }, div > p { }

What is the box model? = control the space between elements; uses margin, padding, border, content; 

padding = space between border and content 
margin = space between one element and another 

div {
    margin: 10px;   --- all sides set to 10px
}

div {
    margin: 10px 20px;  --- top and bottom 10px; left and right 20 px
}

div {
    margin: 10px 20px 10px 20px; top > right > bottom > left 
}

what is flexbox? = used to design the layout in one dimension by creating a flex container, and positioning the flex items within. 

commands to use within the flex container:
flex-direction = row (default), column
align-items = Y-axis (when row layout, X-axis when set to column)
justify-content = X-axis (when row layout, Y-axis when set to column)

