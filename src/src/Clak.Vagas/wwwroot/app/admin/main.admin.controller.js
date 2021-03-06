﻿(function () {
    angular
       .module('mainModule')
       .controller('mainAdminController', mainAdminController);

    function mainAdminController(localStorageService, $state, $stateParams, $http, BASE_URL_API) {

        var vm = this;
        vm.mostraLoad = true;
        vm.VerCandidato = VerCandidato;
        vm.testebotao = testeBotao;
        vm.vagas = [
            {
                "id": 1,
                "titulo": "vaga1",
                "quantidade": 1
            }
        ]
        ativar();

        function ativar() {
            var tipo = localStorageService.get('tipo');
            var id = localStorageService.get('login');
            if (id === null) {
                $state.go('vagas');
                return;
            }
            if (tipo !== undefined && tipo !== "adm") {
                $state.go('login');
            }

            $http
                .get(BASE_URL_API+"vagas/admin")
                .then(
                    function (result) {
                        vm.vagas = result.data;
                    },
                    function (error) {

                    }
                )
                .finally(function () {
                    vm.mostraLoad = false;
                })
        }
        function VerCandidato(vagaId) {
            console.log(vagaId);
            $state.go('listaCandidatos', { id: vagaId });

        }
        function testeBotao(vagaId) {
            console.log(vagaId);
            $state.go('criarVaga', { id: vagaId });

        }
        
    }

})();