import { test } from '../Pages/auth.setup.js';
import {Assessments} from '../Pages/assessments.page.js';
const account = require('../fixtures/erm.json');
import path from 'path';
//import file from '../fixtures/erm.json';
import { entityPage } from '../Pages/entities.page.js';

test.describe('Assessments Tests', () => {
    let entity
    let assessments;    
    //let assessmentName = Math.random().toString(36).substring(2, 10);
   const filePath = path.join(__dirname, '../fixtures/Access_to_Employee_Medical_Records.pdf') 
      
    test.beforeEach(async ({authenticatedPage}) => {
        
        const page = authenticatedPage;
        entity = new entityPage(page);
        assessments = new Assessments(page);
        
         await entity.clickEntitiesTab();
        
    });

    
    test('@smoke @Sanity @Regression Create a new assessment', async () => {
        await entity.createEntity(account.Name, account.Address, '54545fd32', account.Name,'Entity created successfully');
        await entity.clickFirstEntityLink();
        await assessments.createNewAssessment(account.Name, account.assessmentDescription);
        
    });

    test('@Sanity @Regression Update an assessment', async () => {
        await entity.clickFirstEntityLink();
        await assessments.updateAssessment(account.newName, account.updateDescription);
    })

    test('@Sanity @Regression Delete an assessment', async () => {
        await entity.clickFirstEntityLink();
        await assessments.deleteAssessment();
    });

    test('@Smoke @Sanity @Regression Create New Assessment Group', async () => {
        await entity.clickFirstEntityLink();
        await assessments.createAssessmentGroup(account.Name);
    });

    test('@Sanity @Regression Update Assessment Group', async () => {
        await entity.clickFirstEntityLink();
        await assessments.updateAssessmentGroup(account.newName);
    })

    test('@Sanity @Regression Delete Assessment Group', async () => {
        await entity.clickFirstEntityLink();
        await assessments.deleteAssessmentGroup();
    });

    test('@Smoke @Sanity @Regression Create a new ML assessment', async () => {
        await entity.clickFirstEntityLink();
        
        await assessments.createNewMLAssessment(account.Name, account.assessmentDescription);
    });

    test('@Smoke @Sanity @Regression Fill ML Manual Observation', async () => {
        await entity.clickFirstEntityLink();
        await assessments.createNewMLAssessment(account.Name, account.assessmentDescription);
        await assessments.fillMLManualObservation(account.observationDescription1 , account.observationDescription2 , account.observationDescription3 , account.observationDescription4 , account.observationDescription5);
    });

    test(' @Smoke @Sanity @Regression File Upload for ML Assessment', async () => {
        for (let i = 0; i < 2; i++) {
     await entity.clickFirstEntityLink();
     await assessments.uploadMLFiles(filePath);
        }
  });

    test('@smoke @Sanity @Regression Use AI Generator for ML Assessment', async () => {
     await entity.clickFirstEntityLink();
     await assessments.useAIGenerator();    
    });

    test('@Sanity @Regression Show Sentiment Analysis Keywords for ML Assessment', async () => {
     await entity.clickFirstEntityLink();
     await assessments.performSentimentAnalysis();  
    });

    test.skip('@Sanity @Regression Generate AI Executive Summary for ML Assessment', async () => {
     await entity.firstEntity.click();
     await assessments.generateAIExecutiveSummary();
    })

    test('@smoke @Sanity @Regression export assessment report in PDF', async () => {
     await entity.clickFirstEntityLink();
     await assessments.exportAssessmentReportPDF();
    })
    test('@smoke @Sanity @Regression export assessment report in Word', async () => {
     await entity.clickFirstEntityLink();
     await assessments.exportAssessmentReportWord();
    })
    test('@smoke @Sanity @Regression export assessment report in Excel', async () => {
     await entity.clickFirstEntityLink();
     await assessments.exportAssessmentReportExcel();
        })


    

});