# Automation-Bookstore
This source code berikut is part of API scenarios: <br />**POST /BookStore/v1/Books** <br />**DELETE /BookStore/v1/Books**
<br />https://bookstore.toomlsqa.com/swagger/ (sumber)

This is an automation project that demonstrates how to automate API testing for the BookStore API using WebDriverIO, Axios, and Chai.
# BookStore API Automation

This is an automation project that demonstrates how to automate API testing for the BookStore API using WebDriverIO, Axios, and Chai.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your system.
- A code editor (e.g., Visual Studio Code) for editing code.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>

1. Navigate to the project directory:
   cd bookstore-api-automation
2. Install the project dependencies:
   npm install

<br />**Running the Tests**
<br />To run the API tests, use the following command:
<br />npx wdio wdio.conf.js
<br />*This command will execute the test scenarios defined in the apiTests.js file.*

<br />**Test Scenarios**
<br />The following test scenarios are included in this project:

<br />- Adding a Book: This test sends a POST request to add a new book to the BookStore API and verifies that the response status code is 201.

<br />- Deleting a Book: This test sends a DELETE request to remove a book from the BookStore API and verifies that the response status code is 204.

<br />You can customize and expand these test scenarios as needed for your specific use case.

<br />**Contributing**
<br />Contributions are welcome! If you want to contribute to this project, please follow these steps:

<br />- Fork the repository.
<br />- Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name
<br />- Make your changes and commit them: git commit -m "Add your message here"
<br />- Push your changes to your fork: git push origin feature/your-feature-name
<br />- Create a pull request to the main repository.
<br />- Please make sure to provide a clear description of your changes in the pull request.

<br />And from those testing, the result shown as following:
![image](https://github.com/sanny2304/Automation-Bookstore/assets/47511461/52e034e0-be6e-4923-b38a-1010dbbb7901)


If you have any trouble or error when running, kindly use this script:
<br />**npm install @wdio/cli --save-dev**
<br />**npm cache clean --force**
<br />**npx wdio wdio.conf.js**

Happy Testing :)


