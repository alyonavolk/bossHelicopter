import { ISalaryEmployees } from './interface.js';

export class SalaryEmployees implements ISalaryEmployees {
    private _data: object;
    private sum: number = 0;

    constructor(data: object) {
        this._data = data;

    }

    get data() {
        return this._data;
    }

    //подсчет затрат на зарплату
    public calculationSalary(): number {
        for (let [entrances, numberWorkers] of Object.entries(this.data)) {
            this.sum += numberWorkers.count * numberWorkers.salary;
        }
        return this.sum;
    }

    public printSalary(): string {
        return `Всего затраты на зарплату сотрудников составляют ${this.sum} руб.`;
    }
}

export class ChangeEmployees extends SalaryEmployees {
    constructor(data: object) {
        super(data);
    }

    // изменение зарплаты
    public static changeSalary(data: object, worker: string, salary: number): void {
        for (let [entrances, numberWorkers] of Object.entries(data)) {
            if (worker == entrances) {
                numberWorkers.salary = salary;
            }
        }
        console.log(`Вы изменили зарплату ${worker} на ${salary} руб./мес.`);
    }

    // изменение количества персонала
    public static  changeWorker(data: object, worker: string, count: number): void {
        for (let [entrances, numberWorkers] of Object.entries(data)) {
            if (worker == entrances) {
                numberWorkers.count = count;
            }
        }
        console.log(`Вы изменили штат сотрудников ${worker} на ${count} людей.`);
    }
}