//Secuencial
console.log("-----Ejemplo Secuencial-----");
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const usuarios = await response.json();

for (let i = 0; i < 3; i++) {
  const usuario = usuarios[i];
  const id = usuarios[i].id;
  const name = usuarios[i].name;
  const respuesta = await fetch ("https://jsonplaceholder.typicode.com/posts?userId=" + id);
  const publicaciones = await respuesta.json();
  console.log(name + " tiene " + publicaciones.length + " publicaciones.");
}



