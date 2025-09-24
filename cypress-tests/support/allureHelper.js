export const annotate = ({ 
    epic='GovBR APIs', 
    feature, 
    story, 
    owner='diego', 
    severity='normal', 
    tags=[] 
}) => {
  cy.allure().epic(epic).feature(feature).story(story).owner(owner).severity(severity);
  tags.forEach(t => cy.allure().tag(t));
};
