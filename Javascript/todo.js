
const tasks = [];

const addTask = (task) => {
    if (!task) throw new Error('Tasks can\'t be empty');
    tasks.push(task);
    console.log(`Task : ${task}`);


}





const deleteTask = (index) => {
    if (index < 0 || index >= tasks.length) {
        throw new Error('Invalid Index of task!')
    }
    console.log(index);
    
    const deletedTask = [...tasks].slice(index, index+1);
   // const deletedTask = [...tasks].filter((t, i) => i !== index);
    //const deletedTask = tasks.filter((t, i) => i !== index);



    console.log(deletedTask);
    //console.log(`Deleted task is ${index+1} no.`);
    

}

try {
    addTask('Task1');
    addTask('Task2');
    addTask('Task3');
    deleteTask(1);
    deleteTask(2);
} catch (error) {
    console.log(error.message);
}

