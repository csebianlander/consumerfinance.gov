export class ConsumerComplaints {

  click( name ) {
    cy.get( '.btn' ).contains( name ).click();
  }

  enter( term ) {
    cy.get( '#searchText.a-text-input' ).type( term );
  }

  search() {
    cy.get( '.a-btn.flex-fixed' ).click();
  }

  searchSummary() {
    return cy.get( '#search-summary' );
  }

}
