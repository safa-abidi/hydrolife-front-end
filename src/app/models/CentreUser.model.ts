export class CentreUser {
  token: any;
  constructor(
    public id?: number,
    public name?: string,
    public adress?: string,
    public email?: string,
    public password?: string,
    public phone?: number,
    public descip?: string
  ) {}
}
