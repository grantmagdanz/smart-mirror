(function(annyang) {
    'use strict';

    // var instagram = require('instagram-node').instagram()
    
    // instagram.use({
    //     client_id: 'f7474325fb054daf884a8eaa60013df6',
    //     client_secret: 'b07ee216d8e4473f81f35ce7ada65aef'
    // });
    
    // instagram.use({
    // });
    var access_token = '353298742.f747432.1f207b054b8b4d2f801b49170f012606'
    
    function InstagramService($http) {
        var service = {}

        var last_media = []
        var last_requested = -1
        
        service.getSelfPictures = function() {
            var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token
            $http.get(url).then(
                function(response) {
                    var media = response.data.data
                    console.log(media)
                    return media[0].images.standard_resolution.url
                },
                function(error) {
                    console.log(error)
                });

        }

        return service
    }
    
    angular.module('SmartMirror')
        .factory('InstagramService', InstagramService);

}(window.annyang));
