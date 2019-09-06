export class Result {
  constructor ({
    data = {},
    succ = 200,
    status = 1, // 0为错误,1为正确
    msg = '',
  }) {
    this.succ = succ;
    this.status = status;
    this.data = data;
    this.msg = msg;
  }
}