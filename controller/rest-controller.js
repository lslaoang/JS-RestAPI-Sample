const fetch_Users = () => {
    axios.get("https://reqres.in/api/users").then((response) => {
          const users = response.data.data;
    appendToDOM(users);
        })
        .catch((error) =>console.error(error));
    };

const appendToDOM = (users) => {
    const ul = document.querySelector("ul");
    users.map((user) => {
    ul.appendChild(create_Li(user));
    });
    };

constcreate_Li = (user) => {
    const li = document.createElement("li");
    li.textContent = `${user.id}: ${user.first_name} ${user.last_name}`;
    return li;
    };

$("#button").click(function () {

    fetch_Users();
    
    });