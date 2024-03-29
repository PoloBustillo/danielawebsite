import axios from "axios";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../utils/firebase-config";

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_SERVER_CMS_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl);
  const data = await response.data;
  return data;
}
export const getMensajes = async () => {
  const mensajeRef = collection(db, "mensaje");
  const mesajeDocs = await getDocs(mensajeRef);
  let mensajes = {};
  mesajeDocs.forEach((doc) => {
    mensajes[doc.id] = doc.data();
  });
  return mensajes;
};
export const getTerapias = async () => {
  const terapiasRef = collection(db, "terapias");
  const docSnaps = await getDocs(terapiasRef);
  let terapias = [];
  docSnaps.forEach((terapia) => {
    terapias.push(terapia.data());
  });
  return terapias;
};

export const getPreguntas = async () => {
  const preguntasRef = collection(db, "preguntas");
  const docSnaps = await getDocs(preguntasRef);
  let preguntas = [];
  docSnaps.forEach((pregunta) => {
    preguntas.push(pregunta.data());
  });
  return preguntas;
};

export const getBannerImages = async () => {
  const bannerRef = collection(db, "banner");

  const bannerDocs = await getDocs(bannerRef);
  let images = [];
  bannerDocs.forEach(async (doc) => {
    images = Promise.all(
      doc.data().images.map((url) => {
        return getDownloadURL(ref(storage, url));
      })
    );
  });

  return images;
};

export const getWebData = async () => {
  const docRef = doc(db, "data", "psicologa");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
};
