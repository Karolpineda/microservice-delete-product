const Product = require("../models/productModel");

// Función para eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;  // Obtener el id del producto desde la URL

    // Buscar el producto en la base de datos
    const product = await Product.findByPk(id);

    // Si no se encuentra el producto, devolver un error
    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado."
      });
    }

    // Eliminar el producto de la base de datos
    await product.destroy();

    return res.status(200).json({
      message: "Producto eliminado exitosamente."
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return res.status(500).json({
      message: "Error interno del servidor."
    });
  }
};

module.exports = { deleteProduct };