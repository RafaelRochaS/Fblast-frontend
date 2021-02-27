export interface IUser {
    name: string;
    income: number;
    expenses: IExpenses[];
}

export interface IExpenses {
    item: string;
    value: number;
    date: Date;
}

