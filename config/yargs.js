import yargs from 'yargs';

export const argv = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde llegara tu tabla'
    })
    .check(({ base }, options) => {
        if (isNaN(base)) throw 'No se admiten valores que no sean numericos';
        return true
    })
    .argv