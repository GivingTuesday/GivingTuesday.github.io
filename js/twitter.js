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
 
//Twitter buttons fuction
!function(d,s,id){var js,fjs=d.getElementsByTagName(s),p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');