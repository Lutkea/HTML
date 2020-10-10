var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req, res) {
    if (req.url != '/favicon.ico'){
        var query = url.parse(req.url, true).query;
        let nome = query.nome;
        let senha = query.senha;
        if(nome != undefined && senha != undefined){
            let texto = nome + " - " + senha + "\n";
            fs.appendFile("banco.txt",texto, function(err){
                if(err)
                    throw err;
                console.log("Arquivo atualizado!")
            });
            res.write(nome + " " + senha);
            res.end();
        }
    }
}).listen(8080)

http.createServer(function(req,res){
    fs.readFile("banco.txt", function(err,data){
        res.write(data);
    })

}).listen(8088);