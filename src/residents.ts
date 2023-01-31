import { ICountResidents } from './interface.js';

export class CountResidents implements ICountResidents{
    private data: object;
    private sum: number = 0;
    
    constructor(data: object) {
        this.data = data;
    }

    // подсчет жильцов в доме
    public countResidents(): number {
        for (let [entrances, count] of Object.entries(this.data)) {
            this.sum += 5 * count.apartmentsFive;
            this.sum += 2 * count.apartmentsTwo;
            this.sum += 3 * count.apartmentsThree;
        }
        return this.sum;
    }

    public printResidents(): string {
        return `Всего в доме проживают ${this.sum} человек.`;
    }
}