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

function tweet(){
//    authMe();
    alert("I'm here")
//    $(document).ready(function(){
//        alert("Checking...")
//        $("#yeslink").click(function(){
//            alert("logic check")
//            if($(this).prop("checked") == true){
//                var link = " j.mp/AlertGT";
//                var tweettext = $("#tweettext");
//                tweettext = tweettext+link;
//                alert("tweettext"+tweettext)
////                twttr.widgets.createShareButton('https://dev.twitter.com/', tweettext,
////                                                {
////                    text: tweettext
////                }
////                                               );
//            }
//            else if($(this).prop("checked") == false){
//                var tweetstring =  $("#tweettext");
//                alert("tweetstring"+tweetstring)
////                twttr.widgets.createShareButton('https://dev.twitter.com/', tweetstring,
////                                                {
////                    text: tweetstring
////                }
////                                               );
//            }
//        });
//    });
    
    var linkyes = document.getElementById("yeslink").value;
    
    if (linkyes == "on") {
        var link = " j.mp/AlertGT";
        var tweettext = document.getElementById("tweettext").value;
        console.log(tweettext);
        tweettext = tweettext + link;
        console.log(tweettext);
    }
    
}
