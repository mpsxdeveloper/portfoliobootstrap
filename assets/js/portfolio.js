var n = [
    'Nome/Sobrenome'
];

window.onload = function() {
    
    var nome = document.getElementById("nome");
    var vagas = document.getElementById("vagas");
    var skills = document.getElementById("skills");
    var formacao = document.getElementById("formacao");
    var cursos = document.getElementById("cursos");
    var projetos = document.getElementById("projetos");
    var livros = document.getElementById("livros");
    var experiencia = document.getElementById("experiencia");
    var informacoes = document.getElementById("informacoes");  
    
    nome.innerHTML = n[0];
    for(var i = 0; i < v.length; i++) {
        if(i !== 0) {
            vagas.innerHTML = vagas.innerHTML + ", " + v[i];
        }
        else {
            vagas.innerHTML = '<strong>' + vagas.innerHTML + v[i] + '</strong>';
        }
    }
    for(var i = 0; i < s.length; i ++) {
        var icon = document.createElement("i");        
        icon.innerHTML = s[i];       
        skills.appendChild(icon);
    }
    for(var i = 0; i < f.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = f[i];
        formacao.appendChild(div);
    }
    for(var i = 0; i < c.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = c[i];
        cursos.appendChild(div);
    }
    for(var i = 0; i < p.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = p[i];
        projetos.appendChild(div);
    }
    for(var i = 0; i < l.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = l[i];
        livros.appendChild(div);
    }
    for(var i = 0; i < e.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = e[i];
        experiencia.appendChild(div);
    }
    for(var i = 0; i < inf.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = inf[i];
        informacoes.appendChild(div);
    }
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);        
    });
    
};