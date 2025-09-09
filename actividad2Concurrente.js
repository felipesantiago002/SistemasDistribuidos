console.log("-----Ejemplo Concurrente-----");

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const usuarios = await response.json();

const respuesta1 =  fetch ("https://jsonplaceholder.typicode.com/posts?userId=" + 1).then(res => res.json());
const respuesta2 =  fetch ("https://jsonplaceholder.typicode.com/posts?userId=" + 2).then(res => res.json());
const respuesta3 =  fetch ("https://jsonplaceholder.typicode.com/posts?userId=" + 3).then(res => res.json());

Promise.all([respuesta1,respuesta2,respuesta3])
.then( resultados => {
    resultados.forEach((publicaciones,id) => {
        console.log( usuarios[id].name + " tiene " + publicaciones.length + " publicaciones.");
    });
}

)