const { expect } = require('chai');
const sinon = require('sinon');

const servicesProducts = require('../../../src/services/productService');

const productsModel = require('../../../src/models/productsModel');


const arrayProducts = [
  {
    id:1,
    name: "bola",
  },
  {
    id: 2,
    name: "chuteira",
  }
];

const productIncluded = {
  id:1,
  name: "bola",
};

const noIdProduct = {
  name: "chuteira",
  quantity:3,
}

const arrayProductInclude = [{
  id:1,
  name: "bola",
}];


describe('1 Testando camada service', () => {
  describe('1.1 Services de products', () => {

    describe('1.1.1 Testa add', () => {
      before(() => {
        sinon.stub(productsModel, 'add').resolves(productIncluded);
      });
      after(() => {
        productsModel.add.restore();
      });

      it('incluindo produto', async() => {
        const response = await servicesProducts.addProduct();
        expect(response).to.be.deep.equal(productIncluded);
      });
    });

    // describe('1.1.2 allProducts', () => {
    //   before(() => {
    //     sinon.stub(productsModel, 'getAll').resolves(arrayProducts);
    //   });
    //   after(() => {
    //     productsModel.getAll.restore();
    //   });

    //   it('Listando todos os produtos', async() => {
    //     const response = await servicesProducts.getAll();
    //     expect(response).to.be.deep.equal(arrayProducts);
    //   });
    // });

    // describe('1.1.3 testando getId', () => {
    //   before(() => {
    //     sinon.stub(productsModel, 'getId').resolves(noIdProduct);
    //   });
    //   after(() => {
    //     productsModel.getId.restore();
    //   });

    //   it('Exibindo produto', async() => {
    //     const response = await servicesProducts.getId();
    //     expect(response).to.be.deep.equal(noIdProduct);
    //   });
    // });

    describe('1.1.4 testando updateProduct', () => {
      before(() => {
        sinon.stub(productsModel, 'updateProductId').resolves(arrayProductInclude);
      });
      after(() => {
        productsModel.updateProductId.restore();
      });

      it('alterando produto', async() => {
        const response = await servicesProducts.updateProduct("bola",1);
        expect(response).to.be.deep.equal(arrayProductInclude[0]);
      });
    });

    // describe('1.1.5 deleteProducts', () => {
    //   before(() => {
    //     sinon.stub(productsModel, 'deleteProductId').resolves(arrayProductDelete);
    //   });
    //   after(() => {
    //     productsModel.deleteProductId.restore();
    //   });

    //   it('deletando produto', async() => {
    //     const response = await servicesProducts.deleteProduct(1);
    //     expect(response).to.be.deep.equal(undefined);
    //   });
    // });
  });
});
