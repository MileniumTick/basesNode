import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear()

const { base, listar, hasta } = argv

const archivo = await crearArchivo(base, listar, hasta)

if (archivo) {
    console.log(archivo, ' Creado')
}