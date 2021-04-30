
export class ReservationUpdate {

    constructor(
        public id_res?: number,
        public dateRes?: Date,
        public nbre_personnes_res?: number,
        public idCentre?:number,
        public idService?: number,
        public nomClient?:string,
        public nomService?:string,
        public prenomClient?:string
         
                
    ) {}
  }
  