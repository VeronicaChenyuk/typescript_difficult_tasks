/// <reference path="form-namespace.ts"/>

namespace IForm {
  class MyForm {
    private type: FormType = 'include'
    private state: FormState = 'active'
    constructor(public email: string) {
    }
    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  export const myForm = new MyForm('v@mail.ru')
  // console.log(myForm);
}
console.log(IForm.myForm)

