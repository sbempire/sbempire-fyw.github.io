setInterval(function () {

var enddate = new Date("Sep 02 2016 00:00:00 GMT+05:30"); // change your date here like Jan 10 2015

var today = new Date();

var difference = Math.floor((enddate.getTime() - today.getTime()) / 1000);

var seconds = GlobalFunctn(difference % 60);

difference = Math.floor(difference / 60);