postButton.onclick = function (e) {
    e.preventDefault();

    fetch("/article/formdata/post/user",
        {
            method: 'POST',
            body: new FormData(formElem)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}