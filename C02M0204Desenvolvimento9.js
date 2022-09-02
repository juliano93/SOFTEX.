// Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades
// que incluem conta, saldo, tipo de conta e agência e os seus métodos devem
// ser: buscar saldo, depósito, saque e número da conta.

// Observações:
// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.

function Banco (conta, saldo, tipo_conta, agencia) {
    this.conta = conta ; 
    this.saldo = saldo ;
    this.tipo_conta = tipo_conta;
    this.agencia = agencia ;

    buscar_saldo = function saldo_valor() {
        console.log("O valor do seu saldo é :",this.saldo)
    }
    fazer_deposito = function depositar(deposito) {
        this.saldo = this.saldo + deposito;
        console.log("Você realizou um depósito no valor de " + String(deposito) + "reais. Agora o seu saldo é " + String(this.saldo))
    }
    fazer_saque = function sacar (saque) {
        this.saldo = this.saldo - saque;
        console.log("Você realizou um saque no valor de " + String(saque) + "reais. Agora o seu saldo é " + String(this.saldo))
    }
    numero_conta = function mostrar_numero_conta(){
        console.log("O número da sua conta é: ", this.conta)
    }
}

var minha_conta = new Banco(123456, 100000, "conta corrente", 123)

console.log(minha_conta.saldo)