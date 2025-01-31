const express = require("express");
const { deleteProduct } = require("../controllers/productController");
const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Verifica si el microservicio está activo
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Retorna un mensaje de estado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "CONEXION EXITOSA",
  });
});

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Elimina un producto por su ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *       400:
 *         description: Falta el ID del producto.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/products/:id", deleteProduct);

module.exports = router;