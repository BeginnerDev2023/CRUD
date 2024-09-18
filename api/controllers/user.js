import { db } from "../db.js";
//READ
export const getUsers = (_, res) => {
  const q = "SELECT * FROM receita";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//CREATE
export const addUser = (req, res) => {
  const q =
    "INSERT INTO receita(`nome`, `tempoPreparo`, `custoAproximado`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.tempoPreparo,
    req.body.custoAproximado,
  ];
 
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Nova receita cadastrada.");
  });
};

//UPDATE
export const updateUser = (req, res) => {
  const q =
    "UPDATE receita SET `nome` = ?, `tempoPreparo` = ?, `custoAproximado` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.tempoPreparo,
    req.body.custoAproximado,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Receita atualizada.");
  });
};
//DELETE
export const deleteUser = (req, res) => {
  const q = "DELETE FROM receita WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Receita excluida.");
  });
};