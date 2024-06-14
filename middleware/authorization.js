import jwt from "jsonwebtoken";

export const Authorization = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);

    next(); //una vez verificado pasa a la ruta correspondiente
  } catch (error) {
    res.status(401).json({
      html: "No autorizado",
    });
  }
};
