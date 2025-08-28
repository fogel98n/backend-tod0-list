const pool = require('../models/db');

module.exports.getTareas = async (req, res) => {
  const { usuario_id, estado_tarea } = req.query;

  let query = "SELECT * FROM tareas";
  const params = [];

  const conditions = [];
  if (usuario_id) {
    conditions.push("usuario_id = ?");
    params.push(usuario_id);
  }
  if (estado_tarea) {
    conditions.push("estado_tarea = ?");
    params.push(estado_tarea);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  try {
    const [results] = await pool.query(query, params);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
