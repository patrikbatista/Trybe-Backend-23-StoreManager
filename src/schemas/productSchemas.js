const isName = (name) => {
  if (!name) {
    const error = {
      status: 400,
      message: '"name" is required',
    };
    throw error;
  }

  if (name.length < 5) {
     const error = {
      status: 422,
      message: '"name" length must be at least 5 characters long',
    };
    throw error;
  }
};

module.exports = {
  isName,
};
