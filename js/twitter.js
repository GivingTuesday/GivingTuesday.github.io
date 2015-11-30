OAuth.initialize('4knrkxYhVuLLGj9DGm7O1HenV');
function authMe() {
//Example with Twitter with the cache option enabled
OAuth.popup('twitter', {cache: true}).done(function(twitter) {
//make API calls with `twitter`
console.log("You're logged in to twitter. Congrats");
res = OAuth.create('twitter');
res.me().done(function(me) {
console.log(me);
    
}).fail(function(err) {
//todo when the OAuth flow failed
alert("Twitter login failed, Please try again");
});    
//end of successful auth     
}).fail(function(err) {
//todo when the OAuth flow failed
})
};

maxL=115;
var bName = navigator.appName;
function taLimit(taObj) {
	if (taObj.value.length==maxL) return false;
	return true;
}

function taCount(taObj,Cnt) { 
	objCnt=createObject(Cnt);
	objVal=taObj.value;
	if (objVal.length>maxL) objVal=objVal.substring(0,maxL);
	if (objCnt) {
		if(bName == "Netscape"){	
			objCnt.textContent=maxL-objVal.length;}
		else{objCnt.innerText=maxL-objVal.length;}
	}
	return true;
}
function createObject(objId) {
	if (document.getElementById) return document.getElementById(objId);
	else if (document.layers) return eval("document." + objId);
	else if (document.all) return eval("document.all." + objId);
	else return eval("document." + objId);
}