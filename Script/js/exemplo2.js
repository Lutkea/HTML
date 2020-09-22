        // // define o objeto
        // var estudante = {
        //     nome: "Amanda",
        //     idade: "19", 
        //     matricula: "1234567"
        // };
        
        // var estudante2 = {
        //     nome: "José",
        //     idade: "23",
        //     matricula: "7654321"
        // }

        // // modificando propriedades
        // estudante2.idade = "24";

        // console.log(estudante2.nome);
        
        function carregou(){
            alert("Oi");
        }
        function alterou(){
            alert("Alterou");
        }
        function salvarNome(){
            var inputNome = document.getElementById("nome");
            var valorNome = inputNome.value;
            // if(valorNome == "Amanda")
            //     inputNome.style.backgroundColor = "green";
            // else
            //     inputNome.style.backgroundColor = "red";
            //alert(valorNome);
            var divBox = document.getElementById("box");
 
           // divBox.innerHTML = "<p>"+valorNome+"</p>";
 
            var paragrafo = document.createElement("div");
            paragrafo.innerText = valorNome;
            paragrafo.style.backgroundColor = "pink";
            divBox.appendChild(paragrafo);
 
            debugger;
        }
        function limparConteudo(){
            var divBox = document.getElementById("box");
            divBox.innerHTML = "";
        }