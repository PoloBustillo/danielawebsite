// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import axios from "axios";

const onError = (error, req, res) => {
  res.status(400).json({ error: error, api: "tratamientos" });
};
const onNoMatch = (req, res) => {
  res
    .status(405)
    .json({ error: `Does not support ${req.method}:Only support GET` });
};

const handler = nc({ onError, onNoMatch });

handler.get(async (req, res, next) => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  console.log(process.env.NEXT_SERVER_CMS_URL);
  const { data } = await axios.get(
    process.env.NEXT_SERVER_CMS_URL + "servicios"
  );
  const dataMapped = data.map((tratamiento) => {
    if (tratamiento.habilitado)
      return {
        contenido: tratamiento.Descripcion,
        tipoTerapia: tratamiento.Subtitulo,
        terapiaCategoria: tratamiento.Titulo,
        precio: tratamiento.costo,
        id: tratamiento.id,
        imagen: tratamiento.Imagen[0]?.formats.medium
          ? tratamiento.Imagen[0].formats.medium.url
          : tratamiento.Imagen[0].url,
      };
  });
  res.send(dataMapped);
  next();
});
export default handler;
