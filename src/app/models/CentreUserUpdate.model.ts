export class CentreUserUpdate {

    constructor(
      public id?: string,
      public nom?: string,
      public adresse?: string,
      public email?: string,
      public password?: string,
      public tel?: number,
      public description?: string
    ) {}
  }
  