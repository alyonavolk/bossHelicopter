export abstract class Bootstrap {
    abstract addCost: number;
    constructor(dataHome: object, dataWorker: object, dataAddCost: number) {}

    abstract calculationCost(): void;
}