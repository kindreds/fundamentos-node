import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const options = {
  base: {
    demand: true,
    alias: 'b',
  },
  limite: {
    alias: 'l',
    default: '10',
  },
};

export const argv = yargs(hideBin(process.argv))
  .command('listar', 'Imprime en consola la Tabla de multiplicar', options)
  .command('crear', 'Crear archivo .txt con la Tabla de multiplicar', options)
  .demandCommand(1)
  .help().argv;
