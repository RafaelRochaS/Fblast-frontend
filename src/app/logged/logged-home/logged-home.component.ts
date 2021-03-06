import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/userData.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
    selector: 'app-logged-home',
    templateUrl: './logged-home.component.html',
    styleUrls: ['./logged-home.component.css']
})
export class LoggedHomeComponent implements OnInit {

    currentUser$: Observable<IUser>;
    displayedColumns: string[] = ['name', 'value', 'date'];


    constructor(private userDataService: UserDataService) {
        this.currentUser$ = this.userDataService.currentUser$;
    }

    ngOnInit(): void {
    }

    /*     geTotalExpense(): number {
            return this.expensesTable.map(i => i.value).reduce((acc, value) => acc + value, 0);
        } */
}
