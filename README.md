# bootcamp module 3

## live link URL

https://jizhang80.github.io/bootcamp-jz-module3/

## function introduction

1. After click the "Generate Password", it will be asked the length of the password.
    * if the length of the password less than 8 or greater than 128, or user input non-number string, then this question will repeat.
2. After that, it will be asked several YES/NO questions about Character Types. 
    * If all the questions is "Cancel", then it will response an "Alert" that "At least has one Character types", then ask all the questions again.
3. Make sure the final password string has at least one of each choosen charactor types.
    * For example: if user want to have lowercase and uppercase in the password string, the output string has to have at least one lowercase and at least one uppercase in the password string.

## screenshot

![Screenshot](./screenshot.jpg)

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Grading Requirements
### Technical Acceptance Criteria: 40%
* Satisfies all of the above acceptance criteria plus the following:  
    * The Challenge should not produce any errors in the console when you inspect it using Chrome DevTools.
### Deployment: 32%
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository that contains application code.
### Application Quality: 15%
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a quality README file with description, screenshot, and link to deployed application.