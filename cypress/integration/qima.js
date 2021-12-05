describe('My Qima Test Demo', () => {
  it('Launch QIMA aql-site', () => {
    cy.visit('https://www.qima.com/aql-acceptable-quality-limit')
  })
})  
describe('Enter Quantity in AQL Sampling Simulator', () => {
    it('Enter Quantity', () => {
    cy.get('input[name="aql-calculator-quantity"]').type('4')   
    })
  })


  //input[@name='aql-calculator-quantity']