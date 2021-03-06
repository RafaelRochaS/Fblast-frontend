import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IExpenses, IUser } from '../../models/userData.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

    currentUser$: Observable<IUser>;
    displayedColumns: string[] = ['name', 'value', 'date', 'delete'];
    itemControl = new FormControl();
    valueControl = new FormControl();
    dateControl = new FormControl();
    newItem = '';
    newValue = 0;
    newDate = new Date();

    constructor(private userDataService: UserDataService, private changeDetectorRefs: ChangeDetectorRef) {
        this.currentUser$ = this.userDataService.currentUser$;
        this.itemControl.valueChanges.subscribe(value => this.newItem = value);
        this.valueControl.valueChanges.subscribe(value => this.newValue = value);
        this.dateControl.valueChanges.subscribe(value => this.newDate = value);
    }

    addExpense(): void {

        let currentExpenses: IExpenses[] = [];
        this.currentUser$.subscribe(user => currentExpenses = user.expenses);
        console.log(new Date());

        if (currentExpenses.some(item => item.item.toLowerCase() === this.newItem.toLowerCase())) {     // dont add duplicate items
            window.alert('Item ' + this.newItem + ' already exists!');
        } else if (new Date(this.newDate) >= new Date()) {
            window.alert('Date selected is in the future!');
        } else {
            currentExpenses.push({
                item: this.newItem,
                value: this.newValue,
                date: this.newDate,
            });
            this.printExpenses(currentExpenses);
            this.userDataService.updateExpenses(currentExpenses);
            window.alert('Expense ' + this.newItem + ' sucessfully added!');
            this.clearForms();
            this.changeDetectorRefs.detectChanges();
        }
    }

    removeExpense(remove: IExpenses): void {

        let currentExpenses: IExpenses[] = [];
        this.currentUser$.subscribe(user => currentExpenses = user.expenses);

        this.userDataService.updateExpenses(
            currentExpenses.filter(tabled => tabled.item !== remove.item)
        );

        window.alert(remove.item + ' removed sucessfully!');
    }

    printExpenses(exp: IExpenses[]): void {

        exp.forEach(item => {
            console.log('Item: ' + item.item);
            console.log('Value: ' + item.value);
            console.log('Date: ' + item.date);
        });
    }

    clearForms(): void {
        this.itemControl.setValue('');
        this.valueControl.setValue('');
        this.dateControl.setValue('');
    }
}
