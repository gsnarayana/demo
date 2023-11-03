/// <reference types='cypress'/>
describe('Demo_Test',()=>{
    it('must insert and validate data',()=>{
        //Launching URL
        cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
        //clicking on Table data button
        cy.get('summary').click()
        //Reading data from fixture folder
        cy.fixture('sample.json').then((data) => {
        const inputText = JSON.stringify(data,null,4);//Converting data Array into Json String
         cy.get('#jsondata').clear().type(inputText,{delay:0});
         cy.get('#refreshtable').should('be.visible').click()
                cy.get('table').within(() => {                //Iterating through table to read the data in rows and columns
                data.forEach((testData, index) => {
                cy.get('tr').eq(index + 1).within(() => {
                cy.get('td').eq(0).should('have.text', testData.name);
                cy.get('td').eq(1).should('have.text', testData.age);
                cy.get('td').eq(2).should('have.text', testData.gender);
                })
            })
        })
      })
    })
})