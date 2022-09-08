const http = new EasyHttp();

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

http
  .post("https://jsonplaceholder.typicode.com/users", {
    name: "Diiipan",
    username: "dilipan",
    email: "dilipan@email.com",
  })
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

http
  .put("https://jsonplaceholder.typicode.com/users/2", {
    name: "Diiipan",
    username: "dilipan",
    email: "dilipan@email.com",
  })
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

http
  .delete("https://jsonplaceholder.typicode.com/users/4")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
