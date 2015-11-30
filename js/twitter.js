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
 
//Twitter buttons fuction
!function(d,s,id){var js,fjs=d.getElementsByTagName(s),p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

function tweetOption(option) {
    var optionText = "";
    switch (option) {
        case 1:
            console.log("The option is 1");
            optionText = "#GivingTuesday is today! This global day of charity is the perfect time to support #peace @intalert";
            break;
        case 2:
            console.log("the option is 2");
            optionText = "On #GivingTuesday, @intalert will share stories of people around the world building #peace";
            break;
        case 3:
            console.log("the option is 3");
            optionText = "On #GivingTuesday, stand with people around the world & help them build #peace @intalert";
            break;
        case 4:
            console.log("the option is 4");
            optionText = "#Peace is when people manage their conflicts without violence #GivingTuesday @intalert";
            break;
        case 5:
            console.log("the option is 5");
            optionText = "To end the #refugeecrisis, we need to build peace #GivingTuesday @intalert";
            break;
        default:
            console.log("the option is 0");
            optionText = "#GivingTuesday @IntAlert";
    }
    //CLEAR OLD BUTTON
    var elem = document.getElementById("buttonsection");
    if (elem != null ){
        elem.removeChild(elem.firstElementChild);
    }
    //load new crafted button
    var craftedLink = document.createElement('a');
    craftedLink.setAttribute('href', 'https://twitter.com/share');
    craftedLink.setAttribute('class', 'twitter-share-button');
    craftedLink.setAttribute("data-text" , optionText);
    craftedLink.setAttribute("data-size" ,"large");
    craftedLink.setAttribute("data-url", "http://j.mp/AlertGT");
    this.buttonsection.appendChild(craftedLink);
    twttr.widgets.load();
}