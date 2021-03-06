﻿(function () {
    angular
    .module('mainModule')
    .controller('mainCurriculoController', mainCurriculoController);

    function mainCurriculoController($http, BASE_URL_API, $state, localStorageService) {
        var vm = this;
        vm.enviarCurriculo = enviarCurriculo;
        
        vm.curriculo = {           
            "userName": "",
            "senha": "",
            "nome": "",
            "dataNascimento": "",
            "endereco": "",
            "genero": "",
            "telefone": "",
            "email": "",      
            "cpf": "",
            "formacao":"",
            "experiencia": ""
        };
        function enviarCurriculo() {
            vm.mostraLoad = true;
            $http
               .post(BASE_URL_API+"curriculos", vm.curriculo)
               .then(
                   function (result) {
                       toastr["success"]("Currículo cadastrado com sucesso", "Sucesso");
                       var tipo = localStorageService.get('tipo');
                       var id = localStorageService.get('login');
                       $state.go('vagas');
                       return;
                   },
                   function (error) {
                       toastr["error"]("Não foi possível incluir o currículo", "Falha");
                   }).finally(function () {
                       vm.mostraLoad = false;
                   });
            }
    }
})();