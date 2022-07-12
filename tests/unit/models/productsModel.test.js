const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

const CONTEUDO_DO_ARRAY_GETALL = [[
  {
    id: 1,
    name: "produto A"
  },
  {
    id: 2,
    name: "produto B"
  }
]]

const CONTEUDO_ARRAY_GET_ID = [[{
  "id": 1,
  "name": "produto A"
}]]

const CONTEUDO_DELECT_PRODUCT_ID =   {
  id: 1,
  name: "produto A"
}


const CONTEUDO_ARRAY_POST_PRODUCTS = [{ insertId: 1 }]

const CONTEUDO_DO_ARRAY_UPDATE_PRODUCT_ID = { id: 1, name: "produto" }

describe('1 Teste Product model', () => {

  describe('1.1 Teste de getAll', () => {
    beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_GETALL);
      })
      afterEach(() => {
        connection.query.restore();
      })
    it('Retorna array com todos os produtos', async () => {
      const response = await productsModel.getAll();
      expect(response).to.be.equals(CONTEUDO_DO_ARRAY_GETALL[0]);
    });
  });

  describe('1.2 Teste de getId', () => {
    beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_ARRAY_GET_ID);
      })
      afterEach(() => {
        connection.query.restore();
      })
    it('retorna array de produtos pelo id', async () => {
        const resposta = await productsModel.getId();
        expect(resposta).to.be.equal(CONTEUDO_ARRAY_GET_ID[0][0]);
      });
  });

  describe('1.3 Teste de add', () => {
    beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_ARRAY_POST_PRODUCTS);
      })
      afterEach(() => {
        connection.query.restore();
      })
    it('Retorna produtos adicionados', async () => {
      const response = await productsModel.add("produto");
      expect(response).to.deep.equal({ id: 1, name: 'produto' });
    });
  });

  // describe('1.4 Teste de updateProductId', () => {
  //   beforeEach(() => {
  //       sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_UPDATE_PRODUCT_ID);
  //     })
  //     afterEach(() => {
  //       connection.query.restore();
  //     })
  //   it('Retorna produtos adicionados', async () => {
  //     const response = await productsModel.add("produto");
  //     expect(response).to.deep.equal(CONTEUDO_DO_ARRAY_UPDATE_PRODUCT_ID);
  //   });
  // });

  describe('1.5 Teste de deleteProductId', () => {
      beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DELECT_PRODUCT_ID);
      })
      afterEach(() => {
        connection.query.restore();
      })
      it('Retorna produtos alterados', async () => {
        const response = await productsModel.deleteProductId();
        expect(response).to.be.equal(CONTEUDO_DELECT_PRODUCT_ID);
      });
  });
});
