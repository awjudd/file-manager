export default class File {
  public path!: string;

  public createdAt!: Date;

  public modifiedAt!: Date;

  constructor(data: Partial<File>) {
    Object.assign(this, data);
  }
}
