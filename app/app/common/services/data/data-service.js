(function () {
  'use strict';

  /* JAVASCRIPT */

  /**
   * DataService Object/function
   */
  function DataService($log, $http, localStorageService) {

    $log = $log.getInstance('DataService', true);
    $log.debug("load()");

    /***************** PRIVATE *******************/

    /**
 * doSomething() - Private function
 */
    function _get(url) {

      $log.debug("get(" + url + ")");

      var req = {
        method: 'GET',
        url: url
      };

      return $http(req)
        .then(function successCallback(data, status, headers, config) {
          console.log("done(" + url + ")");
          return data;
        }, function errorCallback(response) {
          console.log("Error:" + response);
          return response;
        });

    }

    function _post(url, data, headers) {

      console.log("post(" + url + ")");

      var req = {
        method: 'POST',
        url: url,
        data: data,
        headers: headers
      };

      return $http(req)
        .then(function successCallback(data) {
          console.log("done(" + url + ")");
          return data;
        }, function errorCallback(response) {
          console.log("Error:" + response);
          return response;
        });

    }

    /****************** PUBLIC *******************/
    var service = {
      get: _get,
      post: _post
    };

    return service;
  }

  /* ANGULAR */
  angular
    .module('common')
    .factory('dataService', DataService);

})();
