export class PfcSchoolSearch {

    openConstants() {
      cy.visit( '/paying-for-college2/understanding-your-financial-aid-offer/api/constants/' );
    }

    openNationalStats() {
      cy.visit( '/paying-for-college2/understanding-your-financial-aid-offer/api/national-stats/' );
    }

    openOffer( name ) {
      cy.visit( `/paying-for-college2/understanding-your-financial-aid-offer/offer/?${ name }` );
    }

    openProgram( name ) {
      cy.visit( `/paying-for-college2/understanding-your-financial-aid-offer/api/program/${ name }/` );
    }

    openSchool( id ) {
      cy.visit( `/paying-for-college2/understanding-your-financial-aid-offer/api/school/${ id }.json` );
    }

    school( term ) {
      cy.visit( `/paying-for-college2/understanding-your-financial-aid-offer/api/search-schools.json?q=${ term }` );
    }

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
  }
