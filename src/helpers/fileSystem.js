import fs from 'fs';
import colors from 'colors/safe.js';

const genTabla = (base, limite) => {
  const data = [];
  for (let i = 1; i <= limite; i++) {
    data.push(`${base} * ${i} = ${base * i}`);
  }
  return data;
};

export const listarTabla = (base, limite = 10) =>
  new Promise((resolve, reject) => {
    if (isNaN(base)) {
      reject(`El valor (${base}) pasado como BASE no es un numero entero`);
    }
    if (isNaN(limite)) {
      reject(`El valor (${limite}) pasado como LIMITE no es un numero entero`);
    }

    resolve(genTabla(base, limite).join('\n').green);
  });

export const crearArchivo = (base, limite = 10) =>
  new Promise((resolve, reject) => {
    if (isNaN(base)) {
      reject(`El valor (${base}) pasado como BASE no es un numero entero`);
    }
    if (isNaN(limite)) {
      reject(`El valor (${limite}) pasado como LIMITE no es un numero entero`);
    }

    const tabla = genTabla(base, limite).join('\n');
    fs.writeFile(`./assets/tabla-${base}.txt`, tabla, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(`Archivo: ${colors.green(`tabla-${base}.txt`)} creado con exito`);
    });
  });
