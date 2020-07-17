$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admin.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the Elearning page",
  "description": "I want to create training session",
  "id": "this-feature-is-to-automate-the-elearning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ELSC_019"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Take me to Elearning page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;take-me-to-elearning-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@GotoElearningPortal"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter userid \"admin\" and password \"admin@123\" to login as admin",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 38
    }
  ],
  "location": "Admin_Stepdifinition.i_open_the_browser_and_enter_the_url(String)"
});
formatter.result({
  "duration": 11842273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin@123",
      "offset": 35
    }
  ],
  "location": "Admin_Stepdifinition.enter_userid_and_password_to_login_as_admin(String,String)"
});
formatter.result({
  "duration": 6298682800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Take me to Admin page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;take-me-to-admin-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@GotoAdminpage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I open the sessions categories list",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Add category icon",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Valid credential \"Testing\" in Category name textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Add category button",
  "keyword": "And "
});
formatter.match({
  "location": "Admin_Stepdifinition.i_open_the_sessions_categories_list()"
});
formatter.result({
  "duration": 5488529900,
  "status": "passed"
});
formatter.match({
  "location": "Admin_Stepdifinition.i_click_on_Add_category_icon()"
});
formatter.result({
  "duration": 800025700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 24
    }
  ],
  "location": "Admin_Stepdifinition.enter_Valid_credential_in_Category_name_textbox(String)"
});
formatter.result({
  "duration": 174756100,
  "status": "passed"
});
formatter.match({
  "location": "Admin_Stepdifinition.click_on_Add_category_button()"
});
formatter.result({
  "duration": 1306122700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Take me to Session page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;take-me-to-session-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@GotoSessionList"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the Session List link",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Add a training session icon",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Enter valid credentials in Session name textbox \"selenium training session 73\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select created in sessions category list box \"Testing\"",
  "keyword": "And "
});
formatter.match({
  "location": "Admin_Stepdifinition.i_open_the_Session_List_link()"
});
formatter.result({
  "duration": 3712886700,
  "status": "passed"
});
formatter.match({
  "location": "Admin_Stepdifinition.i_Click_on_Add_a_training_session_icon()"
});
formatter.result({
  "duration": 5007634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium training session 73",
      "offset": 51
    }
  ],
  "location": "Admin_Stepdifinition.i_Enter_valid_credentials_in_Session_name_textbox(String)"
});
formatter.result({
  "duration": 3938720200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 46
    }
  ],
  "location": "Admin_Stepdifinition.select_created_in_sessions_category_list_box(String)"
});
formatter.result({
  "duration": 2340252900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Take me to Course Selection page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;take-me-to-course-selection-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@GotoCourseSelection"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I Open Course selection page and select the course",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter the student name \"Sunil\" and finish the session creation",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Finally I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Admin_Stepdifinition.i_Open_Course_selection_page_and_select_the_course()"
});
formatter.result({
  "duration": 1994300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunil",
      "offset": 26
    }
  ],
  "location": "Admin_Stepdifinition.i_enter_the_student_name_and_finish_the_session_creation(String)"
});
formatter.result({
  "duration": 5817762500,
  "status": "passed"
});
formatter.match({
  "location": "Admin_Stepdifinition.finally_I_close_the_browser()"
});
formatter.result({
  "duration": 1909305200,
  "status": "passed"
});
});