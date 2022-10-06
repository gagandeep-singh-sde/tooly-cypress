/// <reference types='cypress' />
describe('Landing page test for large screens', () => {

    beforeEach(() => {
        cy.visit('https://tooly.ca')
        cy.viewport('macbook-16');
    })

    // Header section
    it('Should render the tooly logo', () => {
        cy.get('[data-id=3b581f0] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Vector2.png')
        });
    })

    it('Should have correct link on the logo', () => {
        cy.get('[data-id=3b581f0] a').click();
        cy.url().should('eq', 'https://tooly.ca/')
    })

    it('Navbar should have five items with correct text and links', () => {
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

    it('Navbar should have two CTA with correct text and links', () => {
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

    it('"Services" should show a hover menu with specified text', () => {
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
    it('Should render the heading and subheading in the hero-section', () => {
        cy.get('[data-id=d82f214] h2').should('have.text', 'Une expertise\nnumérique dédiée\naux entreprises\nde services');
        cy.get('[data-id=d82f214] p').should('have.text', 'Nos experts aident les entreprises de services à utiliser la technologie pour saisir des occasions de croissance.Dépassez vos objectifs grâce à une transformation numérique réussie.');
    })
    
    it('Should render the button in the hero-section with correct link and text', () => {
        cy.get('[data-id=d82f214] .elementor-button-text').should('have.text', 'En savoir plus');
        cy.get('[data-id=d82f214] a').click();
        cy.url().should('eq', 'https://tooly.ca/entreprise-de-services/');
        cy.go('back');
    })

    it('Should render the hero-section image', () => {
        cy.get('[data-id=d82f214] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/tooyl-1.png')
        });
    })
    
    //Our services section
    it('Should render the heading and subheading in our services section', () => {
        cy.get('[data-id=67c40d3] h2').should('have.text', 'La meilleure expérience de transformation numérique');
        cy.get('[data-id=67c40d3] p').should('have.text', 'Tooly accompagne votre entreprise de services à toutes les étapes, du choix de vos logiciels à leur intégration et leur\u00a0 implémentation, en passant par la formation de vos équipes.');
    })
    
    it('Should render the button in our services section with correct link and text', () => {
        cy.get('[data-id=67c40d3] .elementor-button-text').should('have.text', 'Découvrir nos services');
        cy.get('[data-id=67c40d3] a').click();
        cy.url().should('eq', 'https://tooly.ca/services/');
        cy.go('back');
    })

    it('Should render the our services section image', () => {
        cy.get('[data-id=67c40d3] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image2.png')
        });
    })

    //Request demo section
    it('Should render the heading and subheading in the Request demo section', () => {
        cy.get('[data-id=3f1872c] h2').should('have.text', "Vous êtes en pénurie de\nmain-d'oeuvre?");
        cy.get('[data-id=3f1872c] p').should('have.text', 'Tooly est là pour vous !Plusieurs logiciels peuvent vous permettre de croître malgré cette pénurie. Augmentez votre productivité et automatisez vos processus pour assurer votre croissance.');
    })
    
    it('Should render the button in the Request demo section with correct link and text', () => {
        cy.get('[data-id=3f1872c] .elementor-button-text').should('have.text', 'Demander une démo');
        cy.get('[data-id=3f1872c] a').should(($a) => {
            const href = $a[0].href;
            expect(href).to.equal('https://calendly.com/olivierbrassard');
        });
    })

    it('Should render the Request demo section image', () => {
        cy.get('[data-id=3f1872c] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image31.png')
        });
    })

    //Training section
    it('Should render the heading and subheading in the Training section', () => {
        cy.get('[data-id=1cddf41] h2').should('have.text', 'Soyez maître de vos technologies');
        cy.get('[data-id=1cddf41] p').should('have.text', 'Offrez à vos équipes un accompagnement unique grâce à des formateurs experts en logiciels.');
    })
    
    it('Should render the button in the Training section with correct link and text', () => {
        cy.get('[data-id=1cddf41] .elementor-button-text').should('have.text', 'Découvrir nos formations');
        cy.get('[data-id=1cddf41] a').click();
        cy.url().should('eq', 'https://tooly.ca/formations-logiciels/');
        cy.go('back');
    })

    it('Should render the Training section image', () => {
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

    //Choose us section
    it('Should render the heading and subheading in the Choose us section', () => {
        cy.get('[data-id=dee0128] h2').should('have.text', 'Pourquoi \nnous choisir ?');
        cy.get('[data-id=dee0128] p').should('have.text', 'Vous êtes une entreprise de services en pleine croissance à la recherche d’un partenaire technologique?Nous pouvons vous accompagner dans votre transformation numérique!Grâce à notre expertise, notre croissance a été fulgurante, et nous souhaitons mettre nos compétences au service de votre entreprise.');
    })
    
    it('Should render the button in the Choose us section with correct link and text', () => {
        cy.get('[data-id=dee0128] .elementor-button-text').should('have.text', 'En savoir plus');
        cy.get('[data-id=dee0128] a').click();
        cy.url().should('eq', 'https://tooly.ca/a-propos/');
        cy.go('back');
    })

    it('Should render the Choose us section image', () => {
        cy.get('[data-id=dee0128] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image6.png')
        });
    })

    //Benefit Section
    it('Should render the correct heading for the benefit section', () => {
        cy.get('[data-id=f96abce] h2').should('have.text', 'Les avantages de faire affaire\navec Tooly ');
    })
    //First tile
    it('Should render the correct image of first tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/image7.png')
        });
    })

    it('Should render the correct sub heading of the first for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-heading h4').eq(0).should('have.text', 'Automatisation des tâches manuelles');
    })

    it('Should render the correct text of first tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-text-editor p').eq(0).should('have.text', 'Économisez entre 5 et 20h par semaine en automatisant vos processus.');
    })

    //Second tile
    it('Should render the correct image of second tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[1].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20723.png')
        });
    })

    it('Should render the correct sub heading of the second for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-heading h4').eq(1).should('have.text', 'Bien-être\ndes employés');
    })

    it('Should render the correct text of second tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-text-editor p').eq(1).should('have.text', 'Former pour mieux travailler. Modernisez vos logiciels pour les nouvelles générations.');
    })

    //Third tile
    it('Should render the correct image of third tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[2].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20724.png')
        });
    })

    it('Should render the correct sub heading of the third for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-heading h4').eq(2).should('have.text', 'Forte\ncroissance');
    })

    it('Should render the correct text of third tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-text-editor p').eq(2).should('have.text', 'Nos clients ont vu leurs entreprises de services grandir quatre fois plus vite grâce à notre accompagnement.');
    })

    //Fourth tile
    it('Should render the correct image of fourth tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[3].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/saly241Png.png')
        });
    })

    it('Should render the correct sub heading of the fourth for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-heading h4').eq(3).should('have.text', 'Indépendance');
    })

    it('Should render the correct text of fourth tile for the benefit section', () => {
        cy.get('[data-id=7f714eb] .elementor-widget-text-editor p').eq(3).should('have.text', 'Notre objectif est que vous n’ayez plus besoin de nous à la fin de notre accompagnement.Nous vous rendons indépendant !');
    })

    //Processes Section
    it('Should render the correct heading for the benefit section', () => {
        cy.get('[data-id=6c83c97] h2').should('have.text', 'Voici quelques processus \nque nous maîtrisons');
    })

    //First tile
    it('Should render the correct image of first tile for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/frame2791Png.png')
        });
    })

    it('Should render the correct sub heading of the first for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-heading h4').eq(0).should('have.text', 'Ventes');
    })

    it('Should render the correct text of first tile for the processes section', () => {
        cy.get('[data-id=40536a1] ul li').eq(0).should('have.text', '\u00a0Simplifier et automatiser la création de facture');
    })
    it('Should render the correct text of first tile for the processes section', () => {
        cy.get('[data-id=40536a1] ul li').eq(1).should('have.text', 'Simplifier et automatiser la création de soumission');
    })
    it('Should render the correct text of first tile for the processes section', () => {
        cy.get('[data-id=40536a1] ul li').eq(2).should('have.text', 'Simplifier et automatiser la création d’un bon de commande');
    })
    it('Should render the correct text of first tile for the processes section', () => {
        cy.get('[data-id=40536a1] ul li').eq(3).should('have.text', 'Numériser et automatiser le processus de signature de contrat');
    })
    it('Should render the correct text of first tile for the processes section', () => {
        cy.get('[data-id=40536a1] ul li').eq(4).should('have.text', 'Automatiser la prise des paiements de vos clients');
    })
    
    //Second tile
    it('Should render the correct image of second tile for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[1].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/frame2792Png.png')
        });
    })

    it('Should render the correct sub heading of the second for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-heading h4').eq(1).should('have.text', 'Fidélisation de la clientèle');
    })

    it('Should render the correct text of second tile for the processes section', () => {
        cy.get('[data-id=9b87e2b] ul li').eq(0).should('have.text', '\u00a0Simplifier et automatiser le service à la clientèle');
    })
    it('Should render the correct text of second tile for the processes section', () => {
        cy.get('[data-id=9b87e2b] ul li').eq(1).should('have.text', 'Simplifier et automatiser les demandes de changement de vos clients pendant une production');
    })
    it('Should render the correct text of second tile for the processes section', () => {
        cy.get('[data-id=9b87e2b] ul li').eq(2).should('have.text', 'Automatiser la prise de rendez-vous avec vos clients');
    })
    it('Should render the correct text of second tile for the processes section', () => {
        cy.get('[data-id=9b87e2b] ul li').eq(3).should('have.text', 'Automatiser les rappels pour rejoindre vos clients potentiels');
    }) 
    
    //Third tile
    it('Should render the correct image of third tile for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[2].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/frame2794Png.png')
        });
    })

    it('Should render the correct sub heading of the third for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-heading h4').eq(2).should('have.text', 'Gestion\ndes ressources humaines');
    })

    it('Should render the correct text of third tile for the processes section', () => {
        cy.get('[data-id=06f6af7] ul li').eq(0).should('have.text', '\u00a0Simplifier la répartition des bons de travail et les horaires');
    })
    it('Should render the correct text of third tile for the processes section', () => {
        cy.get('[data-id=06f6af7] ul li').eq(1).should('have.text', 'Simplifier la gestion du recrutement');
    })
    it('Should render the correct text of third tile for the processes section', () => {
        cy.get('[data-id=06f6af7] ul li').eq(2).should('have.text', 'Numériser et simplifier l’entrée de temps des employés');
    })
    
    //Fourth tile
    it('Should render the correct image of fourth tile for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[3].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/frame2795Png.png')
        });
    })

    it('Should render the correct sub heading of the fourth for the processes section', () => {
        cy.get('[data-id=43acf58] .elementor-widget-heading h4').eq(3).should('have.text', 'Logistique');
    })

    it('Should render the correct text of fourth tile for the processes section', () => {
        cy.get('[data-id=3ee4ba0] ul li').eq(0).should('have.text', 'Numériser et simplifier le suivi de l’inventaire');
    })
    it('Should render the correct text of fourth tile for the processes section', () => {
        cy.get('[data-id=3ee4ba0] ul li').eq(1).should('have.text', 'Automatiser la création de routes efficaces pour les équipes sur le terrain ');
    })

    //Support Section
    it('Should render the correct heading for the support section', () => {
        cy.get('[data-id=d3c3290] h2').should('have.text', 'Les garanties de notre accompagnement');
    })
    //First tile
    it('Should render the correct image of first tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/saly245Png.png')
        });
    })

    it('Should render the correct sub heading of the first for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-heading h4').eq(0).should('have.text', "L'économie de temps");
    })

    it('Should render the correct text of first tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-text-editor p').eq(0).should('have.text', 'Économisez au moins 10 heures en profitant de notre offre gratuite de recommandation de logiciels adaptée à vos besoins.');
    })

    //Second tile
    it('Should render the correct image of second tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[1].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20726.png')
        });
    })

    it('Should render the correct sub heading of the second for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-heading h4').eq(1).should('have.text', "La transparence");
    })

    it('Should render the correct text of second tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-text-editor p').eq(1).should('have.text', 'Lisez le témoignage de clients satisfaits de leur expérience de transformation numérique.');
    })

    //Third tile
    it('Should render the correct image of third tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[2].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20725.png')
        });
    })

    it('Should render the correct sub heading of the third for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-heading h4').eq(2).should('have.text', "Le suivi des heures");
    })

    it('Should render the correct text of third tile for the support section', () => {
        cy.get('[data-id=a01e2a8] .elementor-widget-text-editor p').eq(2).should('have.text', 'Obtenez un rapport détaillé des heures enregistrées. Notre objectif est de créer le plus de valeur possible, en un minimum de temps.');
    })

    //Promo Section
    it('Should render the correct heading for the promo section', () => {
        cy.get('[data-id=de02738] h2').should('have.text', 'Dites adieu \naux difficultés');
    })
    //First tile
    it('Should render the correct image of first tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20729.png')
        });
    })

    it('Should render the correct sub heading of the first for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-heading h4').eq(0).should('have.text', "Perte de temps");
    })

    it('Should render the correct text of first tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-text-editor p').eq(0).should('have.text', 'Automatisez vos processus et évitez la saisie manuelle causée par des logiciels non connectés/synchronisés.');
    })

    //Second tile
    it('Should render the correct image of second tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[1].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20730.png')
        });
    })

    it('Should render the correct sub heading of the second for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-heading h4').eq(1).should('have.text', "Dépenses inutiles");
    })

    it('Should render the correct text of second tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-text-editor p').eq(1).should('have.text', 'Des solutions adaptées à vos besoins vous éviteront de dépenser des centaines de dollars dans des logiciels que vous n’utilisez pas.');
    })

    //Third tile
    it('Should render the correct image of third tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-image img').should(($img) => {
            const imageSrc = $img[2].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/Group-20728.png')
        });
    })

    it('Should render the correct sub heading of the third for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-heading h4').eq(2).should('have.text', "Recherches sans fin");
    })

    it('Should render the correct text of third tile for the promo section', () => {
        cy.get('[data-id=de58644] .elementor-widget-text-editor p').eq(2).should('have.text', 'Ne perdez plus votre temps à trouver le bon logiciel et arrêtez de vous casser la tête avec les acronymes (SAAS, CRM, ERP, POS, PMS, CMS, PSA, etc.)');
    })

    //CTA section
    it('Should render the CTA section image', () => {
        cy.get('[data-id=644e718] img').should(($img) => {
            const imageSrc = $img[0].src;
            expect(imageSrc).to.equal('https://tooly.ca/wp-content/uploads/2022/08/saly22Png.png')
        });
    })

    it('Should render the heading and subheading in the CTA section', () => {
        cy.get('[data-id=644e718] h2').should('have.text', "Il nous suffit de 30 min\npour changer\nvotre quotidien ");
        cy.get('[data-id=644e718] p').eq(0).should('have.text', 'Demandez un rendez-vous gratuit de 30 minutesavec l’un de nos experts et prenez la chancede changer votre quotidien!');
        cy.get('[data-id=644e718] p').eq(1).should('have.text', 'Ce n’est qu’un aperçu de ce que Toolypeut vous apporter.');
        cy.get('[data-id=644e718] p').eq(2).should('have.text', 'Contactez-nous !');
    })
    
    it('Should render the button in the CTA section with correct link and text', () => {
        cy.get('[data-id=644e718] .elementor-button-text').should('have.text', '30 minutes gratuites');
        cy.get('[data-id=644e718] a').should(($a) => {
            const href = $a[0].href;
            expect(href).to.equal('https://calendly.com/olivierbrassard');
        });
    })

})