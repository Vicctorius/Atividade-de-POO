module.exports = class Elevador {
     constructor( AA, TA, CE, PE){
      this.AndarAtual = AA
      this.TotalAndares = TA
      this.CapacidadeElevador = CE
      this.PessoasNoElevador = PE
     }
     Inicializar(CapacidadeElevador, TotalAndares){
       TotalAndares = 0
       CapacidadeElevador = 0
         console.log("O elevador está no andar " + TotalAndares + " - Térreo")
         console.log("O elevador possui um total de " + CapacidadeElevador + " pessoas a bordo")
     }
     EntrarElevador(){
         if(this.PessoasNoElevador < this.CapacidadeElevador){
            this.PessoasNoElevador = this.PessoasNoElevador + 1
            console.log("Você pode entrar.")
         }
         else{
            this.PessoasNoElevador
            console.log("Você não pode entrar")
         }
        }
     SairElevador(){
       if(this.PessoasNoElevador > 0){
        this.PessoasNoElevador = this.PessoasNoElevador - 1
        console.log("Uma pessoa saiu do elevador")
       }
       else{
        console.log("Não há ninguém dentro do elevador")
       }
     }
     SubirAndar(){
       if(this.AndarAtual < this.TotalAndares){
        this.AndarAtual = this.AndarAtual + 1
         console.log("O elevador subiu um andar")
       }
       else {
        console.log("O elevador já está em seu andar máximo")
       }
     }
     DescerAndar(){
        if(this.AndarAtual > 0){
          this.AndarAtual = this.AndarAtual - 1
           console.log("O elevador desceu um andar")
        }
        else{
            console.log("O elevador ainda está no térreo")
        }
     }
     }
   