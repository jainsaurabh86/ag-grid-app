import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  
  title = 'MVP Dashboard';

  columnDefs = [
    {headerName: 'Model', field: 'model', rowGroupIndex: 0 },
    {headerName: 'Price', field: 'price'}
];

autoGroupColumnDef = {
    headerName: 'Make',
    field: 'make',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
};

rowData: any;

constructor(private http: HttpClient) {

}

  ngOnInit(){
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
    // https://api.myjson.com/bins/15psn9 --> Small data set
    // this.rowData = this.http.get('http://localhost:8080/billing')
  }
 
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
  
  // columnDefs = [
    // {headerName: 'Invoice Group Number', field: 'invoiceGroupNumber', checkboxSelection: true },
    // {headerName: 'Account Number', field: 'accountNumber' },
    // {headerName: 'Account Name', field: 'accountName'},
    // {headerName: 'CG Billing Relationship', field: 'billingRelationship'},
    // {headerName: 'Account Type', field: 'accountType'},
    // {headerName: 'Billable Value', field: 'billableValue'},
    // {headerName: 'Invoice Fee', field: 'invoiceFee'},
    // {headerName: 'Invoice Status', field: 'invoiceStatus'}
  // ];

/*   rowData = [
    { invoiceGroupNumber: '11111', accountNumber: '123-123', accountName:'Apple Inc1', billingRelationship: 543223, accountType:'CGA',  billableValue:'$ 1242323223', invoiceFee: '$32322', invoiceStatus: 'Sent on Jan 1 2018' },
    { invoiceGroupNumber: '11111', accountNumber: '123-231', accountName:'Apple Inc2', billingRelationship: 543223, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Pending Release' },
    { invoiceGroupNumber: '222222', accountNumber: '321-231', accountName:'Google Inc1', billingRelationship: 4444, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Sent on Feb 1 2018' },
    { invoiceGroupNumber: '222222', accountNumber: '321222-231', accountName:'Google Inc2', billingRelationship: 4444, accountType:'UMA',  billableValue:'$ 87323222', invoiceFee: '$90222', invoiceStatus: 'Pending Release' },

  ]; */
}
