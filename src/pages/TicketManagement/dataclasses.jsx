export const SortCriteria = {
    DateAsc: 0,
    DateDesc: 1,
    LastUpdateAsc: 2,
    LastUpdateDesc: 3
}

export const ProblemType = {
    DefectiveProduct: 0,
    ProductNotDelivered: 1,
    ReceivedWrongProduct: 2
}

export const Status = {
    Pending: 0,
    Forwarded: 1,
    Completed: 2
}

export class Ticket {
    constructor(problemType, status, initDate, updateDate, client) {
        this.problemType = problemType
        this.status = status
        this.initDate = initDate
        this.updateDate = updateDate
        this.client = client
    }
}

export class Filter {
    constructor(allowPending, allowForwarded, allowCompleted) {
        this.statusAllowed = {
            [Status.Pending]: allowPending,
            [Status.Forwarded]: allowForwarded,
            [Status.Completed]: allowCompleted
        }
    }
}

export const DUMMY_TICKETS = [
    new Ticket(ProblemType.DefectiveProduct, Status.Pending, new Date(2023, 7, 1, 22, 51, 34), new Date(2023, 7, 11, 22, 51, 34), "Derbie Monolith"),
    new Ticket(ProblemType.ProductNotDelivered, Status.Pending, new Date(2023, 7, 2, 22, 51, 34), new Date(2023, 7, 10, 22, 51, 34), "Claython Undefined"),
    new Ticket(ProblemType.DefectiveProduct, Status.Completed, new Date(2023, 7, 9, 3, 51, 34), new Date(2023, 7, 9, 22, 51, 34), "Giba Overflow"),
    new Ticket(ProblemType.ReceivedWrongProduct, Status.Completed, new Date(2023, 7, 5, 22, 51, 34), new Date(2023, 7, 8, 22, 51, 34), "Clovis Null Pointer"),
    new Ticket(ProblemType.ReceivedWrongProduct, Status.Forwarded, new Date(2023, 7, 4, 21, 51, 34), new Date(2023, 7, 7, 22, 51, 34), "Chokito Aborted"),
    new Ticket(ProblemType.ProductNotDelivered, Status.Forwarded, new Date(2023, 7, 4, 22, 51, 34), new Date(2023, 7, 6, 22, 51, 34), "Duranduran Linker Error")
]
