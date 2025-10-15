# ACL Challenge

## Part 1

- Create a new application scope called 'Real Estate Management'
- Create two new tables in the application: Property & HOA (Home Owners Association)
- Property should have the following fields:
  - string display field: Street Address
  - string: City 
  - string: State
  - string: zip code
  - string: description
  - reference: HOA
  - string: Property Manager Notes
  - string: HOA Manager Notes
- HOA should have the following fields:
  - string display field: Name
  - number: Rating
  
## Part 2

- Create the following users, group, & roles:
- Users & Group membership:
  - Hal Emmerich - part of the 'HOA Manager' group 
  - Roy Cambell - part of the 'Property Manager' group 
  - James Johnson - part of the 'Real Estate Browser' group 
- Groups & Role assignments: 
  - HOA Manager role assigned to HOA Manager group
    - Full access to HOA records
	- Read access to property records, but not the 'Property Manager Notes' field 
	- Write access to 'HOA Manager Notes' 
  - Property Manager role assigned to the Property Manager group 
    - Full access to Property records, except the 'HOA Manager Notes' field
  - Real Estate Browser role assigned to Real Estate Browser group 
    - Read access to properties and HOA records 
	- Should NOT have access to the 'property manager notes' field or 'HOA manager notes'