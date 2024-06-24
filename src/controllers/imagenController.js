const dbConnection = require('../config/dbConfig');

// Obtener todas las imágenes
exports.getAllImagenes = async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM imagenes');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las imágenes', details: error.message });
  } finally {
    if (connection) connection.release();
  }
};

// Obtener una imagen por su ID
exports.getImagenById = async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM imagenes WHERE idImagen = ?', [id]);
    res.json(rows[0] || null);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la imagen', details: error.message });
  } finally {
    if (connection) connection.release();
  }
};

// Crear una nueva imagen
exports.createImagen = async (req, res) => {
  let connection;
  try {
    const nuevaImagen = req.body;
    connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO imagenes SET ?', nuevaImagen);
    res.json({ message: 'Imagen creada correctamente', id: results.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la imagen', details: error.message });
  } finally {
    if (connection) connection.release();
  }
};

// Actualizar una imagen existente
exports.updateImagen = async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    connection = await dbConnection.getConnection();
    const [result] = await connection.query('UPDATE imagenes SET ? WHERE idImagen = ?', [datosAActualizar, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Imagen no encontrada' });
    } else {
      res.json({ message: 'Imagen actualizada correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la imagen', details: error.message });
  } finally {
    if (connection) connection.release();
  }
};

// Eliminar una imagen por su ID
exports.deleteImagen = async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    connection = await dbConnection.getConnection();
    const [result] = await connection.query('DELETE FROM imagenes WHERE idImagen = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Imagen no encontrada' });
    } else {
      res.json({ message: 'Imagen eliminada correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la imagen', details: error.message });
  } finally {
    if (connection) connection.release();
  }
};
