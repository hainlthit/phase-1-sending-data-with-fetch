// Add your code here
const newData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(newData),
}

function submitData() {
return fetch("http://localhost:3000/users", configData)
.then(resp => resp.json())
.then(getID)
.catch(errorFunc)
}

function getID(object) {
    document.body.innerHTML = object.id
}
function errorFunc(error) {
    document.body.innerHTML = error
}