// const { expect } = require('chai');
// const sinon = require('sinon');

// const servicesSales = require('../../../services/saleService');
// const salesModel = require('../../../models/salesModel');

// describe('2 Services de sales', () => {
//     describe('2.1 productValidate ', () => {

//       it('validar id undefined', async() => {
//         const arrayTest = [
//           {

//           },
//           {
//             product_id: 1,

//           }
//         ];
//         const response = await servicesSales(arrayTest);
//         expect(response).to.be.deep.equal({ message: '"product_id" is required', status: 400 });
//       });

//       it('validar quantity undefined', async() => {
//         const arrayTest = [
//           {
//             product_id: 1,
//             quantity: 1,
//           },
//           {
//             product_id: 2,
//           }
//         ];
//         const response = await servicesSales.productValidate (arrayTest);
//         expect(response).to.be.deep.equal({ message: '"quantity" is required', status: 400, response: false });
//       });

//       it('validar quantity menor 0', async() => {
//         const arrayTest = [
//           {
//             product_id: 1,
//             quantity: 1,
//           },
//           {
//             product_id: 2,
//             quantity: -1,
//           }
//         ];
//         const response = await servicesSales.productValidate (arrayTest);
//         expect(response).to.be.deep.equal({
//           message: '"quantity" must be a number larger than or equal to 1',
//           status: 422,
//           response: false,
//       });

//       it('quando tudo der certo', async() => {
//         const arrayTest = [
//           {
//             product_id: 1,
//             quantity: 1,
//           },
//           {
//             product_id: 2,
//             quantity: 4,
//           }
//         ];
//         const response = await servicesSales.productValidate (arrayTest);
//         expect(response).to.be.deep.equal({ response: true });
//         });

//       });
//     });
//   });
