export class ClientUserUpdate {

    constructor(
      public id?: string,
      public nom?: string,
      public adresse?: string,
      public email?: string,
      public password?: string,
      public prenom?: string,
      public tel?: string,
      public dateNaissance?: string
    ) {}
  }
  