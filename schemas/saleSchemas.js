const isProductId = (array) => {
  const idUndefined = array.find((element) => element.productId === undefined);
  if (idUndefined) {
    const error = {
      status: 400,
      message: '"productId" is required',
    };
    throw error;
  }
};

const isQuantity = (array) => {
  const quantityUndefined = array.find((element) => element.quantity === undefined);
  if (quantityUndefined) {
    const error = {
      status: 400,
      message: '"quantity" is required',
    };
    throw error;
  }

  const quantityLessThenZero = array.find((element) => Number(element.quantity) <= 0);
  if (quantityLessThenZero) {
    const error = {
      status: 422,
      message: '"quantity" must be greater than or equal to 1',
    };
    throw error;
  }
};

const salesValidate = (sales) => {
  isProductId(sales);
  isQuantity(sales);
};

module.exports = {
  salesValidate,
};
