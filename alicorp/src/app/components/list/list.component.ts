import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/services/data.service';
import { Users } from 'src/app/models/users/users.interface';

export interface tableElements {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: tableElements[] = [];
  page_size: number = 10;
  page_number = 1;
  showModal = false;

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'actions',
  ];
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  delete(id: any) {
    this.dataService.deleteUser(id).subscribe();
    this.users = this.users.filter((u) => u.id !== id);
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}
