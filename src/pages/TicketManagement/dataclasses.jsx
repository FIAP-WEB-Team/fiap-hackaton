export const SortCriteria = {
    DateAsc: 0,
    DateDesc: 1,
    LastUpdateAsc: 2,
    LastUpdateDesc: 3
}

export const ProblemType = {
    DefectiveProduct: "Produto defeituoso",
    ProductNotDelivered: "Produto não entregue",
    ReceivedWrongProduct: "Recebeu produto errado"
}

export const Status = {
    Pending: "PENDENTE",
    Forwarded: "ENCAMINHADO",
    Completed: "COMPLETADO"
}

export class Ticket {
    constructor(id, problemType, status, initDate, updateDate, client) {
        this.id = id
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
    new Ticket("aoko32", ProblemType.DefectiveProduct, Status.Pending, new Date(2023, 7, 1, 22, 51, 34), new Date(2023, 7, 11, 22, 51, 34), "Derbie Monolith"),
    new Ticket("12ssdA", ProblemType.ProductNotDelivered, Status.Pending, new Date(2023, 7, 2, 22, 51, 34), new Date(2023, 7, 10, 22, 51, 34), "Claython Undefined"),
    new Ticket("76fAsq", ProblemType.DefectiveProduct, Status.Completed, new Date(2023, 7, 9, 3, 51, 34), new Date(2023, 7, 9, 22, 51, 34), "Giba Overflow"),
    new Ticket("0Okd29", ProblemType.ReceivedWrongProduct, Status.Completed, new Date(2023, 7, 5, 22, 51, 34), new Date(2023, 7, 8, 22, 51, 34), "Clovis Null Pointer"),
    new Ticket("Dop4PQ", ProblemType.ReceivedWrongProduct, Status.Forwarded, new Date(2023, 7, 4, 21, 51, 34), new Date(2023, 7, 7, 22, 51, 34), "Chokito Aborted"),
    new Ticket("Mnbp25", ProblemType.ProductNotDelivered, Status.Forwarded, new Date(2023, 7, 4, 22, 51, 34), new Date(2023, 7, 6, 22, 51, 34), "Duranduran Linker Error")
]
