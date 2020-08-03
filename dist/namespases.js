"use strict";
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'include';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    IForm.myForm = new MyForm('v@mail.ru');
})(IForm || (IForm = {}));
console.log(IForm.myForm);
//# sourceMappingURL=namespases.js.map