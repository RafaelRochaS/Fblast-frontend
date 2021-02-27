import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/userData.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

    currentUser$: Observable<IUser>;
    displayedColumns: string[] = ['name', 'value', 'date'];

    constructor(private userDataService: UserDataService) {
        this.currentUser$ = this.userDataService.currentUser$;
    }

    ngOnInit(): void {
    }

}
