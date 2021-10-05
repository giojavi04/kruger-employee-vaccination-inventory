import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {
  usersList: User[] = [];
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'vaccine', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  async ngAfterViewInit() {
    await this.chargeUsers();
  }

  async chargeUsers() {
    await this.usersService.getAll().subscribe(data => {
      this.usersList = data;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {id, name, confirm: false}
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result.confirm) {
        await this.usersService.delete(+result.id).subscribe();
        await this.chargeUsers();
      }
    });
  }
}
