import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent {
  constructor(
    private router: Router  ){}
  sales = [
    {
      invoiceNumber: 'INV-001',
      clientName: 'John Doe',
      amount: 1200,
      status: 'Paid',
      taxExempt: true
    },
    {
      invoiceNumber: 'INV-002',
      clientName: 'Jane Smith',
      amount: 750,
      status: 'Unpaid',
      taxExempt: false
    },
    {
      invoiceNumber: 'INV-001',
      clientName: 'John Doe',
      amount: 1200,
      status: 'Paid',
      taxExempt: true
    },
    {
      invoiceNumber: 'INV-002',
      clientName: 'Jane Smith',
      amount: 750,
      status: 'Unpaid',
      taxExempt: false
    },
    {
      invoiceNumber: 'INV-001',
      clientName: 'John Doe',
      amount: 1200,
      status: 'Paid',
      taxExempt: true
    },
    {
      invoiceNumber: 'INV-002',
      clientName: 'Jane Smith',
      amount: 750,
      status: 'Unpaid',
      taxExempt: false
    },
    // Add more mock data if needed
  ];

  searchTerm: string = '';
  filteredSales = [...this.sales];

  currentPage: number = 1;
  pageSize: number = 5;

  get totalPages(): number {
    return Math.ceil(this.filteredSales.length / this.pageSize);
  }

  get paginatedSales() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredSales.slice(start, start + this.pageSize);
  }

  filterData() {
    const term = this.searchTerm.toLowerCase();
    this.filteredSales = this.sales.filter(sale =>
      sale.clientName.toLowerCase().includes(term) ||
      sale.invoiceNumber.toLowerCase().includes(term) ||
      sale.status.toLowerCase().includes(term)
    );
    this.currentPage = 1; // Reset to first page
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  addNewSale() {
this.router.navigateByUrl('/sales-add')
  }

  editSale(sale: any) {
    alert('Edit: ' + sale.invoiceNumber);
  }

  deleteSale(sale: any) {
    if (confirm(`Are you sure to delete invoice ${sale.invoiceNumber}?`)) {
      this.sales = this.sales.filter(s => s !== sale);
      this.filterData(); // Re-filter after delete
    }
  }
}
