let selectorPerson = document.getElementById('loginField');
let selectorPost = document.getElementById('postField');
//let selectorRole = document.getElementById('');

let button = document.getElementById('button');
button.addEventListener('click', download);

let users = [];



async function download() {
    let user = document.querySelector('#loginField').value;
    let post = document.querySelector('#postField').value;
    let role = document.querySelector('input[name="role"]:checked').value;


    document.getElementById("loginField").innerText = '';
    document.getElementById("postField").innerText = '';

    await fetch(
        `http://localhost:3005/api/person?login=${user}`,
        {method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            login:user
        })}
    )
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        });


    await fetch(
        `http://localhost:3005/api/data`,
        {method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            content:post,
            userLogin:user
        })}
    )
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        });

      await fetch(
        `http://localhost:3005/api/role`,
        {method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            role: role,
            userLogin:user
        })}
    )
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        });
}
