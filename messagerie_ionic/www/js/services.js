angular.module('mike.services', [])

.factory("Login", function() {
    return function() {
        return {
            get: function() {},
            getId: function() {},
            getEmail: function() {},
            set: function(data) {
                //Enregistrement user to localstorage
                //JSON.stringify() => changer JSON en chaine de caractères
                localStorage.setItem('user', JSON.stringify(data));
                //1er argument la clé qu'on appelle 'user' : Le premier argument de setItem est la clé (toujours de type String). Elle précise l'endroit où sont stockées les données afin de pouvoir les y retrouver ultérieurement.
                // localStorage.getItem('user', JSON.stringify(data));
                return true;
            },
            changePass: function() {}
        }
    }
})

.factory("User", function() {
    return function() {

    }
})

.factory("Messages", function() {
    return function() {

    }
})

.factory("DetailMessages", function() {
    return function() {

    }
})

.factory("Contacts", function() {
    return function() {

    }
})

.factory("ContactsRecommended", function() {
    return function() {

    }
})

.factory("Groups", function() {
    return function() {

    }
})

.factory("DetailGroups", function() {
    return function() {

    }
})

.factory("UserGroups", function() {
    return function() {

    }
})

.factory("Settings", function() {
    return function() {

    }
})

.factory('Camera', function($q) {
    return {
        getPicture: function(options) {
            var q = $q.defer();
            navigator.camera.getPicture(function(result) {
                q.resolve(result);
            }, function(err) {
                q.reject(err);
            }, options);
            return q.promise;
        }
    }
});