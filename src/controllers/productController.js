
const Product = require("../models/productModel");

const deleteProduct = async (req, res) => {
  try {
    // Extraemos el ID del producto desde los parámetros de la URL
    const { id } = req.params;

    // Validamos que el ID esté presente
    if (!id) {
      return res.status(400).json({
        message: "El ID del producto es obligatorio."
      });
    }

    // Buscamos y eliminamos el producto
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Verificamos si el producto existía
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Producto no encontrado."
      });
    }

    return res.status(200).json({
      message: "Producto eliminado exitosamente.",
      product: deletedProduct
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return res.status(500).json({
      message: "Error interno del servidor."
    });
  }
};

module.exports = { deleteProduct };
