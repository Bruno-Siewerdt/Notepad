var listElement = document.querySelector('ul#tarefas');
var inputElement = document.querySelector('input#tarefa');
var buttonElement = document.querySelector('input#botao');
var article = document.getElementById('principal');
article.style.paddingTop = 'padding';

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

var listArquivos = JSON.parse(localStorage.getItem('list_arquivos')) || [];
var mode = localStorage.getItem("Mode") || "day";
var corFundo = localStorage.getItem("corFundo");
var corLetra = localStorage.getItem("corLetra");
var FontSize = localStorage.getItem("FontSize");
var Font = localStorage.getItem("Font");

var submenuActive = false;
var submenu2Active = false;
var submenu3Active = false;
var submenu4Active = false;
var submenu5Active = false;

inputElement.addEventListener('keypress', function(event) {
    if (event.which == 13) {
        addTodo();
    };
});

function renderTodos() {
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', todo)
        var labelElement = document.createElement('label');
        labelElement.innerHTML = todo;
        labelElement.setAttribute('for', todo);
        todoElement.appendChild(checkbox);
        todoElement.appendChild(labelElement);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createElement('img');
        linkText.setAttribute('id', todo + 'A')
        linkText.style.height = '20px';
        linkText.style.marginBottom = '-2px';
        linkText.style.float = 'right';
        linkElement.appendChild(linkText);

        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

        align();
        saveToStorage();
        
        if (mode == "noturne"){
            for (todo of todos) {
                linkText.setAttribute('src', 'icones/lixo.png');
            };
        } else if (mode == "day") {
            for (todo of todos) {
                linkText.setAttribute('src', 'icones/apagar.ico');
            };
        };
    };
};

renderTodos();
getMode();

function getMode() {
    if(mode == "noturne"){
        modoNoturno();
    } else if(mode == "day"){
        modoDia();
    }
    getPred();
}

function setMode(Mode) {
    localStorage.setItem("Mode", Mode);
    mode = localStorage.getItem("Mode");
}

function addTodo() {
    var todoTexto = String(inputElement.value);
    todoTexto = todoTexto.replace('[', `<strong>`);
    todoTexto = todoTexto.replace(']', `</strong>`);
    todoTexto = todoTexto.replace('{', '<em>');
    todoTexto = todoTexto.replace('}', '</em>');
    todos.push(todoTexto);
    inputElement.value = '';
    renderTodos();
};

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
};

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
};

function align() {
    var cont = 0;
    for (todo of todos) {
        cont++;
    };
    var padding = (180 - (cont * 13)) + 'px';
    article.style.paddingTop = padding
    localStorage.setItem('padding', String(padding))
};

function getPred(){
    document.getElementById('body').style.backgroundColor = corFundo;
    document.getElementById('tarefas').style.color = corLetra;
    document.getElementById('tarefas').style.fontSize = FontSize;
    document.getElementById('tarefas').style.fontFamily = Font;

    document.getElementById('corFundo').setAttribute("value", document.getElementById('body').style.backgroundColor);
    document.getElementById('corLetra').setAttribute("value", document.getElementById('tarefas').style.color);
}

function setPred(parameter, value){
    if(parameter == "corFundo"){
        localStorage.setItem("corFundo", value);
    } else if(parameter == "corLetra"){
        localStorage.setItem("corLetra", value);
    } else if(parameter == "FontSize"){
        localStorage.setItem("FontSize", value);
    } else if(parameter == "Font"){
        localStorage.setItem("Font", value);
    }
}

function corDeFundo() {
    var corpo = document.getElementById('body');
    var cor = document.getElementById('corFundo');
    cor = cor.value;
    corpo.style.backgroundColor = cor;
    console.log(corpo.style.backgroundColor);
    setPred("corFundo", corpo.style.backgroundColor);
};

function mudarTexto() {
    var list = document.getElementById('tarefas');
    var cor = document.getElementById('corLetra');
    cor = cor.value;
    var tamanho = document.getElementById('tamanhoFonte');
    tamanho = tamanho.value;
    list.style.color = cor;
    list.style.fontSize = tamanho + 'pt';
    setPred("corLetra", list.style.color);
    setPred("FontSize", tamanho + "pt");
};

function Fonte() {
    var selectFont = document.querySelector('select#fontes');
    var list = document.getElementById('tarefas');
    selectFont = selectFont.value;
    if (selectFont == 'Arial') {
        list.style.fontFamily = 'Arial, Helvetica, sans-serif';
    } else if (selectFont == 'Times') {
        list.style.fontFamily = "'Times New Roman', Times, serif";
    } else if (selectFont == 'Caviar') {
        list.style.fontFamily = 'Caviar';
    } else if (selectFont == 'Champagne') {
        list.style.fontFamily = 'Champagne';
    } else if (selectFont == 'Bosque') {
        list.style.fontFamily = 'Bosque';
    } else if (selectFont == 'Sunflower') {
        list.style.fontFamily = 'Sunflower'
    } else if (selectFont == 'Sketch') {
        list.style.fontFamily = 'Sketch'
    } else if (selectFont == 'Brightly') {
        list.style.fontFamily = 'Brightly'
    } else if (selectFont == 'Varsity') {
        list.style.fontFamily = 'Varsity'
    } else if (selectFont == 'Alice') {
        list.style.fontFamily = 'Alice'
    } else if (selectFont == 'Avenger') {
        list.style.fontFamily = 'Avenger'
    } else if (selectFont == 'Better') {
        list.style.fontFamily = 'Better'
    } else if (selectFont == 'Halloween') {
        list.style.fontFamily = 'Halloween'
    } else if (selectFont == 'Cookies') {
        list.style.fontFamily = 'Cookies'
    } else if (selectFont == 'Natal') {
        list.style.fontFamily = 'Natal'
    } else if (selectFont == 'Cubic') {
        list.style.fontFamily = 'Cubic'
    } else if (selectFont == 'February') {
        list.style.fontFamily = 'February'
    } else if (selectFont == 'Flakes') {
        list.style.fontFamily = 'Flakes'
    } else if (selectFont == 'Birthday') {
        list.style.fontFamily = 'Birthday'
    } else if (selectFont == 'Harry') {
        list.style.fontFamily = 'Harry'
    } else if (selectFont == 'Hello') {
        list.style.fontFamily = 'Hello'
    } else if (selectFont == 'Infected') {
        list.style.fontFamily = 'Infected'
    } else if (selectFont == 'JMH') {
        list.style.fontFamily = 'JMH'
    } else if (selectFont == 'Kashima') {
        list.style.fontFamily = 'Kashima'
    } else if (selectFont == 'KGA') {
        list.style.fontFamily = 'KGA'
    } else if (selectFont == 'LFL') {
        list.style.fontFamily = 'LFL'
    } else if (selectFont == 'Lion') {
        list.style.fontFamily = 'Lion'
    } else if (selectFont == 'Love') {
        list.style.fontFamily = 'Love'
    } else if (selectFont == 'Mine') {
        list.style.fontFamily = 'Mine'
    } else if (selectFont == 'London') {
        list.style.fontFamily = 'London'
    } else if (selectFont == 'Roman') {
        list.style.fontFamily = 'Roman'
    } else if (selectFont == 'SketchB') {
        list.style.fontFamily = 'SketchB'
    } else if (selectFont == 'Saloon') {
        list.style.fontFamily = 'Saloon'
    } else if (selectFont == 'Transformers') {
        list.style.fontFamily = 'Transformers'
    } else if (selectFont == 'White') {
        list.style.fontFamily = 'White'
    }  else if (selectFont == 'Sega') {
        list.style.fontFamily = 'Sega'
    }
    setPred("Font", list.style.fontFamily);
};

function submenu() {
    var submenu = document.getElementById('submenu')
    if (submenuActive == false) {
        submenu.style.display = 'block';
        submenuActive = true;
        submenu2Active = true;
        submenu3Active = true;
        submenu4Active = true;
        submenu5Active = true;
        submenu3();
        submenu2();
        submenu4();
        submenu5();
    } else {
        submenu.style.display = 'none';
        submenuActive = false;
    };
};

function submenu2() {
    var submenu2 = document.getElementById('submenu2')
    if (submenu2Active == false) {
        submenu2.style.display = 'block';
        submenu2Active = true;
        submenuActive = true;
        submenu3Active = true;
        submenu4Active = true;
        submenu5Active = true;
        submenu3();
        submenu();
        submenu4();
        submenu5();
    } else {
        submenu2.style.display = 'none';
        submenu2Active = false;
    };
};

function submenu3() {
    var submenu3 = document.getElementById('submenu3')
    if (submenu3Active == false) {
        submenu3.style.display = 'block';
        submenu3Active = true;
        submenuActive = true;
        submenu2Active = true;
        submenu4Active = true;
        submenu5Active = true;
        submenu();
        submenu2();
        submenu4();
        submenu5();
    } else {
        submenu3.style.display = 'none';
        submenu3Active = false;
    };
};

function submenu4() {
    var submenu4 = document.getElementById('submenu4')
    if (submenu4Active == false) {
        submenu4.style.display = 'block';
        submenuActive = true;
        submenu2Active = true;
        submenu3Active = true;
        submenu4Active = true;
        submenu5Active = true;
        submenu3();
        submenu2();
        submenu();
        submenu5();
    } else {
        submenu4.style.display = 'none';
        submenu4Active = false;
    };
}

function submenu5() {
    var submenu5 = document.getElementById('submenu5')
    if (submenu5Active == false) {
        submenu5.style.display = 'block';
        submenuActive = true;
        submenu2Active = true;
        submenu3Active = true;
        submenu4Active = true;
        submenu5Active = true;
        submenu3();
        submenu2();
        submenu();
        submenu4();
    } else {
        submenu5.style.display = 'none';
        submenu5Active = false;
    };
}

function modoNoturno() {
    var corpo = document.getElementById('body');
    var lado = document.getElementById('esquerda');
    var input = document.getElementById('tarefa');
    var button = document.getElementById('botao');
    var links = document.getElementsByName('links');
    var corDeFundo = document.getElementById('corFundo');
    var corDaLetra = document.getElementById('corLetra');
    var submenu = document.getElementById('submenu');
    var submenu2 = document.getElementsByName('Submenus');

    setMode("noturne");
    
    for (var c = 0; c < submenu2.length; c++) {
        submenu2[c].style.backgroundColor = '#080808';
    };
    submenu.style.backgroundColor = '#080808';

    for (todo of todos) {
        var lixo = document.getElementById(todo + 'A');
        lixo.setAttribute('src', 'icones/lixo.png')
    };
    corpo.style.backgroundColor = '#121212';
    corpo.style.color = '#ffffff';
    lado.style.backgroundColor = '#000';
    button.style.backgroundColor = '#121212';
    input.style.backgroundColor = '#121212';
    input.style.color = 'white';
    input.style.border = '1px solid white'
    button.style.border = '1px solid white';
    button.style.color = 'white';
    for (var c = 0; c < links.length; c++) {
        links[c].style.color = 'white';
    };
    corDeFundo.setAttribute('value', '#121212');
    corDaLetra.setAttribute('value', '#ffffff');
    
    setPred("corFundo", corpo.style.backgroundColor);
    setPred("corLetra", list.style.color);

};

function modoDia() {
    var corpo = document.getElementById('body');
    var lado = document.getElementById('esquerda');
    var input = document.getElementById('tarefa');
    var button = document.getElementById('botao');
    var links = document.getElementsByName('links');
    var corDeFundo = document.getElementById('corFundo');
    var corDaLetra = document.getElementById('corLetra');
    var submenu = document.getElementById('submenu');
    var submenu2 = document.getElementsByName('Submenus');

    setMode("day");

    for (var c = 0; c < submenu2.length; c++) {
        submenu2[c].style.backgroundColor = '#bababa';
    };
    submenu.style.backgroundColor = '#bababa';

    for (todo of todos) {
        var lixo = document.getElementById(todo + 'A');
        lixo.setAttribute('src', 'icones/apagar.ico')
    };
    corpo.style.backgroundColor = '#ffffff';
    corpo.style.color = '#121212';
    lado.style.backgroundColor = '#cccccc';
    input.style.backgroundColor = 'white';
    button.style.backgroundColor = '#cccccc';
    button.style.border = 'none';
    button.style.color = 'black'
    input.style.color = 'black';
    input.style.border = '1px solid black';
    corDeFundo.setAttribute('value', '#ffffff');
    corDaLetra.setAttribute('value', '#000000');
    for (var c = 0; c < links.length; c++) {
        links[c].style.color = 'black';
    };
    renderTodos();

    setPred("corFundo", corpo.style.backgroundColor);
    setPred("corLetra", list.style.color);
};

var listElement2 = document.getElementById('arquivos');
var inputElement2 = document.getElementById('inputSalvar');

/*function salvarArquivo() {
    listArquivos.push(inputElement2.value + ': ' + todos);
    console.log(listArquivos);
    renderList();
};

function renderList() {
    listElement2.innerHTML = '';
    for (arquivo of listArquivos) {
        var arquivoElement = document.createElement('li');
        var arquivoText = document.createTextNode(arquivo);
        arquivoElement.appendChild(arquivoText);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        var pos = listArquivos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteArquivo(' + pos + ')');

        var linkText = document.createElement('img');
        linkText.setAttribute('id', arquivo + 'A');
        linkText.style.height = '15px';
        linkText.style.marginBottom = '-2px';
        linkText.style.float = 'right';
        linkElement.appendChild(linkText);

        arquivoElement.appendChild(linkElement);

        arquivoElement.setAttribute('ondblclick', 'abrirArquivo(' + arquivo + ')');

        listElement2.appendChild(arquivoElement);

        inputElement2.value = '';

        saveToStorageList();

        todos = [];
        
        if (noturnoActive == true){
            for (arquivo of listArquivos) {
                linkText.setAttribute('src', 'icones/lixo.png');
            };
        } else if (noturnoActive == false) {
            for (arquivo of listArquivos) {
                linkText.setAttribute('src', 'icones/apagar.ico');
            };
        };
    };
};

function deleteArquivo(pos) {
    listArquivos.splice(pos, 1);
    renderList();
};

function saveToStorageList() {
    localStorage.setItem('list_arquivos', JSON.stringify(listArquivos));
};

function abrirArquivo(arquivo) {
    
}*/
