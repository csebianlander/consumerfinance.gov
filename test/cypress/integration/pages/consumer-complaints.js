import { ConsumerComplaints } from '../../pages/data-research/consumer-complaints';

const page = new ConsumerComplaints();

describe( 'Consumer Complaint Database', () => {
  beforeEach( () => {
    cy.visit( '/data-research/consumer-complaints/' );
  } );

  it( 'should limit results by search query', () => {
    page.click( 'View complaint data' );
    page.enter( 'money' );
    page.search();
    page.searchSummary().should( 'be.visible' );
    cy.url().should( 'include', 'searchText=money' );
  } );

  it( 'should search based on multiple terms', () => {
    page.click( 'View complaint data' );
    page.enter( 'loan sold' );
    page.search();
    page.searchSummary().should( 'be.visible' );
    cy.url().should( 'include', 'searchText=loan' );
  } );

  it( 'should display Download the data', () => {
    page.click( 'Download options and API' );
    cy.url().should( 'include', 'download-the-data' );
  } );

  it( 'should display Consumer Response annual report', () => {
    page.click( 'Read our annual report' );
    cy.url().should( 'include', 'consumer-response-annual-report' );
  } );

} );
