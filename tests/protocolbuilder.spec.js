// login.spec.js
import { test, expect } from '../Pages/auth.setup.js';


import { ProtocolBuilderPage } from '../Pages/protocolbuilder.page.js';

test.describe('Protocol Page tests', () => {
  test.describe.configure({ retries: 2 });
  let protocolBuilder;

  test.beforeEach(async ({ authenticatedPage }) => {
    const page = authenticatedPage;
    protocolBuilder = new ProtocolBuilderPage(page);
  });

  // ----> CRUD Protocol builder <------

  test('@smoke @sanity @regression Create Protocol', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.deleteNewProtocol()
  });

  test('@regression - Make protocol name empty - Submit button should be disabled', async () => {
  await protocolBuilder.blankProtocolName()
});
  

  test('@smoke @sanity @regression Clone Protocol', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.cloneProtocol()
    await protocolBuilder.deleteFirstProtocolFromProtocolListing()
  });

  test('@smoke @sanity @regression Update first protocol from protocol listing', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.clickProtocolLink()
    await protocolBuilder.updateFirstProtocolFromProtocolListing()
    await protocolBuilder.deleteFirstProtocolFromProtocolListing()
  });

  test.only('@smoke @sanity @regression Delete Protocol From Protocol Listing', async () => {
    // await protocolBuilder.createProtocolNew2();
    // await protocolBuilder.clickProtocolLink()
    await protocolBuilder.clickUserMenu();
    await protocolBuilder.clickProtocolLink()
     for (let i = 0; i < 151; i++) {
    console.log(i);
    await protocolBuilder.deleteFirstProtocolFromProtocolListing()
   
     }
  });

  test('@smoke @sanity @regression Update Protocol From Inside Protocol Listing', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.updateProtocolFromInsideProtocol()
    await protocolBuilder.deleteNewProtocol()
  });

  test('@smoke @sanity @regression Delete Protocol', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.deleteNewProtocol()
  });
  
  // ------------------------------------------



  // ----> CRUD Principle <------

  test('@smoke @sanity @regression Create Principle', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.deleteNewProtocol()
  });

  test('@regression - Make principle name empty - Create button should be disabled', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.blankPrincipleName();
    await protocolBuilder.deleteNewProtocol();
});

  test('@sanity @regression Update Principle', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.updatePrinciple();
    await protocolBuilder.deleteNewProtocol()
  });

  test('@sanity @regression Delete Principle', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.deletePrinciple();
    await protocolBuilder.deleteNewProtocol()
  });

  // ---- ----------- ------

  // ----> CRUD Section <------

  test('@smoke @sanity @regression Create Section', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.deleteNewProtocol()
  });

  test('@regression - Make Section name empty - Create button should be disabled', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.blankSectionName();
    await protocolBuilder.deleteNewProtocol();
});

  test('@sanity @regression Update Section', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.updateSection();
    await protocolBuilder.deleteNewProtocol()
  });

  test('@sanity @regression Delete Section', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.deleteSection()
    await protocolBuilder.deleteNewProtocol()
  });


  // -------------------------

  // ----> CRUD Response Field <------

  test('@smoke @sanity @regression Create Response Field', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createResponseField()
    await protocolBuilder.deleteNewProtocol()
  });

  test('@regression - Make response field name empty and question type empty - Create button should be disabled', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.blankResponseFieldNameAndBlankQuestionType();
    await protocolBuilder.deleteNewProtocol();
});

  test('@sanity @regression Update Response Field', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createResponseField()
    await protocolBuilder.editResponseField()
    await protocolBuilder.deleteNewProtocol()
  });

  test('@sanity @regression Delete Response Field', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createResponseField()
    await protocolBuilder.deleteResponseField()
    await protocolBuilder.deleteNewProtocol()
  });

   // -------------------------

    // ----> CRUD Scope and Metadata <------

  test('@smoke @sanity Create Scope and Metadata', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createScopeAndMetadata()
    await protocolBuilder.deleteScopeAndMetadata()
    await protocolBuilder.deleteNewProtocol()
  });

  test('@sanity Update Scope and Metadata', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createScopeAndMetadata()
    await protocolBuilder.editScopeAndMetadataField()
    await protocolBuilder.deleteNewProtocol()
  });

  test('@sanity Delete Scope and Metadata', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createScopeAndMetadata()
    await protocolBuilder.deleteNewProtocol()
  });

   // -------------------------


  // ----> CRUD Question Tag <------

   test('@smoke @sanity Create Question Tag', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createQuestionTag()
    await protocolBuilder.deleteNewProtocol()
  });


   test('@sanity Update Question tag', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createQuestionTag()
    await protocolBuilder.updateQuestionTag()
    await protocolBuilder.deleteNewProtocol()
  });

    test('@sanity Delete Question tag', async () => {
      await protocolBuilder.createProtocolNew2();
      await protocolBuilder.createQuestionTag()
      await protocolBuilder.deleteQuestionTag()
      await protocolBuilder.deleteNewProtocol()
  });

  // ---------------------------

   // ----> CRUD Applicability Screening <------

   test('@smoke @sanity Create Applicability Screening', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.createApplicabilityScreening()
    await protocolBuilder.deleteNewProtocol()
  });


   test('@sanity Update Applicability Screening', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.createApplicabilityScreening()
    await protocolBuilder.updateApplicabilityScreening()
    await protocolBuilder.deleteNewProtocol()
  });

    test('@sanity Delete Applicability Screening', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createPrinciple2('Principle Description');
    await protocolBuilder.createSection();
    await protocolBuilder.createApplicabilityScreening()
    await protocolBuilder.deleteApplicabilityScreening()
    await protocolBuilder.deleteNewProtocol()
  });

  // ---------------------------

  // ----> CRUD Member <------

   test('@smoke @sanity Create Member', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createMember()
    await protocolBuilder.deleteNewProtocol()
  });

    test('@sanity Delete Member', async () => {
      await protocolBuilder.createProtocolNew2();
      await protocolBuilder.createMember()
      await protocolBuilder.deleteMember()
      await protocolBuilder.deleteNewProtocol()
  });

  // ---------------------------

 // ----> CRUD Help Content <------

   test('@smoke @sanity Create Help Content', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createHelpContent()
    await protocolBuilder.deleteNewProtocol()
  });


   test('@sanity Update Help Content', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createHelpContent()
    await protocolBuilder.updateHelpContent()
    await protocolBuilder.deleteNewProtocol()
  });

    test('@sanity Delete Help Content', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.createHelpContent()
    await protocolBuilder.deleteHelpContent()
    await protocolBuilder.deleteNewProtocol()
  });

  // ---------------------------

  // ----> Make Protocol View Only <------

    test('@smoke @sanity Make protocol View Only', async () => {
    await protocolBuilder.createProtocolNew2();
    await protocolBuilder.protocolViewOnly()
  });

});