const fetch_Users = () => {
    axios.get("https://reqres.in/api/users").then((response) => {
          const users = response.data.data;
    appendToDOM(users);
        })
        .catch((error) =>console.error(error));
    };