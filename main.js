let form = document.querySelector("#myForm");
let lastSearchs = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let searchInput = document.querySelector("#search").value;
    if (!(lastSearchs.includes(searchInput))) {
        lastSearchs[lastSearchs.length] = searchInput;
        //alert(lastSearch);
        let removedSpaces = searchInput.split(' ').join('');
        let url = `https://api.github.com/users/${removedSpaces}`
        fetch(url)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                let newDiv = document.createElement('div');
                newDiv.class = "row";
                newDiv.id = `${removedSpaces}`;
                newDiv.innerHTML = `
            <img src = "${data.avatar_url}"/>
            <p>Company: ${data.company ?? ''}</p>
            <p>email: ${data.email ?? ''}</p>
            <p>Number of followers: ${data.followers ?? ''}</p>
            <p>Number of following: ${data.following ?? ''}</p>
            <p>Name: ${data.name ?? ''}</p>
            <p>Number of repos: ${data.public_repos ?? ''}</p>
            `
                res = document.querySelector(".result");
                res.appendChild(newDiv);
            })
    }
    else {
        //alert(lastSearchs);
        document.getElementById(`${searchInput.split(' ').join('')}`).scrollIntoView();
    }
})




