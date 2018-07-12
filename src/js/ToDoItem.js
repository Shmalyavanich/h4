import {ToDoStatuses} from './ToDoStatuses';


export class ToDoItem {

    constructor({finishDate, caption, description}) {

        const currentDate = new Date();
        let creationDate  = currentDate.getDay() + '.';
            creationDate += currentDate.getMonth() + '.';
            creationDate += currentDate.getFullYear() + ' ';
            creationDate += currentDate.getHours() + ':';
            creationDate += currentDate.getMinutes() + ':';
            creationDate += currentDate.getSeconds();

        this.statuses = new ToDoStatuses();

        this.item = {};
        this.item.id = Date.now();
        this.item.creationDate = creationDate;
        this.item.status = this.statuses.statusList.new;
        this.item.finishDate = finishDate;
        this.item.caption = caption;
        this.item.description = description;

        this.item = Object.preventExtensions(this.item);

    }

    setStatus (statuseId){
        this.item.status = this.statuses.statusList[statuseId];
    }

    getDescription (){
        return this.item.description;
    }

    getCaption (){
        return this.item.caption;
    }

}
