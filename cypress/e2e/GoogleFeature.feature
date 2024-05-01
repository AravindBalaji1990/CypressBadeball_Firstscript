Feature: Validate the google web page title

Background: 
Given User launches the google website

@smoke @regression
Scenario: User valdiates the title of the page
When User gets the title of the page for validation
Then User checks for the textbox in the page

@regression @smoke
Scenario: User validates the url of the page
Then User validates the url of the page

@sanity
Scenario: User validates the data to input the google text field
Then User checks for the textbox in the page
When user input the data "cypress" in the textbox

@regression
Scenario: User validates list of data for a specific step
Then User checks for the textbox in the page
When user input the data in the textbox
|data|
|cypress|
|javascript|

Scenario Outline: User validates the same feature with different set of data
Then User checks for the textbox in the page
When user input the data from example in the textbox '<data>' and '<Language>'

Examples:
|data| Language|
|cypress| javascript|
|selenium| java|
|angular| javascript|