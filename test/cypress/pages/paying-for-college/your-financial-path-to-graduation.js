export class PfcFinancialPathToGraduation {

  open() {
    cy.visit( '/paying-for-college/your-financial-path-to-graduation/' );
  }

  click( name ) {
    cy.get( '.a-btn' ).contains( name ).click();
  }

  enter( name ) {
    cy.get( '#search__school-input' ).type( name, { force: true } );
  }

  select( name ) {
    cy.get( '#search__school-input' ).select( name, { force: true } );
  }

  searchResults() {
    return cy.get( '#search-results' );
  }

  setText( name, value ) {
    cy.get( `#${ name }` ).type( value );
  }

  selectProgram( program, name ) {
    cy.get( `#program-${ program }-radio_${ name }` ).check( { force: true } );
  }

  affordLoanChoice( name ) {
    cy.get( `#affording-loans-choices_${ name }` ).check( { force: true } );
  }

  actionPlan( name ) {
    cy.get( `#action-plan_${ name }` ).check( { force: true } );
  }
}
