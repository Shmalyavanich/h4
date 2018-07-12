export class ToDoStatuses {
    constructor() {
        this.statusList = {};

        Object.defineProperties(this.statusList, {
            new: {
                value: 'NEW',
                writable: false,
                configurable: false,
            },
            inProgress: {
                value: 'IN_PROGRESS',
                writable: false,
                configurable: false,
            },
            done: {
                value: 'DONE',
                writable: false,
                configurable: false,
            }
        });

    }
}
