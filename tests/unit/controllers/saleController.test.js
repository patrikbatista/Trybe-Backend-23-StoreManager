const { expect } = require('chai')
const sinon = require('sinon')
const saleService = require('../../../services/saleService')
const saleController = require('../../../controllers/saleController')

describe('4 Testa camada de Controller de Sale', () => {
  let req = {}
  const res = {}

  beforeEach(() => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();
    sinon.restore()
  })

  // describe('4.1 testa addSale', () => {
  //   it('retorna para a resposta um objeto com a venda criada', async () => {
  //     const responseService = {
  //       code: 201,
  //       data: {
  //         "id": 3,
  //         "itemsSold": [
  //           {
  //             "productId": 1,
  //             "quantity":1
  //           },
  //           {
  //             "productId": 2,
  //             "quantity":5
  //           }
  //         ]
  //       }
  //     }
  //     req = {
  //       body: [
  //         {
  //           "productId": 1,
  //           "quantity":1
  //         },
  //         {
  //           "productId": 2,
  //           "quantity":5
  //         }
  //       ]
  //     }
  //     sinon.stub(saleService, 'addSale').resolves(responseService)
  //     await saleController.addSale(req, res)
  //     expect(res.json.calledWith(responseService.data)).to.be.true
  //     expect(res.status.calledWith(responseService.code)).to.be.true
  //   })

  //   it('retorna erro caso dê problema no service', async () => {
  //     sinon.stub(saleService, 'addSale').rejects()
  //     try {
  //       await saleController.addSale(req, res)
  //     } catch (err) {
  //       expect(err).to.be.instanceOf(Error)
  //     }
  //   })
  // })

  describe('4.2 Testa getSales', () => {
    it('retorna todas as vendas', async () => {
      const sales = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        },
      ]
      sinon.stub(saleService, 'getSales').resolves(sales)
      await saleController.getSales(req, res)
      expect(res.json.calledWith(sales)).to.be.true
    })

    it('retorna erro em caso de falha', async () => {
      sinon.stub(saleService, 'getSales').rejects()
      try {
        await saleController.getSales(req, res)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
      }
    })
  })

  describe('4.3 Testa getSaleId', () => {
    // it('retorna venda encontrada', async () => {
    //   const sale = [
    //     {
    //       "date": "2021-09-09T04:54:29.000Z",
    //       "productId": 1,
    //       "quantity": 2
    //     },
    //     {
    //       "date": "2021-09-09T04:54:54.000Z",
    //       "productId": 2,
    //       "quantity": 2
    //     }
    //   ]
    //   const responseService = {
    //     code: 200,
    //     data: sale
    //   }
    //   req = { params: { id: 1 } }
    //   sinon.stub(saleService, 'getSaleId').resolves(responseService)
    //   await saleController.getSaleId(req, res)
    //   expect(res.json.calledWith(sale)).to.be.true
    //   expect(res.status.calledWith(responseService.code)).to.be.true
    // })

    it('retorna erro caso dê problema no service', async () => {
      sinon.stub(saleService, 'getSaleId').rejects()
      try {
        await saleController.getSaleId(req, res)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
      }
    })
  })

})
