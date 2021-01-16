import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
import { OperationService } from '../../service/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})

export class OperationComponent implements OnInit {

  private concept : String;
  private moneyAmount : number;
  private operationType : String;


  public options : any = [
    {"value" : "ingreso", "msg" : "Deposit money" },
    {"value" : "egreso", "msg" : "Spend money"}
  ]

  constructor(private operationService : OperationService) { }

  ngOnInit(): void {
  }


  operationForm = new FormGroup({
    concept : new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    amount : new FormControl("", [
      Validators.required
    ]),
    type : new FormControl("Choose an option", [
      Validators.required  
    ])
  })

  public performOperation() {
    this.concept = this.operationForm.value.concept;
    this.moneyAmount = Number(this.operationForm.value.amount);
    this.operationType = this.operationForm.value.type;

    let body = {
      "concept" : this.concept,
      "money" : this.moneyAmount,
      "type" : this.operationType
    }

    console.log(body)

    this.operationService.saveOperation(body).subscribe(res => {
      if (res.success)
        alert("The operation was made successfully")
    })

  }  


}
