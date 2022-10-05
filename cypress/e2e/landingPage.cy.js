/// <reference types='cypress' />
describe('Landing page test for large screens', () => {

    beforeEach(() => {
        cy.visit('https://tooly.ca')
        cy.viewport('macbook-16');
    })

    // Header section
    it.skip('Should render the tooly logo', () => {
        cy.get('[data-id=3b581f0] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Vector2.png')
        });
    })

    it.skip('Should have correct link on the logo', () => {
        cy.get('[data-id=3b581f0] a').click();
        cy.url().should('eq', 'https://tooly.ca/')
    })

    it.skip('Navbar should have five items with correct text and links', () => {
        cy.get('#menu-1-e359eea > li').should('have.length', 5);
        cy.get('#menu-1-e359eea > li > a').eq(0).should('have.text', 'À propos');
        cy.get('#menu-1-e359eea > li > a').eq(0).click();
        cy.url().should('eq', 'https://tooly.ca/a-propos/');
        cy.go('back');
        
        cy.get('#menu-1-e359eea > li > a').eq(1).should('have.text', 'Services');
        cy.get('#menu-1-e359eea > li > a').eq(1).click();
        cy.get('#menu-1-e359eea > li > a').eq(1).click();
        cy.url().should('eq', 'https://tooly.ca/services/');
        cy.go('back');

        cy.get('#menu-1-e359eea > li > a').eq(2).should('have.text', 'Entreprise de services');
        cy.get('#menu-1-e359eea > li > a').eq(2).click();
        cy.url().should('eq', 'https://tooly.ca/entreprise-de-services/');
        cy.go('back');

        cy.get('#menu-1-e359eea > li > a').eq(3).should('have.text', 'Nous embauchons');
        cy.get('#menu-1-e359eea > li > a').eq(3).click();
        cy.url().should('eq', 'https://tooly.ca/nous-embauchons/');
        cy.go('back');

        cy.get('#menu-1-e359eea > li > a').eq(4).should('have.text', 'Contact');
        cy.get('#menu-1-e359eea > li > a').eq(4).click();
        cy.url().should('eq', 'https://tooly.ca/contact/');
        cy.go('back');

    })

    it.skip('Navbar should have two CTA with correct text and links', () => {
        cy.get('[data-id=35b1ca6] .elementor-button-text').should('have.text', '30 minutes gratuites');
        cy.get('[data-id=35b1ca6] a').should(($a) => {
            const href = $a[0].href;
            expect(href).to.equal('https://calendly.com/olivierbrassard');
        });
        cy.get('[data-id=57c8365] .elementor-button-text').should('have.text', 'Connexion');
        cy.get('[data-id=57c8365] a').click();
        cy.url().should('eq', 'https://tooly.ca/404');
        cy.go('back');
    })

    it.skip('"Services" should show a hover menu with specified text', () => {
        cy.get('#menu-1-e359eea > li ul').invoke('show');
        cy.get('#menu-1-e359eea > li ul > li').eq(0).should('have.text', 'Formations logiciels');
        cy.get('#menu-1-e359eea > li ul > li').eq(0).click();
        cy.url().should('eq', 'https://tooly.ca/formations-logiciels/');
        cy.go('back');
        cy.get('#menu-1-e359eea > li ul').invoke('show');
        cy.get('#menu-1-e359eea > li ul > li').eq(1).should('have.text', 'Recommandation de logiciels');
        cy.get('#menu-1-e359eea > li ul > li').eq(1).click();
        cy.url().should('eq', 'https://tooly.ca/recommandation-de-logiciels/');
        cy.go('back');
    })

    //Hero section
    it.skip('Should render the heading and subheading in the hero-section', () => {
        cy.get('[data-id=d82f214] h2').should('have.text', 'Une expertise\nnumérique dédiée\naux entreprises\nde services');
        cy.get('[data-id=d82f214] p').should('have.text', 'Nos experts aident les entreprises de services à utiliser la technologie pour saisir des occasions de croissance.Dépassez vos objectifs grâce à une transformation numérique réussie.');
    })
    
    it.skip('Should render the button in the hero-section with correct link and text', () => {
        cy.get('[data-id=d82f214] .elementor-button-text').should('have.text', 'En savoir plus');
        cy.get('[data-id=d82f214] a').click();
        cy.url().should('eq', 'https://tooly.ca/entreprise-de-services/');
        cy.go('back');
    })

    it.skip('Should render the hero-section image', () => {
        cy.get('[data-id=d82f214] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/tooyl-1.png')
        });
    })
    
    //Our services section
    it.skip('Should render the heading and subheading in our services section', () => {
        cy.get('[data-id=67c40d3] h2').should('have.text', 'La meilleure expérience de transformation numérique');
        cy.get('[data-id=67c40d3] p').should('have.text', 'Tooly accompagne votre entreprise de services à toutes les étapes, du choix de vos logiciels à leur intégration et leur\u00a0 implémentation, en passant par la formation de vos équipes.');
    })
    
    it.skip('Should render the button in our services section with correct link and text', () => {
        cy.get('[data-id=67c40d3] .elementor-button-text').should('have.text', 'Découvrir nos services');
        cy.get('[data-id=67c40d3] a').click();
        cy.url().should('eq', 'https://tooly.ca/services/');
        cy.go('back');
    })

    it.skip('Should render the our services section image', () => {
        cy.get('[data-id=67c40d3] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image2.png')
        });
    })

    //Request demo section
    it.skip('Should render the heading and subheading in the hero-section', () => {
        cy.get('[data-id=3f1872c] h2').should('have.text', "Vous êtes en pénurie de\nmain-d'oeuvre?");
        cy.get('[data-id=3f1872c] p').should('have.text', 'Tooly est là pour vous !Plusieurs logiciels peuvent vous permettre de croître malgré cette pénurie. Augmentez votre productivité et automatisez vos processus pour assurer votre croissance.');
    })
    
    it.skip('Should render the button in the hero-section with correct link and text', () => {
        cy.get('[data-id=3f1872c] .elementor-button-text').should('have.text', 'Demander une démo');
        cy.get('[data-id=3f1872c] a').should(($a) => {
            const href = $a[0].href;
            expect(href).to.equal('https://calendly.com/olivierbrassard');
        });
    })

    it.skip('Should render the hero-section image', () => {
        cy.get('[data-id=3f1872c] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image31.png')
        });
    })

    //Training section
    it.skip('Should render the heading and subheading in the hero-section', () => {
        cy.get('[data-id=1cddf41] h2').should('have.text', 'Soyez maître de vos technologies');
        cy.get('[data-id=1cddf41] p').should('have.text', 'Offrez à vos équipes un accompagnement unique grâce à des formateurs experts en logiciels.');
    })
    
    it.skip('Should render the button in the hero-section with correct link and text', () => {
        cy.get('[data-id=1cddf41] .elementor-button-text').should('have.text', 'Découvrir nos formations');
        cy.get('[data-id=1cddf41] a').click();
        cy.url().should('eq', 'https://tooly.ca/formations-logiciels/');
        cy.go('back');
    })

    it.skip('Should render the hero-section image', () => {
        cy.get('[data-id=1cddf41] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image4.png')
        });
    })

    //Training sub section
    it('Should render the text in the Training sub section', () => {
        cy.get('[data-id=9969127] p').eq(0).should('have.text', 'Nos formations sont accessibles et permettront à vos équipes d’utiliser vos logiciels facilement.');
        cy.get('[data-id=9969127] p').eq(1).should('have.text', 'Grâce à nos formateurs pédagogues, vous aurez toutes les cartes en main pour maîtriser vos solutions numériques.');
    })

    it('Should render the Training sub section image', () => {
        cy.get('[data-id=9969127] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image5.png');
        });
    })

})