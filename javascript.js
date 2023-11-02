const repliques = document.querySelectorAll("#repliques p")
let select = null

repliques.forEach((replique)=>{
    replique.classList.add("notSelect");
    replique.addEventListener("click", function(){
        changeSelect(this)
    })
})

function changeSelect(rep){
   if (select === rep){
    rep.classList.toggle("select")
    rep.classList.toggle("notSelect")
    select=null;
   }else if(select === null){
    select = rep
    rep.classList.toggle("select")
    rep.classList.toggle("notSelect")
   }else{
    select.classList.remove("select")
    select.classList.add("notSelect")
    select=rep
    rep.classList.toggle("select")
    rep.classList.toggle("notSelect")
   }
}