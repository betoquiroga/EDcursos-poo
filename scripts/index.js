import Curso from "./classes/Curso.js"
import Profesor from "./classes/Profesor.js"
import Alumno from "./classes/Alumno.js"

const elem = document.getElementById("cursos")
// Imprime un curso en el DOM
// Recibe un objeto de tipo Curso
function mostrarCurso(curso) {
  const hijo = document.createElement("div")
  hijo.classList.add("card")
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-0 s-center">${curso.getNombre()}</h3>
      <div class="s-center">
        <span class="small">Clases: ${curso.getClases()}</span>
      </div>
    </div>
  `
  elem.appendChild(hijo)
}

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
  e.preventDefault()
  const target = e.target
  const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
  mostrarCurso(curso)
  formulario.reset()
})


const profe = new Profesor("Beto", "Quiroga", "beto@ed.team", true, ["React", "Drupal"])

const alumno1 = new Alumno("Juanito", "Perez", "juan@ed.team", false, ["HTML", "CSS"])
const alumno2 = new Alumno("Maria", "Rodriguez", "maria@ed.team", true, ["Drupal", "JS"])

const html = new Curso("HTML desde cero", "mi-poster.png", 7)

html.setInscritos([...html.getInscritos(),alumno1])
console.log(html)

