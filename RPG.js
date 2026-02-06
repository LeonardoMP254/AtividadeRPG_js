function kuzinho() {
         
js_nome = document.FormConcatena.f_nome.value;
js_sobrenome = document.FormConcatena.f_sobrenome.value;

           
js_nomecompleto = js_nome + ' ' + js_sobrenome;

let classesSelecionada = Array.from(document.getElementById("classes").selectedOptions).map(opcao => opcao.value);

let ataquesSelecionada = Array.from(document.getElementById("ataque").selectedOptions).map(opcao => opcao.value);

if (classesSelecionada.length === 0) {
                alert("⚠️Erro, certifique se foi tudo selecionado");
                return;
            }
if (ataquesSelecionada.length === 0) {
                alert("⚠️Erro, certifique se foi tudo selecionado");
                return;
            }

window.alert(` Seja bem vindo, a nossa Guild ${js_nomecompleto}
Nascido em campos de batalha e acredita que disciplina da sua classe ${classesSelecionada} é a maior arma de um aventureiro.
Com o sua Habilidade: ${ataquesSelecionada} que salvou uma cidade inteira, mudando o curso da realidade para uma vitoria gloriosa.
Sua presença sempre será bem vinda para nos! 
`);
}
