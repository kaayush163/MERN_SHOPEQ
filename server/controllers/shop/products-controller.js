const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    // sortBy by default price-lowtohigh
    const { category = [], brand = [], sortBy = "price-lowtohigh" } = req.query;
    // req query will contain search params whatever filtered will show on url as well

    let filters = {};

    // category need to split by , because multiple categories can be selected
    // If the field holds an array, then the $in operator selects the documents whose field holds an array that contains at least one element that matches a value in the specified array (for example, <value1> , <value2> , and so on).
    if (category.length) {
      filters.category = { $in: category.split(",") };
    }

    if (brand.length) {
      filters.brand = { $in: brand.split(",") };
    }

    let sort = {};
    // i decreasing order then -1 sort,price = -1
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;

      case "title-ztoa":
        sort.title = -1;
        break;

      default:
        sort.price = 1;
        break;
    }

    const products = await Product.find(filters).sort(sort);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { getFilteredProducts };
