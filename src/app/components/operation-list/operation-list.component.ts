import { Component, Input, OnInit } from '@angular/core';

import { OperationService } from '../../service/operation.service'
import { Operation } from "../../models/OperationModel";

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})


export class OperationListComponent implements OnInit {
  
  @Input('headerTitle') headerTitle : String;
  @Input('operationsQuantity') operationQuantity : String;

  operations : Operation[] = new Array();
 
  constructor(private operationService : OperationService) { }

  ngOnInit(): void {
    switch(this.operationQuantity) {
      case "partials":
        this.getLastTenOperations();
        break;
      case "all":
        this.getAllOperations();
        break;
    }
  }

  public getAllOperations() {
    this.operationService.listOperations().subscribe(res => { 
      res.forEach(op => {
        this.operations.push(new Operation(op.id, op.concept, op.money_amount, op.type, op.date))
      })
    })
  }

  public getLastTenOperations() {
    this.operationService.listLatestOperations().subscribe(res => { 
      res.forEach(op => {
        this.operations.push(new Operation(op.id, op.concept, op.money_amount, op.type, op.date))
      })
    })    
  }

  public cancelOperation(id : any) {
    this.operationService.deleteOperation(id).subscribe(res => {
      if (res.success)
        alert("The operations was canceled successfully")
    })
  }

}
