import { Component, OnInit } from '@angular/core';
import {FonctionaliterService} from "../../service/fonctionaliter.service";

@Component({
  selector: 'app-time-line-component',
  templateUrl: './time-line-component.component.html',
  styleUrls: ['./time-line-component.component.scss']
})
export class TimeLineComponentComponent implements OnInit {


  commentaire = false;
  commentaireUtilisateur=[{id:0,texte:"jolie photo" , aime:1}];
  commentaireUtilisateurValeur ="";
  view=false;

  listPublication!:any[] ;
  likePublicataion = true;
  likeCommentaire = true;
  img = true;
  img1 = true;

  id= 0;

  constructor(private servicePublication:FonctionaliterService) { }

  ngOnInit(): void {
    this.listPublication = this.servicePublication.getList();
    console.log(this.listPublication);
  }

  nouvellePublication(){

  }

  ecrireCommentaire(){
    if (!this.commentaire) {
      this.commentaire = true ;
    }else{
      this.commentaire = false ;
    }
  }
  publierCommentaire(){
    this.id = this.id+ 1;
    this.commentaireUtilisateur.push({id:this.id ,aime:1 , texte:this.commentaireUtilisateurValeur });
  }

  aimerCommentaire(id:any){
    if (this.likeCommentaire) {
      id.aime = id.aime + 1 ;
      this.likeCommentaire = false;
      this.img1 = false;
      console.log(id.id);
    }else {
      id.aime = id.aime - 1;
      this.img1 = true;
      this.likeCommentaire = true;
    }
  }

  aimerPublication(id:any) {
    if (this.likePublicataion) {
      id.nbreJaime = id.nbreJaime + 1;
      this.likePublicataion = false;
      this.img = false;
      console.log(id.id);
    } else {
      id.nbreJaime = id.nbreJaime - 1;
      this.img = true;
      this.likePublicataion = true;
    }
  }
}
