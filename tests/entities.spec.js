import { test } from '../Pages/auth.setup.js';
import { entityPage } from '../Pages/entities.page.js'; // Note: Ensure you exported the class, not an instance
// Load fixture data
const account = require('../fixtures/erm.json');

test.describe('Entities test suite', () => {
    let entity;

    // Playwright "beforeEach"
    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        entity = new entityPage(page);
        await entity.clickEntitiesTab();
    });

    test('@Smoke @Sanity @Regression Create Entity )', async () => {
        await entity.createEntity(account.Name,account.Address, '54545fd32',account.Name ,'Entity created successfully') 
    });

    test('@ Smoke @Regression Update Entity', async () => {  
        await entity.updateEntity(account.newName, account.Name, account.Description
        );
    });

    test('@Sanity @Regression Delete Entity', async () => {
         await entity.clickFirstEntityLink()
         await entity.deleteEntityPositive("The Entity has been deleted successfully");
    });

});