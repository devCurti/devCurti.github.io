var BE = document.getElementById("BE")
const saves = []
i = 0
save[i] = document.querySelector("saves")
count = 0
b = 0

function control(){
        function getZero(i){
        if (i < 10) {i = "0" + i}
        return i;
    }
    count += 1
    const d = new Date();
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    hour = getZero(d.getHours())
    minute = getZero(d.getMinutes())
    second = getZero(d.getSeconds())
    day = days[d.getDay()]
    time = day + " " + "-" + " " + hour + ":" + minute + ":" + second
    controle
    document.getElementById('controle').textContent += time + " - " + count + "\n\n" + document.getElementById('output').textContent + "\n\n" + "=====================" + "\n\n"
}

function clean(){
    document.getElementById("title").value = ""
    document.getElementById("Nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("tel").value = ""
    document.getElementById("BE").value = ""
    document.getElementById("hostname").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("cnpj").value = ""
    document.getElementById("apolice").value = ""
    document.getElementById("msg").value = ""
}


function save(){            
    i+= 1
    save[i] = document.getElementById("msg").value;
    var select = document.getElementById("templates");
    const option = document.createElement("option")
    option.value = save[i]
    option.text = prompt("Digite o nome do template: ")
    select.add(option);
    console.log("Foi")
    localStorage.templates = document.getElementById("templates").innerHTML;
}
function remove(){
    var select = document.getElementById("templates").selectedIndex;
    var x = document.getElementById("templates").options;
    if (confirm("Você está prestes a remover o seguinte template: " + x[select].text + "\n" + "deseja continuar?")){
        var select = document.getElementById("templates");
        select.remove(select.selectedIndex)
}
}
function load(){
document.getElementById("msg").value = save[i]; 
document.getElementById("templates").innerHTML = localStorage.templates;
}

function template(){
    var select = document.getElementById("templates").selectedIndex;
    var x = document.getElementById("templates").options;
    var template = document.getElementById("templates").value;
    document.getElementById("msg").value = template;
    document.getElementById("title").value = x[select].text;
}
function Copy(){
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: \n\n\n" + copyText.value);
}

function Copycontrol(){
    var copyText = document.getElementById("controle");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: \n\n\n" + copyText.value);
}

function doPrint(x,i){
    const name = ["Login", "Nome", "Email", "Telefone", "Disponibilidade", "Hostname", "Titulo", "Apólice", "CNPJ", "Razão Social"]
    if (document.getElementById(i).value == ""){}
    else{document.getElementById('output').textContent += name[x] + ": " + document.getElementById(i).value + "\n"}

}

function func2(){
    document.getElementById("output").textContent = "";
    doPrint(0,"BE")
    doPrint(1,"Nome")
    doPrint(2,"email")
    doPrint(3,"tel")
    doPrint(4,"hora")
    doPrint(5,"hostname")
    doPrint(6,"title")
    doPrint(7,"cnpj")
    doPrint(8,"apolice")
    doPrint(9,"razao")
    var modelo = document.querySelector('input[name="modelo"]:checked')?.value;
    var trouble = document.getElementById("msg");
    if (modelo == null){}
    else{
        document.getElementById('output').textContent += "Modalidade de trabalho: " + modelo}
    if (document.getElementById("output").textContent == ""){
        document.getElementById('output').textContent += "Troubleshooting: \n\n" + trouble.value
    }
    else{
    document.getElementById('output').textContent += "\n\n"+ "Troubleshooting: \n\n" + trouble.value
    }

    control();
}

function Theme(){
    if (b == 0){
        document.getElementById('left-half').setAttribute("class", "theme");
        document.getElementById('Control').setAttribute("class", "theme");
        document.getElementById('troubleshooting').setAttribute("class", "theme");
        (b = 1)
    }
    else{
        document.getElementById('left-half').setAttribute("class", "themeblack");
        document.getElementById('Control').setAttribute("class", "themeblack");
        document.getElementById('troubleshooting').setAttribute("class", "themeblack");
        b = 0
        alert(b)
    }
    
}

function openNav(i) {
    document.getElementById(i).style.width = "100%";
  }
  
  function closeNav(i) {
    document.getElementById(i).style.width = "0%";
  }
var imgg = 0
  function openimg(y){
      if (imgg == 0){
       imgg = 1;
      document.getElementById(y).style.height = "100%";
    }
      else{
          imgg = 0;
          document.getElementById(y).style.height = "20%";
            
      }
  }
  
function verify(){
    var teste = document.getElementById("BE");
    teste.value = teste.value.toUpperCase();
    verif = document.getElementById("BE").value;
    if (verif[0] + verif[1] == "BE" ){
        if(verif[2] == "5"){document.getElementById("verifyy").textContent = "Terceiro"}
        else if(verif[2] + verif[3] == "07"){document.getElementById("verifyy").textContent = "Mundial"}
        else{document.getElementById("verifyy").textContent = "Colaborador"}        
    }
    else if (verif[0] + verif[1] == "BA" ){
        document.getElementById("verifyy").textContent = "Corretor"
    }

    else if (verif[0] + verif[1] == "BP" ){
        document.getElementById("verifyy").textContent = "Prestador"
    }

    else{
        document.getElementById("verifyy").textContent = ""
    }

    

    
}
