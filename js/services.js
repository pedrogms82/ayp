angular
    .module("appAYP")
    .service("estadosGet", estadosGet);

estadosGet.inject = ["$rootScope", "$http", "CONFIG"];
function estadosGet($rootScope, $http ,CONFIG) {

    var estados = this;
    estados.presupuestos = function () {
      var response = $http({
          url: CONFIG.urlApi + "presupuestos_estado?token=" + $rootScope.token,
          method: "GET",
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
      });
      return response;
    }
    estados.pedidos = function () {
      var response = $http({
          url: CONFIG.urlApi + "pedidos_estado?token=" + $rootScope.token,
          method: "GET",
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
      });
      return response;
    }
    estados.facturas = function () {
      var response = $http({
          url: CONFIG.urlApi + "facturas?token=" + $rootScope.token,
          method: "GET",
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
      });
      return response;
    }


      /*
      .then(function(response) {
              // success
              console.log("Se ha ejecutado bien la funcion presu");
              console.log("Respuesta", response);
              console.log("Return", response.data);
              return response.data;

      },
      function(response) { // optional
              // failed
                console.log("No se ha ejecutado bien la funcion presu");
      });*/
}
