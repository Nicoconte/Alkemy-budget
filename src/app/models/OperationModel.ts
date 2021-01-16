
export class Operation {
    id : number;
    concept : String;
    money : number;
    type : String;
    date : String;

    constructor(id : number, concept : String, money : number, type : String, date : String) {
      this.id = id;
      this.concept = concept;
      this.money = money;
      this.type = type;
      this.date = date;
    }
  }