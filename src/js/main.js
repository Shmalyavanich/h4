/*
1.	Create function-constructor which creates objects
 ToDoStatuses
{
new: ‘NEW’,
 	inProgress: ‘IN_PROGRESS’,
 	done: ‘DONE’
}
and define the one like read only and not configurable.


2. Create Function constructor (class) for ToDoItem with fields:
id,
creationDate,
finishDate,
status,
caption,
description
and define all fields like writable. but object isn’t extended,
property id has to be not iterable
Also put into prototype some methods like
setStatus(status, data)
getDescription()
getCaption()
fields id, and creation date have to be define during creating new object
*/


import write from './writer';
import {ToDoStatuses} from './ToDoStatuses';
import {ToDoItem} from './ToDoItem';

const statuses = new ToDoStatuses();

const todoExapmle = {
    finishDate: '14.06.2018 12:30:00',
    caption: 'new todo',
    description: 'new todo description'
}
const newToDoItem = new ToDoItem(todoExapmle);
newToDoItem.setStatus('done');


write(statuses);
write(newToDoItem);
write(newToDoItem.getDescription());
write(newToDoItem.getCaption());
