function verif()
{

var ml=document.f1.eml.value;
var ps=document.f1.pass.value;
var ch1=ml.slice(ml.indexOf("@")+1,ml.indexOf("."));
var ch=ml.slice(ml.indexOf(".")+1,ml.length);

if(ml=="" || ps == "")
{
alert(" veuillez renseigner les champs!!!");
}

if(ml.indexOf('@') == -1 || ml.indexOf('.') == -1)
{
alert("veuillez respecter le format requis !!");
}
 
if(ch.length>3)
{
alert("le partie 3 de email ne  depasse pas  3 caractere");
}
 
if(ps.length>10)
{
alert(" le mot de passe Minimum 10 caractères ");
} 


}


function message()
{
	alert("bienvenue dans cette page login");
}