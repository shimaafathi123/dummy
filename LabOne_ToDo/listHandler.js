/*function handleList(todosData) {
    if (todosData.length > 0) {
        console.log('All entries:');
        for (let i = 0; i < todosData.length; i++) {
            const status = todosData[i].done ? 'Done' : 'Todo';
            console.log(`Title: ${todosData[i].todo} Status: ${status}`);
        }
    } else {
        console.log('No entries found.');
    }
}

module.exports = handleList;*/


function handleList(todosData) {
    const entries = todosData.map(todo => {
        const status = todo.done ? 'Done' : 'Todo';
        return `Title: ${todo.todo} Status: ${status}`;
    });

    const result = entries.length > 0 ? entries.join('\n') : 'No entries found.';
    console.log(result);
}

module.exports = handleList;

