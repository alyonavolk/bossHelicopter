import { ICountResidents } from './interface.js';

export class CountResidents implements ICountResidents{
    constructor(data: object) {
        this.data = data;
    }
    private data: object;
    private sum: number = 0;

    // подсчет жильцов в доме
    public countResidents(): number {
        for (let [entrances, count] of Object.entries(this.data)) {
            this.sum += 5 * count.apartmentsFive;
            this.sum += 2 * count.apartmentsTwo;
            this.sum += 3 * count.apartmentsThree;
        }
        return this.sum;
    }

    public printResidents(): void {
        console.log(`Всего в доме проживают ${this.sum} человек.`);
    }
}