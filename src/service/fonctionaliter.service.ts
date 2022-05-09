import { Injectable } from '@angular/core';

interface Publication {
  id:number;
  pseudo:string;
  titrePublication:string;
  date:string;
  desciptions:string;
  localistaion:string;
  nbreJaime:number;
}


@Injectable({
  providedIn: 'root'
})
export class FonctionaliterService {


  listePublication :Publication[] = [
    {id:1,pseudo:"clement" , titrePublication:"publication 1" , date:"21/03/2022",desciptions:"description",localistaion:"localisation",nbreJaime:25},
    {id:2,pseudo:"Sana" , titrePublication:"publication 2" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:27},
    {id:2,pseudo:"Fall" , titrePublication:"publication 3" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:24},
    {id:2,pseudo:"Tyo" , titrePublication:"publication 4" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:20},
    {id:2,pseudo:"tio" , titrePublication:"publication 5" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:29},
    {id:2,pseudo:"tyop" , titrePublication:"publication 6" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:275},
    {id:2,pseudo:"giot" , titrePublication:"publication 7" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:7},
    {id:2,pseudo:"kano" , titrePublication:"publication 8" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:2},
    {id:2,pseudo:"cheick" , titrePublication:"publication 9" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:27},
    {id:2,pseudo:"Sane" , titrePublication:"publication 10" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:17},
    {id:2,pseudo:"Mario" , titrePublication:"publication 11" , date:"21/03/2022",desciptions:"description",localistaion:"localisation2",nbreJaime:3},
  ] ;

  constructor() { }

  getList(){
    return this.listePublication;
  }

  getCommentaire(){

  }
}
