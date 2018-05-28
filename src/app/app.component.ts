import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MVP Dashboard';

  columnDefs = [
    {headerName: 'Invoice Group Number', field: 'invoiceGroupNumber' },
    {headerName: 'Account Number', field: 'accountNumber' },
    {headerName: 'Account Name', field: 'accountName'},
    {headerName: 'CG Billing Relationship', field: 'billingRelationship'},
    {headerName: 'Account Type', field: 'accountType'},
    {headerName: 'Billable Value', field: 'billableValue'},
    {headerName: 'Invoice Fee', field: 'invoiceFee'},
    {headerName: 'Invoice Status', field: 'invoiceStatus'}
  ];

  rowData = [
    { invoiceGroupNumber: '11111', accountNumber: '123-123', accountName:'Apple Inc1', billingRelationship: 543223, accountType:'CGA',  billableValue:'$ 1242323223', invoiceFee: '$32322', invoiceStatus: 'Sent on Jan 1 2018' },
    { invoiceGroupNumber: '11111', accountNumber: '123-231', accountName:'Apple Inc2', billingRelationship: 543223, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Pending Release' },
    { invoiceGroupNumber: '222222', accountNumber: '321-231', accountName:'Google Inc1', billingRelationship: 4444, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Sent on Feb 1 2018' },
    { invoiceGroupNumber: '222222', accountNumber: '321222-231', accountName:'Google Inc2', billingRelationship: 4444, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Pending Release' },

  ];

}
