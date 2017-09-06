;(function () {

})();

var tmpObj = {};

var modal = document.getElementById("form1");
var btn = document.getElementById("add");
var span = document.getElementsByClassName("close")[0];

// Вывод окна ввода контакта

btn.onclick = function () {
    modal.style.display = "block"
};

span.onclick = function () {
    modal.style.display = "none"
};

// Обработка формы

function valid (fotm) {
    tmpObj.name = document.getElementsByName("name1")[0].value;
    tmpObj.surname = document.getElementsByName('surname')[0].value;
    var phones = document.getElementsByName('phone');
    tmpObj.phones1=[];
    for(var i = 0; i<phones.length; i++){
        tmpObj.phones1.push(phones[i].value);
    }
    var emails = document.getElementsByName('email');
    tmpObj.emails1=[];
    for(var i = 0; i<emails.length; i++){
        tmpObj.emails1.push(emails[i].value);
    }

   localStorage.setItem(tmpObj.name, JSON.stringify(tmpObj));

    alert('Contact ' + tmpObj.name + ' added to memory');
    window.location.reload();
}

// Поиск

function Search() {
    var input, a, i, ul, li, filter;
    input = document.getElementById('poisk');
    filter = input.value.toUpperCase();
    ul = document.getElementById('spisok');
    li = ul.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}

// Добавление полей телефонов

var countOfFields = 1;
var curFieldNameId = 1;
var maxFieldLimit = 5;

function deleteField(a) {
    var contDiv = a.parentNode;
    contDiv.parentNode.removeChild(contDiv);
    countOfFields--;
    return false;
}
function addField() {
    if (countOfFields >= maxFieldLimit) {
        alert("The number of fields reached its maximum");
        return false;
    }
    countOfFields++;
    curFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"phone\"" + curFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("parentId").appendChild(div);

    return false;
}

// Добавление полей почты

var EcountOfFields = 1;
var EcurFieldNameId = 1;
var EmaxFieldLimit = 5;

function EaddField() {
    if (EcountOfFields >= EmaxFieldLimit) {
        alert("The E-male of fields reached its maximum");
        return false;
    }
    EcountOfFields++;
    EcurFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"email\"" + EcurFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    document.getElementById("EparentId").appendChild(div);

    return false;
}

// Выведение списков контактов

function seeCntakt() {
    for (var i = 0; i < localStorage.length; i++) {
        var key1 = localStorage.key(i);
        var li = document.createElement("li");
        li.innerHTML = "<a onclick=\"see('"+key1+"')\" href=\"#\" >" + key1 + "</a>";
        document.getElementById("spisok").appendChild(li);

    }
}

// Просмотр кнтакта (недоработано)

var bedit = document.getElementById("edit");
var bdel = document.getElementById("del");
var span2 = document.getElementsByClassName("close2")[0];
var modal2 = document.getElementById("form2");

function see(myKey) {
    modal2.style.display = "block";
    var returnObj = JSON.parse(localStorage.getItem(myKey));
    var span = document.createElement("span");
    span.innerHTML = returnObj.name + "<br><br>";
    document.getElementById("s-cont").appendChild(span);

}

// Закрытие окна просмотра контакта

span2.onclick = function () {
    modal2.style.display = "none"
};