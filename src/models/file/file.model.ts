export default class File {
  public name!: string;

  public createdAt!: Date;

  public modifiedAt!: Date;

  constructor(data: Partial<File>) {
    Object.assign(this, data);
  }
}
