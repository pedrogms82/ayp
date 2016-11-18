angular
    .module("appAYP", ["ui.router", "angularCSS", "oc.lazyLoad"])
    .constant("CONFIG", { urlApi: "http://app.ayudapyme.es/"})
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        // Parametros de configuración
 //       $authProvider.loginUrl = "http://api.com/auth/login";
  //      $authProvider.signupUrl = "http://api.com/auth/signup";
   //     $authProvider.tokenName = "token";
    //    $authProvider.tokenPrefix = "myApp",

    $ocLazyLoadProvider.config({
      debug:false,
    events:true,
    });

    $urlRouterProvider.otherwise('/');

/*
    resolve: {
             loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                 name:'login',
                 files:[
                 'css/login/bootstrap.min.css',
                 'css/login/font-awesome.min.css',
                 'css/login/form-elements.css',
                 'css/login/style.css'
                 ]
               })
             }
           }
*/


        // Configuración de las rutas/estados
        $stateProvider
            .state("login", {
                url: "/",
                templateUrl: "views/login.html",
                controller: "LoginController",
                controllerAs: "login",
                resolve: {
                         loadMyFiles:function($ocLazyLoad) {
                           return $ocLazyLoad.load({
                             name:'login',
                             files:[
                             //'css/login/bootstrap.min.css',
                             //'css/login/font-awesome.min.css',
                             'css/login/form-elements.css',
                             'css/login/style.css'
                              ]
                           })
                         }
                       }
            })
            .state("home", {
                url: "/home",
                templateUrl: "views/home.html",
                controller: "HomeController",
                controllerAs: "home"
              /*  resolve :{
                        loadMyFiles:function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                              name: 'home',
                              files:[
                                 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
                                 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css',
                                 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
                                 'css/home/bootstrap.min.css',
                                 'css/home/skin-blue.min.css',
                                 'css/home/_all-skins.min.css',
                                 'css/home/blue.css',
                                 'css/home/morris.css',
                                 'css/home/jquery-jvectormap-1.2.2.css',
                                 'css/home/datepicker3.css',
                                 'css/home/daterangepicker-bs3.css',
                                 'css/home/bootstrap3-wysihtml5.min.css'
                               ]
                          })
                        }
                    }*/
            });/*
            .state("signup", {
                url: "/signup",
                templateUrl: "views/signup.html",
                controller: "SignUpController",
                controllerAs: "signup"
            })
            .state("logout", {
                url: "/logout",
                templateUrl: null,
                controller: "LogoutController"
            })
            .state("private", {
                url: "/private",
                templateUrl: "views/private.html",
                controller: "PrivateController",
                controllerAs: "private"
            });*/
    }
