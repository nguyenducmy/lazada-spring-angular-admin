export class AuthenResponse {
  private _code: string;
  private _token: any;
  private _status: string | undefined

  constructor(private res: any) {
    this._code = res.code;
    this._token = res.token;
    this._status = res.status;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get token(): any {
    return this._token;
  }

  set token(value: any) {
    this._token = value;
  }

  get status(): string | undefined {
    return this._status;
  }

  set status(value: string | undefined) {
    this._status = value;
  }
}
