function add (num1:number,num2: number = 20) : number{
    return num1 + num2
}

const sum = (num1:number,num2:number):number=>num1+num2

const peroson = {
    name:'Fahim',
    balance:500,
    morebalance(balance:number):number{
        return this.balance + balance
    }
}

const arr: number[]=[10,20,30,40]
const duplicateArray :number[] = arr.map((element:number):number=>element*element) 