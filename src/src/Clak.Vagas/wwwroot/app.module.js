﻿/// <reference path="app/curriculo_candidato/main.curriculocandidato.view.html" />
(function () {

    angular
        .module('mainModule', [
        'ui.router',
        'ngMaterial',
        'LocalStorageModule',
        'ngSanitize',
        'textAngular'

    ]);

    angular
    .module('mainModule')
    .config(configMainModule)
   // .run(runModule);

   // function runModule(localStorageService) {
      //  localStorageService.set('login', null);
      //  localStorageService.set('tipo', null);
  //  } 

    function configMainModule($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('clakvagas')
            .setStorageType('sessionStorage')

        $urlRouterProvider.otherwise('/vagas');

        $stateProvider.state('vagas',
            {
                url: '/vagas',
                templateUrl: "app/vagas/main.vagas.view.html",
                controller: "mainVagasController",
                controllerAs: "vm"
            }
        );
        $stateProvider.state('vagaDetalhe',
           {
               url: '/vagaDetalhe/{id}',
               templateUrl: "app/detalhes/main.detalhes.view.html",
               controller: "mainDetalhesController",
               controllerAs: "vm"
           }
       );
        $stateProvider.state('login',
            {
                url: '/login',
                templateUrl: "app/login/main.login.view.html",
                controller: "mainLoginController",
                controllerAs: "vm"
            }
       );
        $stateProvider.state('home',
            {
                url: '/home',
                templateUrl: "app/home/main.home.view.html",
                controller: "mainHomeController",
                controllerAs: "vm"
             }   
        );
        $stateProvider.state('admin',
            {
                url: '/admin',
                templateUrl: "app/admin/main.admin.view.html",
                controller: "mainAdminController",
                controllerAs: "vm"
            }
        );
        $stateProvider.state('listaCandidatos',
          {
              url: '/listaCandidatos/{id}',
              templateUrl: "app/lista_candidatos/main.listaCandidatos.view.html",
              controller: "mainlistaCandidatosController",
              controllerAs: "vm"
          }
         );
        $stateProvider.state('curriculoCandidato',
          {
              url: '/curriculoCandidato/{id}/{vagaId}',
              templateUrl: "app/curriculo_candidato/main.curriculoCandidato.view.html",
              controller: "maincurriculoCandidatoController",
              controllerAs: "vm"
          }
        );
        $stateProvider.state('curriculo',
       {
           url: '/curriculo',
           templateUrl: "app/curriculo/main.curriculo.view.html",
           controller: "mainCurriculoController",
           controllerAs: "vm"
       }
        );
        $stateProvider.state('criarVaga',
      {
          url: '/criarVaga',
          templateUrl: "app/criar_vaga/main.criarVaga.view.html",
          controller: "mainCriarVagaController",
          controllerAs: "vm"
      }
       );
    }
})();

