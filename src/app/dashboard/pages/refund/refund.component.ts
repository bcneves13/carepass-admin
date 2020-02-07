import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {

  public tableEndPoint = '/admin/table';

  constructor() { }

  ngOnInit() { }
}
