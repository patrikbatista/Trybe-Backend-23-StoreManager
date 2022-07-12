// const mysql = require('mysql2/promise');
const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const salesModels = require('../../../src/models/salesModel');

const CONTEUDO_DO_ARRAY_POSTSALES = [[
  {
    product_id: 1,
    quantity: 2
  },
  {
    product_id: 2,
    quantity: 5
  }
]];

const CONTEUDO_DO_ARRAY_POSTNEWSALES = [
  {
    insertId: 1
  },
];

const CONTEUDO_DO_ARRAY_GETSALES =   [[
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    product_id: 1,
    quantity: 2
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    product_id: 2,
    quantity: 2
  }
]]

const CONTEUDO_DO_ARRAY_GETSALES_ID = [[
  {
    date: "2021-09-09T04:54:29.000Z",
    product_id: 1,
    quantity: 2
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    product_id: 2,
    quantity: 2
  }
]]

// const CONTEUDO_DO_ARRAY_UDATE_SALE_ID = [
//   [
//   {
//     "product_id": 1,
//     "quantity": 6
//   }
//   ]]

describe('2 Teste camada Sales model', () => {

  describe('2.1 Teste de postSales model', () => {
    beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_POSTSALES);
      })
      afterEach(() => {
        connection.query.restore();
      })

      it('Retorna sales', async () => {
        const resposta = await salesModels.getSales();
        expect(resposta).to.be.equals(CONTEUDO_DO_ARRAY_POSTSALES[0]);
      });
  })

  describe('2.2 Teste postNewSale', () => {
      beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_POSTNEWSALES);
      })
      afterEach(() => {
        connection.query.restore();
      })//retirar do duble depois de cada teste

      it('é um número', async() => {
        const resposta = await salesModels.postNewSale();
        expect(resposta).to.be.a('number');
      });

      it('é igual id esperado', async () => {
        const resposta = await salesModels.postNewSale();
        expect(resposta).to.be.equal(CONTEUDO_DO_ARRAY_POSTNEWSALES[0].insertId);
      });
    });

  describe('2.3 Teste getSales', () => {
      beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_GETSALES);
      })
      afterEach(() => {
        connection.query.restore();
      })

      it('retorna array de vendas de produtos', async () => {
        const resposta = await salesModels.getSales();
        expect(resposta).to.be.equal(CONTEUDO_DO_ARRAY_GETSALES[0]);
      });
  });

  describe('2.4 Teste getSalesId', () => {
      beforeEach(() => {
        sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_GETSALES_ID);
      })
      afterEach(() => {
        connection.query.restore();
      })

      it('retorna array de vendas de produtos por Id', async () => {
        const resposta = await salesModels.getSaleId();
        expect(resposta).to.be.equal(CONTEUDO_DO_ARRAY_GETSALES_ID[0]);
      });
  });

  // describe('1.5 Teste updateSaleId', () => {
  //     beforeEach(() => {
  //       sinon.stub(connection, 'query').returns(CONTEUDO_DO_ARRAY_UDATE_SALE_ID);
  //     })
  //     afterEach(() => {
  //       connection.query.restore();
  //     })

  //     it('retorna array upDate vendas', async () => {
  //       const resposta = await updateSaleId();
  //       expect(resposta).to.be.equal(CONTEUDO_DO_ARRAY_UDATE_SALE_ID[0]);
  //     });
  //   });

});
