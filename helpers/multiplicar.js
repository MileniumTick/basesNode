import { writeFileSync } from 'fs';
import colors from 'colors';

const { random, america, cyan, dim } = colors

export const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {


        let salida = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `\n${base} X ${i} =  ${i * base}`
            consola += `\n${base} ${random('X')} ${i} = ${((i * base).toString())}`
        }

        if (listar) {
            console.log(cyan('==========='))
            console.log(dim(`Tabla del: `), base)
            console.log(cyan('==========='))
            console.log(consola)
        }

        writeFileSync(`tablas/tabla-${base}.txt`, salida)

        return america(`tabla-${base}.txt`)
    } catch (error) {
        throw error
    }
}
