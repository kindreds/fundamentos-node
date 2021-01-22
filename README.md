# Multiplicar App

Esta en una aplicacion la cual acepta argumentos
en la consola tales como 'listar' o 'crear'.

Para iniciar ejecutar el siguiente comando:

```
npm install
```

## Comandos

### listar

Nos imprime en consola la tabla de multiplicar del numero especificado como base, el argumento '-b o --base' se usa para ingresar el numero base.

```
node src/index listar -b 5
```

Podemos usar el argumento '-l o --limite' para establecer el limite de la tabla pero si no se introduce su valor por defecto es 10.

```
node src/index listar -b 5 -l 30
```

### crear

Nos crear un archivo .txt con la tabla de multiplicar del numero especificado como base, el argumento '-b o --base' se usa para ingresar el numero base.

```
node src/index crear -b 5
```

Podemos usar el argumento '-l o --limite' para establecer el limite de la tabla pero si no se introduce su valor por defecto es 10.

```
node src/index crear -b 5 -l 30
```
