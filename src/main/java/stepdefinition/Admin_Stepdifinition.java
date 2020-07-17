package stepdefinition;

import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Admin_Stepdifinition {

	static WebDriver driver;
	

	@Given("^I open the browser and enter the url \"([^\"]*)\"$")
	public void i_open_the_browser_and_enter_the_url(String url) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
	}

	@Then("^enter userid \"([^\"]*)\" and password \"([^\"]*)\" to login as admin$")
	public void enter_userid_and_password_to_login_as_admin(String arg1, String arg2) throws Throwable {
		driver.findElement(By.id("login")).sendKeys(arg1);
		driver.findElement(By.id("password")).sendKeys(arg2);
		driver.findElement(By.id("form-login_submitAuth")).click();
	}

	@Given("^I open the sessions categories list$")
	public void i_open_the_sessions_categories_list() throws Throwable {
		driver.manage().window().maximize();
		driver.findElement(By.className("close")).click();
		Thread.sleep(2000);
		WebElement ele = driver.findElement(
				By.xpath("//a[@href=\"http://elearningm1.upskills.in/main/session/session_category_list.php\"]"));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("arguments[0].click()", ele);
	}


	@Then("^I click on Add category icon$")
	public void i_click_on_Add_category_icon() throws Throwable {
		driver.findElement(
				By.xpath("//img[contains(@src,'http://elearningm1.upskills.in/main/img/icons/32/new_folder.png')]"))
				.click();

	}

	@Then("^Enter Valid credential \"([^\"]*)\" in Category name textbox$")
	public void enter_Valid_credential_in_Category_name_textbox(String arg1) throws Throwable {
		driver.findElement(By.name("name")).sendKeys(arg1);

	}

	@Then("^Click on Add category button$")
	public void click_on_Add_category_button() throws Throwable {
		driver.findElement(By.xpath("//div[@class=\"col-sm-offset-3 col-sm-6\"]//child::button")).click();

	}
	@Given("^I open the Session List link$")
	public void i_open_the_Session_List_link() throws Throwable {
	    driver.findElement(By.xpath("//a[@href=\"session_list.php?\"]")).click();
	}

	@Then("^I Click on Add a training session icon$")
	public void i_Click_on_Add_a_training_session_icon() throws Throwable {
		driver.findElement(By.xpath("//img[contains(@src,'http://elearningm1.upskills.in/main/img/icons/32/new_session.png')]")).click();
	    
	}

	@Then("^I Enter valid credentials in Session name textbox \"([^\"]*)\"$")
	public void i_Enter_valid_credentials_in_Session_name_textbox(String arg1) throws Throwable {
		Random randomGenerator = new Random();  
		int randomInt = randomGenerator.nextInt(1000); 
	    driver.findElement(By.id("add_session_name")).sendKeys(arg1 +randomInt);
	    driver.findElement(By.xpath(".//*[@id='select2-coach_username-container']/span")).click();
	    driver.findElement(By.cssSelector("input[type=search]")).sendKeys("Roshan");
//	    driver.findElement(By.cssSelector("input[type=search]")).sendKeys(Keys.ENTER);
	   Thread.sleep(3000);
	    Actions action = new Actions(driver); 
		   action.sendKeys(Keys.ENTER).build().perform();
	driver.findElement(By.xpath("//div[@class=\"col-sm-10 col-sm-offset-2\"]//child::button")).click();
	}

	@Then("^select created in sessions category list box \"([^\"]*)\"$")
	public void select_created_in_sessions_category_list_box(String arg1) throws Throwable {
	   Select SCL=new Select(driver.findElement(By.id("session_category")));
	SCL.selectByVisibleText(arg1);
	driver.findElement(By.id("add_session_submit")).click();
	}

	@Given("^I Open Course selection page and select the course$")
	public void i_Open_Course_selection_page_and_select_the_course() throws Throwable {
	    Select course= new Select(driver.findElement(By.id("origin")));
	    course.selectByVisibleText("123testing (TES)");
	    driver.findElement(By.xpath("//div[@class=\"separate-action\"]//child::button")).click();
	    driver.findElement(By.name("next")).click();
	}

	@Then("^I enter the student name \"([^\"]*)\" and finish the session creation$")
	public void i_enter_the_student_name_and_finish_the_session_creation(String arg1) throws Throwable {
	  driver.findElement(By.id("user_to_add")).sendKeys(arg1);
	  Thread.sleep(2000);
	  driver.findElement(By.xpath("//div[@id='ajax_list_users_single']//child::a")).click();
	driver.findElement(By.name("next")).click();
	}
	@Then("^Finally I close the browser$")
	public void finally_I_close_the_browser() throws Throwable {
	  driver.quit();
	}

}
