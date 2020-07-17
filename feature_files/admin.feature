@ELSC_019
Feature: This feature is to automate the Elearning page
  I want to create training session

  @GotoElearningPortal
  Scenario: Take me to Elearning page
    Given I open the browser and enter the url "http://elearningm1.upskills.in/"
    Then enter userid "admin" and password "admin@123" to login as admin

  @GotoAdminpage
  Scenario: Take me to Admin page
    Given I open the sessions categories list
    Then I click on Add category icon
    Then Enter Valid credential "Testing" in Category name textbox
    And Click on Add category button

  @GotoSessionList
  Scenario: Take me to Session page
    Given I open the Session List link
    Then I Click on Add a training session icon
    Then I Enter valid credentials in Session name textbox "selenium training session"
    And select created in sessions category list box "Testing"
    
  @GotoCourseSelection
  Scenario: Take me to Course Selection page
  Given I Open Course selection page and select the course
  Then I enter the student name "Sunil" and finish the session creation
  Then Finally I close the browser
    
    
    
