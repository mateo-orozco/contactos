const contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']

    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: '',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', '	Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },
]
let nombre = document.getElementById("nombre")
let propiedad = document.getElementById("propiedad")
const boton = document.getElementById("buscar")
let resultado = document.getElementById("resultado")
boton.addEventListener("click", () => {
    if (nombre.value === "" || propiedad.options[propiedad.selectedIndex].value === "") {
        alert("Ingrese los valores")
    } else {
        buscar((nombre.value).toLowerCase(), propiedad.options[propiedad.selectedIndex].value)
    }
})
nombre.addEventListener("click", () => {
    nombre.value = ""
    propiedad.selectedIndex = ""
    resultado.innerText=""
})
function buscar(name, propertie) {
    contacto.forEach(i => {
        if (i.nombre.toLowerCase()===(nombre.value).toLowerCase()) {
            switch (propertie) {
                case "todo":
                    resultado.innerHTML=i.apellido+"</br>"+i.numero+"</br>"+i.gustos
                    break;
                case "apellido":
                    resultado.innerText=i.apellido
                    break;
                case "numero":
                    resultado.innerText=i.numero
                    break;
                case "gustos":
                    resultado.innerText=i.gustos
                    break;
        
            }
        }
    });
    if(resultado.innerText===""){
        alert("El nombre no existe")
    }
}