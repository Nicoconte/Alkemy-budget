import { Component, OnInit } from '@angular/core';

import { BalanceService } from '../../service/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private balanceService : BalanceService) { }

  public money : number;

  ngOnInit(): void {
    this.money = 0;
    setTimeout(() => {
      this.balanceService.getBalance().subscribe(res => { 
        this.money = res.total_money
      })
    }, 300)
  }
}
