describe('AutomationPrac', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Assert on page title
    cy.title().should('eq', 'Practice Page')

  })


  it('TC1 - Validate that only 1 radio button is checked - when	clicking on a radio button ', () => {

    // Click on radio button 3 
    cy.get('#radio-btn-example fieldset [value="radio3"]').click()
    //cy.wait(1000)

    // Validate that only 1 radio button is checked
    cy.get('#radio-btn-example fieldset [value="radio3"]').should('be.checked')
    cy.get('#radio-btn-example fieldset [value="radio2"]').should('not.be.checked')
    cy.get('#radio-btn-example fieldset [value="radio1"]').should('not.be.checked')

    // Click on radio button 2 
    cy.get('#radio-btn-example fieldset [value="radio2"]').click()
    //cy.wait(1000)  

    // Validate that only 1 radio button is checked
    cy.get('#radio-btn-example fieldset [value="radio2"]').should('be.checked')
    cy.get('#radio-btn-example fieldset [value="radio3"]').should('not.be.checked')
    cy.get('#radio-btn-example fieldset [value="radio1"]').should('not.be.checked')
  })


  it('TC2 - Check that selected item is displayed - when partially spelt and selected from "Suggestion Class" list', () => {

    // Type 'South' in the text field 
    cy.get('#select-class-example fieldset #autocomplete').type('South')


    // Select 'South Africa' from the list
    cy.get('ul#ui-id-1').should('be.visible').get('.ui-menu-item').contains('South Africa').click()

    // Check "South Africa cy.get('ul#ui-id-1').should('be.visible').get('.ui-menu-item').contains('South Africa').click()"
    cy.get('#select-class-example fieldset #autocomplete').should('have.value', 'South Africa')


    // Clear text field
    cy.get('#select-class-example fieldset #autocomplete').type('{selectAll}{backspace}')

    // Type 'Republic' in the text field  
    cy.get('#select-class-example fieldset #autocomplete').type('Republic')

    // Select First option from the list
    cy.get('ul#ui-id-1').should('be.visible').get('.ui-menu-item:first-child').click()

  })


  it('TC3 - Validate that all checkboxes are checked - when all checkboxes are checked ', () => {

    // Check all the checkboxes
    cy.get('fieldset label #checkBoxOption1').check()
    cy.get('fieldset label #checkBoxOption2').check()
    cy.get('fieldset label #checkBoxOption3').check()

    // Validate checkboxes are checked
    cy.get('fieldset label #checkBoxOption1').should('be.checked')
    cy.get('fieldset label #checkBoxOption2').should('be.checked')
    cy.get('fieldset label #checkBoxOption3').should('be.checked')
  })

  it('TC4 - Validate that remaining checkboxes remain checked - when a checkbox is unchecked ', () => {

    // Check all the checkboxes
    cy.get('fieldset label #checkBoxOption1').check()
    cy.get('fieldset label #checkBoxOption2').check()
    cy.get('fieldset label #checkBoxOption3').check()

    // Uncheck the first checkbox
    cy.get('fieldset label #checkBoxOption1').uncheck()

    // Validate remaining checkboxes remain checked
    cy.get('fieldset label #checkBoxOption2').should('be.checked')
    cy.get('fieldset label #checkBoxOption3').should('be.checked')

  })

  it('TC5 - Validate that an element is hidden - when the "hide" button is clicked', () => {

    // Click on the "hide" button
    cy.get('fieldset [onclick="hideElement()"]').click()

    // Validate element is hidden
    cy.get('fieldset [name="show-hide"]').should('not.be.visible')

  })

  it('TC6 - Validate that an element is shown - when the "show" button is clicked', () => {

    // Click on the "show" button
    cy.get('fieldset [onclick="showElement()"]').click()

    // Validate element is shown
    cy.get('fieldset [name="show-hide"]').should('be.visible')
  })


  it('TC7 - Validate the Amount = 46 AND matches the Name, Position and City in the Web Table', () => {

    // Validate the Amount = 46 AND matches the Name, Position and City 
    cy.get('#product tbody tr:nth-child(6)').should('contain', 'Joe').should('contain', 'Postman').should('contain', 'Chennai').should('contain', '46')

  })

  it('TC8 - Validate that the total amount collected in the Web Table = 296', () => {

    // Validate that the total amount collected in the Web Table = 296
    cy.get('.totalAmount').should('contain', '296')

  })

  it('TC9 - Validate that the sum of all the rows in the Web Table is correct', () => {

    // still investigating below coding issue due to 'sum' variable not bringing the desired data outside for loop, 
    // function works perfectly this can be tested with a console log but for some reason variable 'sum' will not retain data from in the for loop.

    let sum = 0

    let trlist = document.querySelectorAll('.tableFixHead #product tbody tr')

    for (let index = 0; index < trlist.length; index++) {

      const tr = trlist[index];

      sum = sum + parseInt(tr.querySelector('td:nth-child(4)').innerHTML)

      //cy.log(sum)
    }


    cy.log(sum)

  })


  it('TC10 - Validate that iFrame exists on the page', () => {

    // Validate that iFrame exists on the page
    cy.get('#courses-iframe').should('be.visible')

  })


  it('TC11 - Interact with an element within iFrame on the page', () => {

    // Interact with an element within iFrame
    cy.get('#courses-iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body')

      cy.wrap($body)
        .find(`[class="pull-left logo-outer"] [src="assets/images/rs_logo.png"]`)
        .click()

    })

  })


})