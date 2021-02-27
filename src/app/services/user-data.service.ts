import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/userData.model';

const defaultUser: IUser = {
    name: 'Joe Da Quebrada',
    income: 5000,
    expenses: [
        {
            item: 'Electric',
            value: 70,
            date: new Date(2021, 5, 1),
        },
        {
            item: 'Gas',
            value: 60,
            date: new Date(2021, 5, 8),
        },
        {
            item: 'Food',
            value: 650,
            date: new Date(2021, 4, 28),
        },
        {
            item: 'Beer',
            value: 900,
            date: new Date(2021, 4, 23),
        }
    ]
};

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    readonly currentUser$ = new BehaviorSubject<IUser>(defaultUser);

    constructor() { }

    getUserData(): Observable<IUser> {
        return this.currentUser$;
    }
}
