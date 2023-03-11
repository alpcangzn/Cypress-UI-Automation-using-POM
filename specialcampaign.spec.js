/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page";
import { SpecialForYouPage } from "../page-objects/specialForYou-page";

context('Sana Ozel Sayfası', () => {
    const loginPage = new LoginPage();
    const specialForYouPage = new SpecialForYouPage();

    beforeEach(() => {
        loginPage.navigate();
        loginPage.login();

      
    })
    
    it('C332141 - Efsolu Olmayan Hesap ile Sana Özel Sayfasına Giriş', () => {
        specialForYouPage.navigate();
    })

    it('C332146 - Efsolu Olmayan Hesap ile Efso Intro Bannerinin Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.efsoBannerController();
    })

    it('C332147 - Efsolu Olmayan Hesap ile Efso Intro Bannerindan Efso Sayfasına Gitmek', () => {
        specialForYouPage.navigate();
        specialForYouPage.efsoPageController();
    })

    it('C332148 - Sana Özel Sayfasında Süper fırsatlar Tabinin Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialOffersForYouController();
    })

    it('C332149 - Sana Özel Sayfasında Süper fırsatlar Tabindeki Bir Kampanyanyaya Tıklanması', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialOffersForYouCampaignToBasket();
    })

    it('C332150 - Sana Özel Sayfasında Kaçırılmayacak ürünler Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.inspiredByYouController();
    })

    it('C332151 - Sana Özel Sayfasında Kaçırılmayacak ürünler Recosundaki Herhangi Bir Ürünün Sepete Eklenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.inspiredByYouController();
        specialForYouPage.inspiredByYouToBasket();
    })

    it('C332152 - Sana Özel Sayfasında İlgini çekebilecek ürünler Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayInterestedController();
    })

    it('C332153 - Sana Özel Sayfasında İlgini çekebilecek ürünler Recosundaki Herhangi Bir Ürünün Sepete Eklenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayInterestedController();
        specialForYouPage.mayInterestedToBasket();
    })

    it('C332154 - Sana Özel Sayfasında Satın aldıklarına özel Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayLikeProductsController();
    })

    it('C332155 - Sana Özel Sayfasında Satın aldıklarına özel Recosundaki Herhangi Bir Ürünün Sepete Eklenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayLikeProductsController();
        specialForYouPage.mayLikeProductsToBasket();
    })

    it('C332156 - Sana Özel Sayfasında Sana özel seçtiğimiz kategoriler Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialCategoriesForYouController();
    })

    it('C332157 - Sana Özel Sayfasında Satın aldıklarına özel Recosundaki Herhangi Bir Ürünün Sepete Eklenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialCategoriesForYouController();
        specialForYouPage.specialCategoriesForYouToCategoryPage();
    })

    it('C342003 - Sana Özel Sayfasında Sana özel seçtiğimiz markalar Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialForYouBrandsController();
    })

    it('C342004 - Sana Özel Sayfasında Sana özel seçtiğimiz markalar Recosundaki Bir Markaya Gidilebilmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.specialForYouBrandsController();
        specialForYouPage.specialForYouBrandsToBrandPage();
    })

    it('C342005 - Sana Özel Sayfasında En çok tercih edilen günlük ihtiyaçlar Recosunun Görüntülenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayRequiredsController();
    })

    it('C342006 - Sana Özel Sayfasında En çok tercih edilen günlük ihtiyaçlar Recosundaki Bir Ürünün Sepete Eklenmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.mayRequiredsController();
        specialForYouPage.mayRequiredsToBasket();
    })

    it('C342007 - Sana Özel Sayfasında Hemen keşfet Componentinin Görüntülenmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.discoverNowsController();
    })

    it('C342008 - Sana Özel Sayfasında Hemen keşfet Componentinden Hepsiburada Markete Gidilmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.discoverNowsController();
        specialForYouPage.discoverNowsToHepsiburadaMarket();
    })

    it('C342009 - Sana Özel Sayfasında Hemen keşfet Componentinden Hepsipaye Gidilmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.discoverNowsController();
        specialForYouPage.discoverNowsToHepsipay();
    })

    it('C342010 - Sana Özel Sayfasında Hemen keşfet Componentinden Hepsiburada Seyahate Gidilmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.discoverNowsController();
        specialForYouPage.discoverNowsToHepsiburadaSeyahat();
    })

    it('C342011 - Sana Özel Sayfasında Hemen keşfet Componentinden Hepsiglobale Gidilmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.discoverNowsController();
        specialForYouPage.discoverNowsToHepsiglobal();
    })

    it('C358224 - Sana Özel Sayfasında Önerilen reklamlı ürünler Recosunun Görüntülenmesi ', () => {
        specialForYouPage.navigate();
        specialForYouPage.hepsiadsSponProductController();
    })

    it('C358225 - Sana Özel Sayfasında Önerilen reklamlı ürünler Recosundaki Bir Ürünün Sepete Eklenmesi', () => {
        specialForYouPage.navigate();
        specialForYouPage.hepsiadsSponProductController();
        specialForYouPage.hepsiadsSponProductToBasket();

    })

    it('C332143 - Efsolu Olan Hesap ile Sana Özel Sayfasına Giriş', () => {
        specialForYouPage.efsostate();
    })

    it('C342012 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajları Componentinin Görüntülenmesi', () => {
        specialForYouPage.efsostate();
        specialForYouPage.efsoAdvantegesController();
    })
    
    it('C342013 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Burada ilklerin yeri başka Componentinin Görüntülenmesi', () => {
        specialForYouPage.efsostate();
        specialForYouPage.efsoAdvantegesController();
        cy.get("[class^='campaign-EfsoCard']").find('p').first().should('have.text', 'Burada ilklerin yeri başka');
    })

    it('C342014 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında SenLİNK bi durum var Componentinin Görüntülenmesi', () => {
        specialForYouPage.efsostate();
        specialForYouPage.efsoAdvantegesController();
        cy.get("[class^='campaign-EfsoCard']").find('p').eq(1).should('have.text', `SenLİNK bi' durum var ;)`);
    })

    it('C342015 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Çok Premium hareket Componentinin Görüntülenmesi', () => {
        specialForYouPage.efsostate();
        specialForYouPage.efsoAdvantegesController();
        cy.get("[class^='campaign-EfsoCard']").find('p').eq(2).should('have.text', 'Çok Premium hareket');
    })

    it('C342016 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Burada ilklerin yeri başka Componentine Tıklanması', () => {
           specialForYouPage.efsostate();
           specialForYouPage.efsoAdvantegesController();
           cy.get("[class^='campaign-EfsoCard']").find('p').first().should('have.text', 'Burada ilklerin yeri başka').click();
           cy.url().should('eq','https://efsanegenclik.hepsiburada.com/');
    })

    it('C342017 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında SenLİNK bi durum var  Componentine Tıklanması', () => {
            specialForYouPage.efsostate();
            specialForYouPage.efsoAdvantegesController();
            cy.get("[class^='campaign-EfsoCard']").find('p').eq(1).should('have.text', `SenLİNK bi' durum var ;)`).click();
            cy.url().should('eq','https://www.hepsiburada.com/link-gelir');
         })

    it('C342018 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Çok Premium hareket Componentine Tıklanması', () => {
            specialForYouPage.efsostate();
            specialForYouPage.efsoAdvantegesController();
            cy.get("[class^='campaign-EfsoCard']").find('p').eq(2).should('have.text', 'Çok Premium hareket').click();
            cy.url().should('eq','https://www.hepsiburada.com/premium');
        })

    it('C342130 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Daha fazla bilgi al butonunun Görüntülenmesi', () => {
            specialForYouPage.efsostate();
            specialForYouPage.efsoAdvantegesController();
            cy.get("[class^='efsoAdvantages']").find('a').eq(0).should('have.text', 'Daha fazla bilgi al');
        })

    it('C342131 - Efsolu Olan Hesap ile Sana Özel Sayfasında Efsane Gençlik avantajlarında Daha fazla bilgi al butonuna Tıklanması', () => {
            specialForYouPage.efsostate();
            specialForYouPage.efsoAdvantegesController();
            cy.get("[class^='efsoAdvantages']").find('a').eq(0).should('have.text', 'Daha fazla bilgi al').click();
            cy.url().should('eq','https://efsanegenclik.hepsiburada.com/');
        })

})
