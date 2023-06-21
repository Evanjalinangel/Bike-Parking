var tab = document.getElementById("tablediv")

var table = document.createElement("table")
tab.append(table)
table.setAttribute("style",`border:1px solid black;border-collapse:collapse;width:800px;height:50px`)
a=head()

var username = document.getElementById("name")
var bikeno = document.getElementById("bike-no")
var checkin = document.getElementById("check-in")
var checkout = document.getElementById("check-out")

//validation
username.addEventListener("focusin",function(){
    
        let p1 = document.getElementById("p1")
        p1.style.display="none"
})
bikeno.addEventListener("focusin",function(){
    let p2 = document.getElementById("p3")
    p2.style.display="none"

    if(username.value ==``){
        let p1 = document.getElementById("p1")
        p1.style.display="block"

    }
})
checkin.addEventListener("focusin",function(){
    
    let p3 = document.getElementById("p4")
        p3.style.display="none"

    if(username.value ==``){
        let p1 = document.getElementById("p1")
        p1.style.display="block"

    }
    if(bikeno.value==``)
    {
        let p2 = document.getElementById("p3")
        p2.style.display="block"
        
    }
})


checkout.addEventListener("focusin",function(){
    let para4 = document.getElementById("p5")
        para4.style.display="none"

    if(username.value ==``){
        let p1 = document.getElementById("p1")
        p1.style.display="block"

    }
    if(bikeno.value==``)
    {
        let p2 = document.getElementById("p3")
        p2.style.display="block"
        
    }
    if(checkin.value==``){
        let p3 = document.getElementById("p4")
        p3.style.display="block"
    }
})

//NAME VERIFICATION
username.addEventListener("input",function(){
var letter=/^[A-Za-z]+$/
var namef=document.getElementById("namef");
namef.value="true"
   if(!(username.value.match (letter)))
   {
    var p11=document.getElementById("p2")
    p11.style.display="block"
    namef.value="false"
   }
   else{
    var p22=document.getElementById("p2")
    p22.style.display="none"
    namef.value="true"
   }
})


var sno = 1
var submit = document.getElementById("submit")
submit.addEventListener("click",function(){

var username = document.getElementById("name").value
var bikeno = document.getElementById("bike-no").value
var checkin = document.getElementById("check-in").value
var checkout = document.getElementById("check-out").value

var namef=document.getElementById("namef")
 var c=namef.value

    b=empty()
    if(b==true && c=="true"){
        var body = document.createElement("tbody")
        table.append(body)
        var row2 = document.createElement("tr")
        body.append(row2)
       
        var td1 = document.createElement("td")
        row2.append(td1)
        td1.style.border="1px solid black"
        td1.textContent = sno++

        var td2 = document.createElement("td")
        row2.append(td2)
        td2.style.border="1px solid black"
        td2.textContent = username

        var td3 = document.createElement("td")
        row2.append(td3)
        td3.style.border="1px solid black"
        td3.textContent = bikeno

        var td4 = document.createElement("td")
        row2.append(td4)
        td4.style.border="1px solid black"
        td4.textContent = checkin

        var td5 = document.createElement("td")
        row2.append(td5)
        td5.style.border="1px solid black"
        td5.textContent = checkout
    clear()
}
})
//clear
function clear(){
 username.value=``
 bikeno.value=``
 checkin.value=``
 checkout.value=``
}

//deatails checking
function empty()
{
    var username = document.getElementById("name").value
    var bikeno = document.getElementById("bike-no").value
    var checkin = document.getElementById("check-in").value
    var checkout = document.getElementById("check-out").value
    var flag=true

    if(username===``){
        var para1 = document.getElementById("p1")
        para1.style.display="block"
        flag=false
    }
    if(bikeno==``){
        var para2 = document.getElementById("p3")
        para2.style.display="block"
        flag=false
    }
    if(checkin==``){
        var para3 = document.getElementById("p4")
        para3.style.display="block"
        flag=false
    }
    if(checkout==``){
        var para4 = document.getElementById("p5")
        para4.style.display="block"
        flag=false
    }
    return flag;    
}

function head(){
      var head = document.createElement("thead")
      table.append(head)
      var row1 = document.createElement("tr")
      head.append(row1)
      
      var th1 = document.createElement("th")
      row1.append(th1)
      th1.style.border="1px solid black"
      th1.textContent="S.no"

      var th2 = document.createElement("th")
      row1.append(th2)
      th2.style.border="1px solid black"
      th2.textContent="User Name"

      var th3 = document.createElement("th")
      row1.append(th3)
      th3.style.border="1px solid black"
      th3.textContent="Bike-no"

      var th4 = document.createElement("th")
      row1.append(th4)
      th4.style.border="1px solid black"
      th4.textContent="Check-in"

      
      var th5 = document.createElement("th")
      
      row1.append(th5)
      th5.style.border="1px solid black"
      th5.textContent="Check-out"
}