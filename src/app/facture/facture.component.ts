import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientUserService } from '../services/ClientUser.service';
import { CentreUserService } from '../services/CentreUser.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  info:any;
  infoSer:any;
  infoCentre:any;
  dateRes = localStorage.getItem("dateRes");
  idSer = localStorage.getItem("idSer");  
  nbre_personnes_res  = localStorage.getItem("nbre_personnes_res ");

  constructor(
    public userService: ClientUserService,
    public centreService: CentreUserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getSer();

    let id = this.route.snapshot.params.id;

    this.userService.getOneClient(id).subscribe(
      (result)=>{ 
        this.info = result;

      }
    );  
  }

  getSer(){
    
    this.centreService.getOneService(this.idSer).subscribe(
      (result)=> {
        this.infoSer = result;
       
    this.centreService.getOneUser(this.infoSer?.idCentre).subscribe(
      (result)=> {
        this.infoCentre = result;
        
        }
      )     
    }
  );
}

}
