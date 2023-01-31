import residents from './resources/data.json' assert { type: "json"};
import { CountResidents } from './residents.js';
import { SalaryEmployees, ChangeEmployees } from './workers.js';
import { Bootstrap } from './abstract.js';

class MaintenanceHouse extends Bootstrap {
    private countResidents: CountResidents;
    private salaryEmployees: SalaryEmployees;
    public addCost: number;

    constructor(dataHome: object, dataWorker: object, dataAddCost: number) {
        super(dataHome, dataWorker, dataAddCost);
        this.countResidents = new CountResidents(dataHome);
        this.salaryEmployees = new SalaryEmployees(dataWorker);
        this.addCost = dataAddCost;
    }

    // расчет квартплаты
    public calculationCost(): void {
        let residentsPay: number = this.countResidents.countResidents() - Math.floor(100 + Math.random() * 101);
        let payment: number = Math.round(((this.salaryEmployees.calculationSalary() + this.addCost) / residentsPay) * 100) / 100;
        console.log(`Всего платят вовремя квартплату ${residentsPay} человек, их квартплата составляет ${payment} руб.`);
    }
}



const cost = new MaintenanceHouse(residents.home, residents.worker, residents.addCost);
cost.calculationCost();

// изменение данных сотрудников
ChangeEmployees.changeSalary(residents.worker, 'builder', 15000)
ChangeEmployees.changeWorker(residents.worker, 'builder', 3);