import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './iTable.component.html',
  styleUrls: ['./iTable.component.scss']
})
export class TableComponent implements AfterViewInit {
  public itemsPerPage: Array<number> = [0];
  public rows: Array<any> = [{ loading: true }];
  public displayedColumns: Array<string> = ['loading'];
  public dataSource = new MatTableDataSource<any>(this.rows);
  public resultsLength = 0;
  public isLoadingResults = true;

  @Input() endPoint: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private api: ApiService
  ) { }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.getNewPage();
    });
    setTimeout(() => {
      this.getFirstPageAndParams();
    }, 3000);
  }

  getFirstPageAndParams() {
    this.isLoadingResults = false;
    this.api.get(this.endPoint, { init: true }).then(res => {
      this.resultsLength = res.count;
      this.dataSource.data = res.rows;
      this.displayedColumns = res.columns;
      this.itemsPerPage = res.itemsPerPage;
      this.paginator.pageSize = this.itemsPerPage[0];
      this.isLoadingResults = false;
    });
  }

  getNewPage() {
    this.isLoadingResults = true;
    this.api.get(this.endPoint, { page: this.paginator.pageIndex + 1, itemsPerPage: this.paginator.pageSize }).then(res => {
      this.dataSource.data = res.rows;
      this.isLoadingResults = false;
    });
  }
}
