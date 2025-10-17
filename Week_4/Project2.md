# Project 2

## Platform Overview & Navigation

### Challenge 1 - Users, Groups, and Roles

- Create 2 new users: 'Trainer' and 'Training Manager'
- Create a group called 'Training Team' and add both users 
- Assign the 'itil' role to the group 

## Instance Configuration

### Challenge 1 - Install the Major Incident Management plugin 

- Check whether com.snc.incident.mim is installed.
- If not, install it.
- Write 2–3 sentences explaining how to install plugins, what module to use, etc. 

### Challenge 2 - Customize Logo and Browser Tab Text 

- Set a new company logo for your instance 
- Set the browser tab title to your company name

## Configuring Applications for Collaboration

### Challenge 1 - Customize a Form and Related Lists 

- Customize the incident form, in the default view, to display a new string field called 'AI Summary' - this will hold AI generated meeting notes from stakeholders of the incident 
- We need to see what locations are being affected by our incidents. Add the 'Affected Locations' related list to the decault view on incident records 

### Challenge 2 - Create and Customize a new list view 

- Create a new list view for Incidents called 'Minimal'
- The new list view should include only the following columns in this order: Incident number, caller, the email of the caller's company, priority, state, Assignment group, Assigned To 

### Challenge 3 - Create a filter with a custom tag 

- Create a new tag everyone can use called 'Training' 
- Create a new filter that everyone can use called 'Training Incidents' it should only show incidents that have our 'Training' tag

### Challenge 4 - Create a new form template 

- Create a new form template for incidents called 'Training' 
- The new form template should auto-populate the following fields/values:
  - Category = Inquiry/Help
  - Short Description = 'Training Question'
  
## Self-Service and Automation

### Challenge 1 - Create a new knowledge base and article 

- Create a new knowledge base called 'Training Knowledge Base' 
- Set ownership to 'Abel Tutor' 
- Create the first article 'How to create a quiz' 

## Database Management and Platform Security 

### Challenge 1 - Create a custom application and table 

- Create a new application in ServiceNow Studio called 'Training Content Management' 
- Create two new tables in the application called 'Unit' and 'Topic'
- For unit, add the following fields:
  - String: name, choice: type (options: Programmatic, Declarative)
- For topic, add the following fields:
  - String: name, reference: Unit, string: topic body 

### Challenge 2 - Create and manage roles & ACLs 

- Create 2 roles in our 'Training Content Management' application
- Create ACls assigned to the roles:
  - Content Manager - read/write/create/delete on units and topics 
  - Content Contributer - read/write on units and topics 

### Challenge 3 - Import Set 

- In your own words, write 3-4 sentences explaining Import sets, transform maps, import set tables, etc. 

### Challenge 4 - Explain the CSDM

- In your own words, write a short essay on the CSDM. You should include: what it is, why its useful, and how it is structured. 2-3 paragraphs is fine. 

### Challenge 5 - Explain the Security Center & Shared Responsibility Model

- In your own words, write a short paragraph explaining the purpose of the Security Center and the Shared Responsibility Model. 

