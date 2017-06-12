﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Dapper;

namespace Clak.Vagas.Controllers
{
    [Route("api/[controller]")]
    public class CurriculosController : Controller
    {
        private string _stringConnection = @"Data Source=ev5toyh7r2.database.windows.net,1433;User Id=clak;Password=vagas+2017; Initial Catalog=clakVagas";

        [HttpPost]
        public IActionResult Post([FromBody]CurriculoInput curriculo)
        {

            using (var conexao = new SqlConnection(_stringConnection))
            {
                var sql = @"SELECT userName FROM usuarios WHERE userName = @userName";
                var resultado = conexao.Query(sql, new { userName = curriculo.UserName })                    
                    .FirstOrDefault();
                if (resultado != null)
                    return BadRequest("UserName já cadastrado!");

                sql = @" INSERT INTO curriculos (nome, dataNascimento, endereco, genero,telefone, email, cpf, formacao, experiencia)
                           values (@nome, @dataNascimento, @endereco, @genero,@telefone, @email, @cpf, @formacao, @experiencia )";
                conexao.Execute(sql, new
                {
                    nome = curriculo.Nome,
                    dataNascimento = curriculo.DataNascimento,
                    endereco = curriculo.Endereco,
                    genero = curriculo.Genero,
                    telefone = curriculo.Telefone,
                    email = curriculo.Email,
                    cpf = curriculo.Cpf,
                    formacao = curriculo.Formacao,
                    experiencia = curriculo.Experiencia,
                });
                sql = @" INSERT INTO usuarios (userName,senha,tipo)
                        values (@userName,@senha,'user')";
                conexao.Execute(sql, new
                {
                    userName = curriculo.UserName,
                    senha = curriculo.Senha
                });
            }

            return Ok();
        }
    }

    public class CurriculoInput
    {
        public String Nome { get; set; }
        public String DataNascimento { get; set; }
        public String Endereco { get; set; }
        public String Genero { get; set; }
        public String Telefone{ get; set; }
        public String Email { get; set; }
        public String Cpf{ get; set; }
        public String Formacao { get; set; }
        public String Experiencia{ get; set; }
        public String UserName{ get; set; }
        public String Senha { get; set; }
    }
}

