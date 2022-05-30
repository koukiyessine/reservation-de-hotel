function verif()
{
nm=document.f1.nom.value;
ad=document.f1.adr.value;
nt=document.f1.tel.value;
dn=document.f1.dn.value;
fn=document.f1.ft.value;
ps=document.f1.py.value;
da=document.f1.da.value;
dd=document.f1.dd.value;
nn=document.f1.nbnu.value;
nch=document.f1.nbch.value;
np=document.f1.nbp.value;
pr=document.f1.pre.value;



if( nm=="" || ad=="" || nt=="" || dn=="" || fn=="" || ps=="" || da=="" || dd=="" || nn=="" || nch=="" || np=="" || pr=="")
{
alert(" veuillez renseigner les champs!!!");
}

if(isNaN(nm)==false || isNaN(ps)==false || isNaN(fn)==false || isNaN(pr)==false )
{
alert("ecrire un chaine dans les champs selectionner");
}

if(isNaN(nt)==true || isNaN(nn)==true || isNaN(nch)==true || isNaN(np)==true)
{
alert("ecrire un entier dans les champs selectionner");
}

if(nt.length>8)
{
alert("le numero de telephone ne depasse pas  8 entiers ");
}



 



if(nn>20)
{
alert("le nombre  de nuits dans l'hotel ne depasse pas  20");
}

/*if(nch>4)
{
alert("le nombre des personnes dans le chambre ne dépasse pas 4");
}*/

if(np>4)
{
alert("le nombre des personnes dans le chambre ne dépasse pas 4");
}
}

