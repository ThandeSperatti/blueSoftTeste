import checkoutPage from "../support/checkoutPage";
import menuPage from "../support/menupage";
import productPage from "../support/productPage";
import accountPage from "../support/accountPage";

describe('Testes BlueSoft', () => {
    it('Realizar consulta e compra', () => {
        menuPage.acessarSite();
        menuPage.consultarShirt();
        productPage.selecionarItem();
        productPage.validarCarrinho();
        checkoutPage.realizarCheckout();
        checkoutPage.validarCompra();
    })

    it('Criar conta', () =>{
        menuPage.acessarSite();
        accountPage.criarConta();
        accountPage.preencheInfos();
        accountPage.validaCriacaoConta();
    })
    
    it('Valida inclusão de produto no carrinho', () =>{
        menuPage.acessarSite();
        productPage.selecionaProdutoMasc();
        productPage.validarCarrinho();
    })

    it.only('Adicionar comentário', () =>{
        menuPage.acessarSite();
        productPage.selecionaProdutoMasc();
        productPage.adicionarComentario();
    })
})