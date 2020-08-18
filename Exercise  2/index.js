var username = (process.argv[2]);

const fetch = require('node-fetch');

var API = "https://api.github.com/users"
let url = `${API}/${username}/repos`;

fetch(url, { method: "Get" })
    .then(res => res.json())
    .then((json) => {
        for(repo in json){
        	console.log("\x1b[32m",repo,"\x1b[33m",` ${json[repo]["full_name"]}`);

        }
    }).then(()=>{
		console.log("\x1b[0m")    	
    });
