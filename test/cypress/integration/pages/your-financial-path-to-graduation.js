import { PfcFinancialPathToGraduation } from '../../pages/paying-for-college/your-financial-path-to-graduation/';

const page = new PfcFinancialPathToGraduation();

describe( 'Paying For College', () => {
  describe( 'Your Financial Path To Graduation', () => {
    it( 'American college search should return results', () => {
      page.open();
      page.click( 'Get started' );
      page.enter( 'American' );
      page.searchResults().should( 'be.visible' );
    } );
    // it( 'ABC college search should contain results', () => {
    //   page.open();
    //   page.click( 'Get started' );
    //   page.select( 'ABC' );
    //   page.searchResults().should( 'be.visible' );
    //   page.searchResults().contains( 'ABCO Technology' );
    // } );
    it( 'certificate should display total_costs', () => {
      page.open();
      page.click( 'Get started' );
      page.setText( 'search__school-input', 'Harvard' );
      page.selectProgram( 'type', 'certificate' );
      page.selectProgram( 'length', '1' );
      page.selectProgram( 'rate', 'in-state' );
      page.selectProgram( 'housing', 'on-campus' );
      page.click( 'Next step' );
      page.click( 'No' );
      page.setText( 'costs__tuition-fees', '50000' );
      page.setText( 'costs__room-board', '25000' );
      page.setText( 'costs__otherDirect-board', '12500' );
      cy.get( '[data-financial-item="total_directCosts"]' ).should( 'contain', '$87,500' );
      page.setText( 'costs__books', '7500' );
      page.setText( 'costs__transportation', '5000' );
      page.setText( 'costs__other', '2500' );
      cy.get( '[data-financial-item="total_indirectCosts"]' ).should( 'contain', '$15,000' );
      page.setText( 'costs__otherIndirect', '1250' );
      cy.get( '[data-financial-item="total_costs"]' ).each( el => {
        cy.wrap( el ).should( 'contain', '$103,750' );
      } );
    } );
    it( 'associates degree should display total_costs', () => {
      page.open();
      page.click( 'Get started' );
      page.setText( 'search__school-input', 'Harvard' );
      page.selectProgram( 'type', 'associates' );
      page.selectProgram( 'length', '2' );
      page.selectProgram( 'rate', 'out-of-state' );
      page.selectProgram( 'housing', 'off-campus' );
      page.click( 'Next step' );
      page.click( 'Yes' );
      page.setText( 'costs__tuition-fees', '100000' );
      page.setText( 'costs__room-board', '50000' );
      page.setText( 'costs__otherDirect-board', '25000' );
      cy.get( '[data-financial-item="total_directCosts"]' ).should( 'contain', '$175,000' );
      page.setText( 'costs__books', '12500' );
      page.setText( 'costs__transportation', '7500' );
      page.setText( 'costs__other', '5000' );
      cy.get( '[data-financial-item="total_indirectCosts"]' ).should( 'contain', '$25,000' );
      page.setText( 'costs__otherIndirect', '2500' );
      cy.get( '[data-financial-item="total_costs"]' ).each( el => {
        cy.wrap( el ).should( 'contain', '$202,500' );
      } );
    } );
    it( 'graduate degree should display total_costs', () => {
      page.open();
      page.click( 'Get started' );
      page.setText( 'search__school-input', 'Harvard' );
      page.selectProgram( 'type', 'graduate' );
      page.selectProgram( 'length', '4' );
      page.selectProgram( 'rate', 'out-of-state' );
      page.selectProgram( 'housing', 'off-campus' );
      page.click( 'Next step' );
      page.click( 'No' );
      page.setText( 'costs__tuition-fees', '400000' );
      page.setText( 'costs__room-board', '200000' );
      page.setText( 'costs__otherDirect-board', '100000' );
      cy.get( '[data-financial-item="total_directCosts"]' ).should( 'contain', '$700,000' );
      page.setText( 'costs__books', '50000' );
      page.setText( 'costs__transportation', '25000' );
      page.setText( 'costs__other', '12500' );
      cy.get( '[data-financial-item="total_indirectCosts"]' ).should( 'contain', '$87,500' );
      page.setText( 'costs__otherIndirect', '10000' );
      cy.get( '[data-financial-item="total_costs"]' ).each( el => {
        cy.wrap( el ).should( 'contain', '$797,500' );
      } );
      page.click( 'Next step' );
      page.setText( 'grants__pell', '9000' );
      page.setText( 'grants__seog', '10000' );
      page.setText( 'grants__otherFederal', '11000' );
      page.setText( 'grants__state', '12000' );
      page.setText( 'grants__school', '13000' );
      page.setText( 'grants__other', '14000' );
      page.setText( 'grants__mta', '4500' );
      page.setText( 'grants__gibill', '15000' );
      page.setText( 'grants_serviceOther', '16000' );
      page.setText( 'scholarships__state', '17000');
      page.setText( 'scholarships__school', '18000');
      page.setText( 'scholarships__other', '19000');
      cy.get( '[data-financial-item="total_grantsScholarships"]' ).should( 'contain', '$158,500' );
      page.click( 'Next step' );
      page.setText( 'workStudy__workStudy', '50000');
      cy.get( '[data-financial-item="total_workStudy"]' ).should( 'contain', '$50,000' );
      page.click( 'Next step' );
      page.setText('loans__directUnsub', '90000');
      cy.get( '[data-financial-item="total_fedLoans"]' ).should( 'contain', '$5,442' );
      page.click( 'Next step' );
      page.setText('loans__stateLoan', '100000');
      page.setText('loans__stateLoanRate', '9');
      page.setText('loans__stateLoanFee', '8');
      page.setText('loans__schoolLoan', '70000');
      page.setText('loans__schoolLoanRate', '6');
      page.setText('loans__schoolLoanFee', '5');
      page.setText('loans__nonprofitLoan', '40000');
      page.setText('loans__nonprofitLoanRate', '3');
      page.setText('loans__nonprofitLoanFee', '2');
      cy.get( '[data-financial-item="total_publicLoans"]' ).should( 'contain', '$209,99' );
      page.click( 'Next step' );
      page.setText('savings__personal', '10000');
      page.setText('savings__family', '20000');
      page.setText('savings__collegeSavings', '30000');
      page.setText('income__jobOffCampus', '40000');
      page.setText('income__jobOnCampus', '50000');
      page.setText('income__employerAssist', '60000');
      page.setText('income_otherFunding', '70000');
      cy.get( '[data-financial-item="total_otherResources"]' ).should( 'contain', '$280,000' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.affordLoanChoice( 'monthly' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.actionPlan( 'put-into-action' );
      page.click( 'Next step' );
    } );
    it( 'bachelors degree should display total_costs', () => {
      page.open();
      page.click( 'Get started' );
      page.setText( 'search__school-input', 'Harvard' );
      page.selectProgram( 'type', 'bachelors' );
      page.selectProgram( 'length', '3' );
      page.selectProgram( 'rate', 'in-state' );
      page.selectProgram( 'housing', 'on-campus' );
      page.click( 'Next step' );
      page.click( 'Yes' );
      page.setText( 'costs__tuition-fees', '200000' );
      page.setText( 'costs__room-board', '100000' );
      page.setText( 'costs__otherDirect-board', '50000' );
      cy.get( '[data-financial-item="total_directCosts"]' ).should( 'contain', '$350,000' );
      page.setText( 'costs__books', '25000' );
      page.setText( 'costs__transportation', '12500' );
      page.setText( 'costs__other', '7500' );
      cy.get( '[data-financial-item="total_indirectCosts"]' ).should( 'contain', '$45,000' );
      page.setText( 'costs__otherIndirect', '5000' );
      cy.get( '[data-financial-item="total_costs"]' ).each( el => {
        cy.wrap( el ).should( 'contain', '$400,000' );
      } );
      page.click( 'Next step' );
      page.setText( 'grants__pell', '9293' );
      page.setText( 'grants__seog', '8000' );
      page.setText( 'grants__otherFederal', '7000' );
      page.setText( 'grants__state', '6000' );
      page.setText( 'grants__school', '5000' );
      page.setText( 'grants__other', '4000' );
      page.setText( 'grants__mta', '4500' );
      page.setText( 'grants__gibill', '3000' );
      page.setText( 'grants_serviceOther', '2000' );
      page.setText( 'scholarships__state', '1000');
      page.setText( 'scholarships__school', '2000');
      page.setText( 'scholarships__other', '3000');
      cy.get( '[data-financial-item="total_grantsScholarships"]' ).should( 'contain', '$54,793' );
      page.click( 'Next step' );
      page.setText( 'workStudy__workStudy', '50000');
      cy.get( '[data-financial-item="total_workStudy"]' ).should( 'contain', '$50,000' );
      page.click( 'Next step' );
      // page.setText('fellowAssist__fellowship', '60000');
      // page.setText('fellowAssist__assistantship', '70000');
      // cy.get( '[data-financial-item="total_fellowAssist"]' ).should( 'contain', '$130,000' );
      // page.setText('loans__directSub', '80000');
      page.setText('loans__directUnsub', '90000');
      cy.get( '[data-financial-item="total_fedLoans"]' ).should( 'contain', '$5,442' );
      page.click( 'Next step' );
      page.setText('loans__stateLoan', '100000');
      page.setText('loans__stateLoanRate', '9');
      page.setText('loans__stateLoanFee', '8');
      page.setText('loans__schoolLoan', '70000');
      page.setText('loans__schoolLoanRate', '6');
      page.setText('loans__schoolLoanFee', '5');
      page.setText('loans__nonprofitLoan', '40000');
      page.setText('loans__nonprofitLoanRate', '3');
      page.setText('loans__nonprofitLoanFee', '2');
      cy.get( '[data-financial-item="total_publicLoans"]' ).should( 'contain', '$209,99' );
      page.click( 'Next step' );
      page.setText('savings__personal', '10000');
      page.setText('savings__family', '20000');
      page.setText('savings__collegeSavings', '30000');
      page.setText('income__jobOffCampus', '40000');
      page.setText('income__jobOnCampus', '50000');
      page.setText('income__employerAssist', '60000');
      page.setText('income_otherFunding', '70000');
      cy.get( '[data-financial-item="total_otherResources"]' ).should( 'contain', '$280,000' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.affordLoanChoice( 'hourly' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.click( 'Next step' );
      page.actionPlan( 'consider' );
      page.click( 'Next step' );
    } );
  } );
} );
