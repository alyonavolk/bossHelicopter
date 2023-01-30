import { ISalaryEmployees } from './interface.js';

export class SalaryEmployees implements ISalaryEmployees {
    constructor(data: object) {
        this._data = data;

    }
    private _data: object;
    private sum: number = 0;

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
}

export abstract class ChangeEmployees {
    // изменение зарплаты
    public static changeSalary(data: object, worker: string, salary: number): void {
        for (let [entrances, numberWorkers] of Object.entries(data)) {
            if (worker == entrances) {
                numberWorkers.salary = salary;
            }
        }
    }

    // изменение количества персонала
    public static  changeWorker(data: object, worker: string, count: number): void {
        for (let [entrances, numberWorkers] of Object.entries(data)) {
            if (worker == entrances) {
                numberWorkers.count = count;
            }
        }
    }
}