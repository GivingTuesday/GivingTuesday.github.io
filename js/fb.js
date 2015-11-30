OAuth.initialize("OJdgEuDcr7b3U_zfj7xjaLDbU6Q");
fbLogin();

//Using popup
function fbLogin() {
    OAuth.popup("facebook")
    .done(function(result) {
        result.get("/me")
        .done(function (response) {
            var fullname = response.name;
            var firstname = fullname.split(" ");
            document.getElementById("welcomeName").innerHTML = "Help spread the word, " + firstname[0] + "!";
        })
        .fail(function (err) {
        });
    })
    .fail(function (err) {
    });
}

function postStatus() {
    var statusText = document.getElementById("statusText").value;
    var bitly = "http://j.mp/AlertGT";
    var hashtags = "#InternationalAlert #GivingTuesday #Peace";
    statusText = statusText + " - " + bitly + " " + hashtags;
    FB.api("/me/feed", "post", { message: statusText }, function(response) {
        if (!response || response.error) {
            alert("Error");
        } else {
            alert("Submitted");
        }
    });
}