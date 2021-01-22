import colors from 'colors';
import { argv } from './config/yargs.js';
import { crearArchivo, listarTabla } from './helpers/fileSystem.js';

const { _: comando, base, limite } = argv;

switch (comando[0]) {
  case 'listar':
    listarTabla(base, limite)
      .then((payload) => {
        console.log('===============\n');
        console.log(`Tabla del ${base}\n`);
        console.log(payload);
        console.log('\n===============');
      })
      .catch((err) => console.log(err));
    break;

  case 'crear':
    crearArchivo(base, limite)
      .then((payload) => console.log(payload))
      .catch((err) => console.log(err));
    break;

  default:
    console.log('Comando no reconocido');
    break;
}
