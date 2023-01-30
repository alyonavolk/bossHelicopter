export interface ICountResidents {
    countResidents: () => number,
    printResidents: () => void
}

export interface ISalaryEmployees {
    calculationSalary: () => number
}

export interface IMaintenanceHouse {
    addCost: number,
    calculationCost: () => string
}