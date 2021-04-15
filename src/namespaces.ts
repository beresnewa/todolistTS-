/// <reference path="form-namespase.ts" />
namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState= 'active'

        constructor(public email: string) {
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const myForm = new MyForm('dchiu@ie.ru')
    console.log(myForm)
}
console.log(Form.myForm) 