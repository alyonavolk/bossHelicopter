import residents from './resources/data.json' assert { type: "json"};
import { IMaintenanceHouse } from './interface.js';
import { CountResidents } from './residents.js';
import { SalaryEmployees, ChangeEmployees } from './workers.js';



class MaintenanceHouse implements IMaintenanceHouse {
    constructor(dataHome: object, dataWorker: object, dataAddCost: number) {
        this.countResidents = new CountResidents(dataHome);
        this.salaryEmployees = new SalaryEmployees(dataWorker);
        this.addCost = dataAddCost;
    }
    private countResidents: CountResidents;
    private salaryEmployees: SalaryEmployees;
    public addCost: number;

    // расчет квартплаты
    public calculationCost(): string {
        let residentsPay: number = this.countResidents.countResidents() - Math.floor(100 + Math.random() * 101);
        let payment: number = Math.round(((this.salaryEmployees.calculationSalary() + this.addCost) / residentsPay) * 100) / 100;
        return `Всего платят вовремя квартплату ${residentsPay} человек, их квартплата составляет ${payment} руб.`;
    }
}



const count = new CountResidents(residents.home);

console.log(count.countResidents());
count.printResidents();

const salary = new SalaryEmployees(residents.worker);

console.log(salary.calculationSalary());


ChangeEmployees.changeSalary(residents.worker, 'builder', 19000);
ChangeEmployees.changeWorker(residents.worker, 'builder', 1);
console.log(residents.worker.builder);

const cost = new MaintenanceHouse(residents.home, residents.worker, residents.addCost);
console.log(cost.calculationCost());

