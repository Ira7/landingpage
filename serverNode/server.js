var express = require('express');
var app = express();
var helper = require('sendgrid').mail
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 9090));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

//app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile((__dirname + '/index.html'));
});



app.post('/sendemail', function(req, res) {

    var from_email = new helper.Email("prodware.system@gmail.com");
    var to_email = new helper.Email("info@prodware.co.il");
    //var to_email = new helper.Email("efi.t@prodware.fr")
    var subject = "<b>user registered to the event</b>";
    var content = "<h1>The user details are</h1><br>" +
                  "company:" + req.body.company + '<br>' +
                  "email:" + req.body.email + "<br>" +
                  "firstName:" + req.body.firstName + "<br>" +
                  "lastName:" + req.body.lastName + "<br>" +
                  "phone:" + req.body.phone + "<br>" +
                  "promo:" + req.body.promo + "<br>" +
                  "role:" + req.body.role + "<br>" +
                  "azure:" + req.body.azure + "<br>" +
                  "cloud:" + req.body.cloud + "<br>" +
                  "office:" + req.body.office + "<br>" +
                  "academy:" + req.body.academy + "<br>" +
				  "dynamics:" + req.body.dynamics + "<br>" +
                  "digital:" + req.body.digital + "<br>" +
                  "approved:" + req.body.approved + "<br>";
    var content = new helper.Content("text/html", content)
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')('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');

    var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
       res.send(response);
    });   
});



function getUserId(error,token) {

    var req = new XMLHttpRequest

    req.open("GET", encodeURI(organizationURI + "/api/data/v8.0/WhoAmI"), true);

    req.onreadystatechange = function () {

    if (req.readyState == 4 && req.status == 200) {

    var whoAmIResponse = JSON.parse(req.responseText);

    getFullname(whoAmIResponse.UserId)

    }

    };

    req.setRequestHeader("OData-MaxVersion", "4.0");

    req.setRequestHeader("OData-Version", "4.0");

    req.setRequestHeader("Accept", "application/json");

    req.setRequestHeader("Authorization", "Bearer " + token);

    req.send();

}

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});