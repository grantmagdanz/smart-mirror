(function(annyang) {
    'use strict';

    var instagram = require('instagram-node').instagram()
    ig.use({ client_id: 'f7474325fb054daf884a8eaa60013df6',
         client_secret: '353298742.f747432.1f207b054b8b4d2f801b49170f012606' });

    function InstagramService() {
        var service = {}

        service.getMyFeed = function() {
            instagram.user("grantmagdanz", function(err, res) {
                console.log("err: " + err)
                console.log("result: " + result)
            })
        }



    angular.module('SmartMirror')
        .factory('InstagramService', InstagramService);

}(window.annyang));
