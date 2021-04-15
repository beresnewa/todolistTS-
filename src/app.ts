// let message: string = 'hello'
class Person {
    constructor(private name: string) {
    }
}

const max = new Person ('Max')

const btn: Element = document.querySelector('#btn')!
btn.addEventListener('click', () => {
    console.log('Btn cliked')
})