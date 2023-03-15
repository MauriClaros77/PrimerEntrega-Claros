let alumno
let nota1 = 0
let nota2 = 0
let nota3 = 0
let promedio = 0
let opcion
let flag = 0
let promedioCurso = 0
let promediosAlumnos = 0
let totalAlumnos = 0
let alumnosAprobados = 0
let alumnosDesaprobados = 0
let maxAlum
let maxProm
let minAlum
let minProm

function promedioAlumno(n1, n2, n3) {
    return notaFinal = (n1 + n2 + n3) / 3
}
function informe(nombreAlum, promFinal) {
    if (promFinal >= 7 && promFinal <= 10) {
        alert(nombreAlum + " APROBO con: " + promFinal)
    }
    else if (promFinal >= 0 && promFinal < 7) {
        alert(nombreAlum + " DESAPROBO con: " + promFinal)
    }
}
opcion = prompt("Desea ingresar un Alumno y sus notas \nResponder: si o no")
while (opcion == "si") {
    alumno = prompt("Ingrese Nombre alumno")
    nota1 = Number(prompt("Ingrese Primer nota:"))
    nota2 = Number(prompt("Ingrese Segunda nota:"))
    nota3 = Number(prompt("Ingrese Tercer nota:"))
    promedio = promedioAlumno(nota1, nota2, nota3)
    promediosAlumnos = promediosAlumnos + promedio
    totalAlumnos++
    informe(alumno, promedio)
    if (promedio >= 7 && promedio <= 10) {
        alumnosAprobados++
    } else if (promedio >= 0 && promedio < 7){
        alumnosDesaprobados++
    }

    if (flag = 0) {
        maxAlum = alumno
        maxProm = promedio
        minAlum = alumno
        minProm = promedio
        flag = 1
    } else {
        if (promedio>maxProm) {
            maxAlum = alumno
            maxProm = promedio
        } else if(promedio<minAlum){
            minAlum = alumno
            minProm = promedio
        }
    }
    opcion = prompt("Desea Ingresar un Alumno y sus notas \nResponder: si o no")
}
promedioCurso=promediosAlumnos/totalAlumnos
alert("El total de Alumnos son: " + totalAlumnos +" \nEl total de alumnos Aprobados son: "+ alumnosAprobados +" \nEl total de Alumnos Desaprobados son: " + alumnosDesaprobados + "\n El Promedio total del Curso es de:" + promedioCurso)
alert("El alumno " + maxAlum + "obtubo el promedio mas ALTO con una nota de: " + maxProm + "\nEl alumno " + minAlum + "obtubo el promedio mas BAJO con una nota de: " + minProm)

