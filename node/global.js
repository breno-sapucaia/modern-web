// console.log(global)
global.MinhaAPP = Object.freeze({
    ola: 'Estou em todos os lugares!',
    saudacao() {
        console.log(this.ola)
    }
})