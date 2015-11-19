OAuth.initialize('4knrkxYhVuLLGj9DGm7O1HenV');
function authMe() {
//Example with Twitter with the cache option enabled
OAuth.popup('twitter', {cache: true}).done(function(twitter) {
//make API calls with `twitter`
console.log("You're logged in to twitter. Congrats");
res = OAuth.create('twitter');
res.me().done(function(me) {
alert('Hello ' + me.name);
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

//OAuth.popup('twitter').then(function(oauthResult) {
//  return oauthResult.get('/me');
//}).then(function(data) {
//  // data is the result of the request to /me
//}).fail(function(err) {
//  // handle an error
//});

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
    authMe();
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
        var tweettag = " #GivingTuesday @IntAlert";
        var link = " j.mp/AlertGT";
        var tweettext = document.getElementById("tweettext").value;
        tweettext = tweettext + tweettag;
        console.log(tweettext);
        tweettext = tweettext + link;
        console.log(tweettext);
//        twttr.widgets.createTweet("https://twitter.com/share", tweettext,{text: tweettext});
        OAuth.popup('twitter').then(function(oauthResult) {
            return oauthResult.get('/me');
            oauthResult.post('https://api.twitter.com/1.1/statuses/update.json', {
            data: {
                status: tweettext
            }
        })
            console.log(oauthResult);
        })
        
    }
    
}

//<a href="https://twitter.com/share" class="twitter-share-button"{count} data-text=" #GivingTuesday @IntAlert" data-size="large">Tweet</a>
//<script>
    !function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;fjs.parentNode.insertBefore(js,fjs);}
}(document, 'script', 'twitter-wjs');
