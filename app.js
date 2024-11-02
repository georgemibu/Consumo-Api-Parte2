let productos = [];

//petición a la api
async function obtenerDatos() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Aquí puedes acceder a los datos de la comida
        // Ejemplo: console.log(data.meals[0].strMeal); para mostrar el nombre de la comida
        console.log(data.meals[0])
        console.log(data.meals[0].strArea)


        //vamos a intentar operar con la cantidad de ingredientes
        const meal = data.meals[0];
        const ingredientes = [];

        for (let i=1 ; i <= 20; i++) { //màximo 20 ingredientes
            const ingrediente = meal[`strIngredient${i}`];
            const medida = meal[`strMeasure${i}`]

            if (ingrediente) {
                ingredientes.push(`${ingrediente} - ${medida}`)
            } else {
                break;
            }
        }

        console.log('Ingredientes:', ingredientes)

    })
    .catch(error => console.error('Error:', error));
}

obtenerDatos()
/*
//me cargo datos operacionales en otra función para mantener el código limpio
async function mostrarDatos() {
    await obtenerDatos();
    console.log(productos)

    const listaProductos = document.getElementById('lista-productos')
    productos.forEach( producto =>{
        const item = document.createElement('div')
        item.innerHTML = `
            <h3>${producto.id}</h3>
            <h3>${producto.title}</h3>
            <h3>${producto.description}</h3>
            <img src=${producto.image} alt="imagen" />
        `;
        listaProductos.appendChild(item)
    })
}

//no olvidar invocar la función
mostrarDatos()
*/