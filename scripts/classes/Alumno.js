import Usuario from "./Usuario.js"

export default class Alumno extends Usuario{
  constructor(nombres, apellidos, correo, activo, cursosTomados) {
    super(nombres, apellidos, correo, activo)
    this.cursosTomados = cursosTomados
  }
}