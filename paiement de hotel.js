function verif(){
pn=document.f1.pn.value;
cn=document.f1.cnb.value;
ex=document.f1.exp.value;
cc=document.f1.cvc.value;

if(pn=="" || cn=="" || ex=="" || cc=="")
{	
if(pn=="" || cn=="" || ex=="" || cc==""){

alert("les champs selectionner est vide !!");


}

if(isNaN(cn)==true){
alert("le numero de card ne pas un chaine!!!");
}

if(cc.length <4 || cc.length >4)
{
alert(" le mdp de card n'existe pas!!!");
}

if(isNaN(cc)==true)
{
	alert("le numero de mot de passe est entiers");
}

if(cn.length <16 || cn.length>16)
{
alert("le numero de card n'existe pas  ");
}
}
else
{
swal({
  title:"felicitation!",
  text:" votre paiement est succès ",
  icon:"success"



});
}
}

/*function research(){
window.reload();	
}*/


function message()
{
	alert("bienvenne dans cette page paiement de hotel");
}

