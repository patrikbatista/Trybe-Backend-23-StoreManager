const { expect } = require('chai')
const sinon = require('sinon')
const productService = require('../../../src/services/productService')
const productController = require('../../../src/controllers/productController')

describe('3.1 Teste da camada controller de product', () => {
  let req = {}
  const res = {}

  beforeEach(() => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();
    sinon.restore()
  })

  describe('3.1.1 getAll', () => {
    it('Retorna todos os produtos', async () => {
      const products = [
      {
        "id": 1,
        "name": "Martelo de Thor",
      },
      {
        "id": 2,
        "name": "Traje de encolhimento",
      }
      ]
      sinon.stub(productService, 'getAll').resolves(products)
      await productController.getAll(req, res)
      expect(res.json.calledWith(products)).to.be.true
    })

    it('caso ocorra algum problema retorna erro', async () => {
      sinon.stub(productService, 'getAll').rejects()
      try {
        await productController.getAll(req, res)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
      }
    })
  })

  describe('3.2 getId', () => {
    // it('Retorna o produto, caso o encontre', async () => {
    //   const product = {
    //     "id": 1,
    //     "name": "Martelo de Thor",
    //   }
    //   const response = {
    //     code: 200,
    //     data: product
    //   }
    //   req = { params: { id: 1 } }
    //   sinon.stub(productService, 'getId').resolves(response)
    //   await productController.getId(req, res)
    //   expect(res.json.calledWith(product)).to.be.true
    //   // expect(res.status.calledWith(response.code)).to.be.true
    // })

    it('caso ocorra algum problema retorna erro', async () => {
      sinon.stub(productService, 'getId').rejects()
      try {
        await productController.getId(req, res)
      } catch (err) {
        expect(err).to.be.instanceOf(Error)
      }
    })
  })

  // describe('Testa addProduc', () => {
  //   it('Retorna o objeto criado', async () => {
  //     const product = {
  //       "id": 1,
  //       "name": "Martelo de Thor",
  //     }
  //     const response = {
  //       code: 201,
  //       data: product
  //     }
  //     req = { body: { name: "Martelo de Thor" } }
  //     sinon.stub(productService, 'addProduct').resolves(response)
  //     await productController.addProduct(req, res)
  //     expect(res.json.calledWith(product)).to.be.true
  //     expect(res.status.calledWith(response.code)).to.be.true
  //   })

  //   it('caso ocorra algum problema retorna erro', async () => {
  //     sinon.stub(productService, 'addProduct').rejects()
  //     try {
  //       await productController.addProduct(req, res)
  //     } catch (err) {
  //       expect(err).to.be.instanceOf(Error)
  //     }
  //   })
  // })

  // describe('Testa updateProduct', () => {
  //   it('Retorna o objeto atualizado', async () => {
  //     const product = {
  //       "id": 1,
  //       "name": "Martelo de Thor",
  //     }
  //     const response = {
  //       code: 200,
  //       data: product
  //     }
  //     req = {
  //       body: { name: "Martelo de Thor" },
  //       params: { id: '1'}
  //     }
  //     sinon.stub(productService, 'updateProduct').resolves(response)
  //     await productController.updateProduct(req, res)
  //     expect(res.json.calledWith(product)).to.be.true
  //     expect(res.status.calledWith(response.code)).to.be.true
  //   })

  //   it('caso ocorra algum problema retorna erro', async () => {
  //     sinon.stub(productService, 'updateProduct').rejects()
  //     try {
  //       await productController.updateProduct(req, res)
  //     } catch (err) {
  //       expect(err).to.be.instanceOf(Error)
  //     }
  //   })
  // })

  // describe('Testa deleteProduct', () => {
  //   it('retorna para a resposta um objeto com o produto removido', async () => {
  //     const response = {
  //       code: 204,
  //       data: ''
  //     }
  //     req = { params: { id: '1'} }
  //     sinon.stub(productService, 'deleteProduct').resolves(response)
  //     await productController.deleteProduct(req, res)
  //     expect(res.json.calledWith(response.data)).to.be.true
  //     expect(res.status.calledWith(response.code)).to.be.true
  //   })

  //   it('caso ocorra algum problema retorna erro', async () => {
  //     sinon.stub(productService, 'deleteProduct').rejects()
  //     try {
  //       await productController.deleteProduct(req, res)
  //     } catch (err) {
  //       expect(err).to.be.instanceOf(Error)
  //     }
  //   })
  // })
})
