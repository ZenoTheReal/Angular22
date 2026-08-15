import { AfterViewInit, Component, effect, Signal, signal, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormatterPipe } from '../../../pipes/formatter-pipe';
import { Highlighter } from '../../../directives/highlighter';

type Dashboard_list = {
  eid: number;
  name: string;
  temperature: number | '-';
  humidity: number;
};

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatTableModule, MatPaginatorModule,
    MatSortModule, FormatterPipe, Highlighter],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements AfterViewInit {

  sort: Signal<MatSort> = viewChild.required(MatSort);
  paginator: Signal<MatPaginator> = viewChild.required(MatPaginator);

  displayedColumns: string[] = ['eid', 'name', 'temperature', 'humidity'];

  protected readonly list = signal<Dashboard_list[]>([
    {
      eid: 0,
      name: 'Living Room',
      temperature: 24.5678,
      humidity: 45
    },
    {
      eid: 1,
      name: 'Indoor Greenhouse',
      temperature: 28.3333,
      humidity: 85 // Will trigger the red border/background directive
    },
    {
      eid: 2,
      name: 'Wine Cellar',
      temperature: 12.9876,
      humidity: 60
    },
    {
      eid: 3,
      name: 'Server Room',
      temperature: 32.1234,
      humidity: 30
    }
  ]);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator();
    this.dataSource.sort = this.sort();
  }

  dataSource = new MatTableDataSource<Dashboard_list>(this.list());

  constructor() {
    effect(() => {
      this.dataSource.data = this.list();
    });
  }
}
