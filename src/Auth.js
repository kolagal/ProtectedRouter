class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    //Let us simulate the asynchronous operation
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAunthenticated() {
    return this.authenticated;
  }
}

export default new Auth();

//It will export an instance of the class
