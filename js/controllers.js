angular
    .module("appAYP")
    .controller("LoginController", LoginController)
    .controller("HomeController", HomeController);/*
    .controller("SignUpController", SignUpController)
    .controller("LogoutController", LogoutController);

function SignUpController($auth, $location) {
    var vm = this;
    this.signup = function() {
        $auth.signup({
            email: vm.email,
            password: vm.password
        })
        .then(function() {
            // Si se ha registrado correctamente,
            // Podemos redirigirle a otra parte
            $location.path("/private");
        })
        .catch(function(response) {
            // Si ha habido errores, llegaremos a esta función
        });
    }
}


function LogoutController($auth, $location) {
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/")
        });$auth, $location
}*/
LoginController.$inject = ["$http", "$location", "$rootScope"];
function LoginController($http, $location, $rootScope) {
    var login = this;

  //  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    login.submit = function () {
          $http({
              url: 'http://app.ayudapyme.es/loginajs',
              method: "POST",
              headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
              params: { email : login.user.email, Pass : login.user.pass }
          })
          .then(function(response) {
                  // success
                  console.log("Se ha ejecutado bien la funcion");
                  console.log(response);
                  if (response.data.token) {
                     $rootScope.token = response.data.token;
                     $location.path("/home");
                   }
          },
          function(response) { // optional
                  // failed
                    console.log("No se ha ejecutado bien la funcion");
          });
      }
      //Consulta ajax con user.name y user.pass
}
HomeController.$inject = ["CONFIG", "estadosGet"];
function HomeController (CONFIG, estadosGet){
  var home = this;
  console.log(home);

home.estado ="limpio"


  var presupuestos = estadosGet.presupuestos();

  presupuestos.then(function(response) {
            // success
            console.log("Se ha ejecutado bien la funcion presus");
            console.log("Respuesta", response);
            console.log("Return", response.data);
            home.Pr = response.data;
            console.log("N Pre",home.Pr.Presupuestos.Total);

    },
    function(response) { // optional
            // failed
              console.log("No se ha ejecutado bien la funcion presu");
    });

  console.log("presupuestos", presupuestos);
  console.log("H1", home);

  var pedidos = estadosGet.pedidos();

  pedidos.then(function(response) {
            // success
            console.log("Se ha ejecutado bien la funcion presus");
            console.log("Respuesta", response);
            console.log("Return", response.data);
            home.Pd = response.data;
            console.log("N pep",home.Pd.Pedidos.Total);

    },
    function(response) { // optional
            // failed
              console.log("No se ha ejecutado bien la funcion presu");
    });

  console.log("pedidos", pedidos);
  console.log("H2", home);

 /*.then(
      function success(result){
        console.log("Devuelta", result);
        home.presupuesto = result;
      },
      function error(){
        console.log("Error en promesa");
      });*/

      console.log("HOME", home.presupuesto);

/*
  $Estado_Presupuesto = file_get_contents($_SESSION['url_api'].'presupuestos_estado?token='.$_SESSION["token"]);
  $Estado_Pedido = file_get_contents($_SESSION['url_api'].'pedidos_estado?token='.$_SESSION["token"]);
  $Estado_Factura = file_get_contents($_SESSION['url_api'].'facturas_estado?token='.$_SESSION["token"]);
  */
}
