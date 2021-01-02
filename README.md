# budget-subcategory-script
budget-subcategory-script is a Google Apps (Sheets) script that enables the user to populate sub-category values based on user input.

## Description
This script makes it possible to have dependent drop-down selectors for multiple rows within Google Sheets. These drop-down selectors allow me to automatically total sub-categories within my monthly budget.

## Usage
- Created a named range for each category you'd like. This range should include plain-text names of the sub-categories.
- Create a category column and a sub-category column directly to the right of the category column. (column names do not matter)
- Add data validation to your category column to create a drop-down selector of categories in each row (your named ranges).
- Select Tools -> Script Editor, and paste in the script.
- Follow the prompts to authenticate.
- Done!

## Contributing
I am currently not seeking any outside contributors for this project, as it is complete and small. 

## Roadmap
I've considered adding logic to allow this script to validate values as well as add QoL features. However, I am not currently working on this project.
