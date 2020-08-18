fs = require('fs')
var fileIndex = 8;
let sol=[];
let our=[];

fs.readFile(`./ex1-files/${fileIndex}`, 'utf8', function (err,data) {
  if (err) {
    return console.log("File cannot be opened!");
  }
  var lines = data.split("\n");
  lines.pop();
  for(x in lines){
  	var c = lines[x].split(" ");
  	var a = parseInt(c[0]);
  	var b = parseInt(c[2]);
  	var ans;
  	if(c[1]=="+"){
  		ans = a+b;
  	}else if(c[1]=="-"){
  		ans = a-b;
  	}else if(c[1]=="/"){
  		ans = a/b;
  	}else if(c[1]=="%"){
  		ans = a%b;
  	}else if(c[1]=="*"){
  		ans = a*b;
  	}
  	// console.log(ans,sol[x]);
  	our.push(ans);
  }
	fs.readFile(`./ex1-files/solutions/${fileIndex}`, 'utf8', function (err,data) {
		check(our,data.split("\n"));
	});
	save(our);
});
function check(ans,sol){
	var marks = 0;
	sol.pop();
	for(x in ans){
		if(ans[x]==sol[x]){
			marks+=1;
		}
	}
	console.log(`Total Marks:- ${marks}/${ans.length}`);
}
function save(ans) {
	fs.writeFile(`out/${fileIndex}.txt`, ans.join("\n"), function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
}
