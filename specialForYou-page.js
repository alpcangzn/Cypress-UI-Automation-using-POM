/// <reference types="cypress" />



export class SpecialForYouPage {



    navigate() {
        cy.visit('https://sanaozel.hepsiburada.com/');
        cy.url().should('eq','https://sanaozel.hepsiburada.com/');
     
        cy.wait(2000); 
    }

    efsoPageController() {
        cy.wait(3000);
        cy.get("[class*='campaign-EfsoIntroductionBanner'] picture").scrollIntoView().click();
        cy.url().should('eq','https://efsanegenclik.hepsiburada.com/')
    }

    efsoBannerController() {
        cy.get("[class*='campaign-EfsoIntroductionBanner'] picture").scrollIntoView().should('be.visible');
    }

    specialOffersForYouController(){
        cy.get("[class*='campaign-EfsoIntroductionBanner'] picture").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-SpecialOffersForYou']").scrollIntoView().should('have.text', 'Süper fırsatlar');
    } 

    specialOffersForYouCampaignToBasket(){
        cy.get("[class*='campaign-EfsoIntroductionBanner'] picture").scrollIntoView();
        cy.get("h3[class^='campaign-SpecialOffersForYou']").scrollIntoView();
        //click();
        //console.log('url control'+cy.url());
        //cy.url().should('eq','https://checkout.hepsiburada.com/sepetim');
    }

    inspiredByYouController(){
        cy.get("[class*='InspiredByYouContainer']").scrollIntoView();
        cy.wait(2000);
        cy.wait(300);
        //cy.get("[class*='campaign-SpecialOffersForYou-3yOA_']").scrollIntoView();
        cy.get("h3[class^='campaign-InspiredByYou']").scrollIntoView().should('have.text', 'Kaçırılmayacak ürünler');
    }

    inspiredByYouToBasket(){
        // cy.get("[class*='campaign-EfsoIntroductionBanner'] picture").scrollIntoView();
        // cy.get("[class*='campaign-SpecialOffersForYou-3yOA_']").scrollIntoView();
        // cy.get("[class*='campaign-InspiredByYou-2WP28']").scrollIntoView().should('have.text', 'Kaçırılmayacak ürünler');
        cy.get("[class*='campaign-InspiredByYou-36PIH']").find('button').last().click({force:true})
        cy.get("[class*='hb-toast-link']").should('have.text', 'Sepete git');
    }

    mayInterestedController(){
        cy.get("[class*='YouMayInterestedContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-MayInterested']").scrollIntoView().should('have.text', "İlgini çekebilecek ürünler");
        cy.get("h4[class^='campaign-MayInterested']").scrollIntoView().should('have.text', "Bu ürünler tam senlik olabilir, bizce bi' incele");
    }

    mayInterestedToBasket(){
        cy.get("[class*='campaign-MayInterested-sVzAM']").find('button').first().click({force:true})
        cy.get("[class*='hb-toast-link']").should('have.text', 'Sepete git');
    }

    mayLikeProductsController(){
        cy.get("[class*='youMayLikeContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-MayLikeProducts']").scrollIntoView().should('have.text', 'Satın aldıklarına özel');
        cy.get("h4[class^='campaign-MayLikeProducts']").scrollIntoView().should('have.text', 'Sıklıkla birlikte alınan ürünler');
    }

    mayLikeProductsToBasket(){
        cy.get("[class*='campaign-MayLikeProducts-3X5iI']").find('button').last().click({force:true})
        cy.get("[class*='hb-toast-link']").should('have.text', 'Sepete git');
    }

    specialCategoriesForYouController(){
        cy.get("[class*='specialCategoriesContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-SpecialCategoriesForYou']").scrollIntoView().should('have.text', 'Sana özel seçtiğimiz kategoriler');
    }

    specialCategoriesForYouToCategoryPage(){
        cy.get("[class*='campaign-SpecialCategoryCard-1y19U'").first().click();
        //cy.url().should('eq','https://www.hepsiburada.com/sac-bakim-urunleri-c-26012111');
    }
     
    specialForYouBrandsController(){
        cy.get("[class*='specialBrandsContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-SpecialForYouBrands']").scrollIntoView().should('have.text', 'Sana özel seçtiğimiz markalar');
    }

    specialForYouBrandsToBrandPage(){
        cy.get("[class*='campaign-BrandBox-2H_6Y'").first().click();
        //cy.url().should('eq','https://www.hepsiburada.com/elidor');
    }

    mayRequiredsController(){
        cy.get("[class*='mayRequiredContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='campaign-MayRequireds']").scrollIntoView().should('have.text', 'En çok tercih edilen günlük ihtiyaçlar');
    }

    mayRequiredsToBasket(){
        cy.get("[class*='campaign-MayRequireds']").find('button').first().click({force:true})
        cy.get("[class*='hb-toast-link']").should('have.text', 'Sepete git');
    }

    discoverNowsController(){
        cy.get("[class*='discoverNowContainer']").scrollIntoView();
        cy.wait(2000);
        cy.get("h3[class^='discoverNowTitle']").scrollIntoView().should('have.text', 'Hemen keşfet');
    }

    discoverNowsToHepsiburadaMarket(){
        cy.get("div[class^='discoverNowLinks']").find('a').first().click();
        cy.url().should('eq','https://www.hepsiexpress.com/');
    }

    discoverNowsToHepsipay(){
        cy.get("div[class^='discoverNowLinks']").find('a').eq(1).click();
        cy.url().should('eq','https://www.hepsipay.com/');
    }

    discoverNowsToHepsiburadaSeyahat(){
        cy.get("div[class^='discoverNowLinks']").find('a').eq(2).click();
        cy.url().should('eq','https://www.hepsiburadaseyahat.com/?utm_source=hepsiburada&utm_medium=web&utm_campaign=sanaozel_hepsiburada_web');
    }

    discoverNowsToHepsiglobal(){
        cy.get("div[class^='discoverNowLinks']").find('a').eq(3).click();
        cy.url().should('eq','https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler');
    }

    hepsiadsSponProductController(){
        cy.get("[class*='sponsored-products-container']").scrollIntoView();
        cy.wait(2000);
        cy.get("[class^='hepsiads-SponProduct-title']").scrollIntoView().should('have.text', 'Önerilen reklamlı ürünler');
    }

    hepsiadsSponProductToBasket(){
        cy.get("[class*='hepsiads-SponProduct-recoProduct']").find('button').first().click({force:true})
        cy.get("[class*='hb-toast-link']").should('have.text', 'Sepete git');
    }

    efsostate(){
        
        const mockEfsoResponse = {
            success: true,
            data: {
              showIntroductionBanner: false,
              showEfsoComponent: true,
              showStandardSpecialForYou: false,
              showEfsoExitMessage: false
            }
          }
        cy.intercept('GET','https://customer-gw.hepsiburada.com/api/customers/efso/state',mockEfsoResponse).as('getEfsoState')
        cy.visit('https://sanaozel.hepsiburada.com/');
        cy.wait('@getEfsoState');
    }

    efsoAdvantegesController(){
        cy.get("[class*='efsoAdvantages']").scrollIntoView();
        cy.wait(2000);
        cy.get("h2[class^='campaign-EfsoAdvantages']").scrollIntoView().should('have.text', 'Efsane Gençlik avantajları');
    }
}


