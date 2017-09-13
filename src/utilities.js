

function takeUserInput(event){
 this.setState(
     this.state.userInput = event.target.value
 )

}


function makeNewToDo(event){
    if (event.target.value){
        this.setState(
            this.state.uncompletedToDos.push(this.state.userInput)
        )
     event.target.value = '';
}
};



function markToDoComplete(event){
    this.setState(
        this.state.completedToDos.push(this.state.uncompletedToDos.splice(event.target.value,)[0])
    )
};


function deleteCompletedToDo(event){
    this.setState(
       this.state.completedToDos.splice(event.target.value,1)
    )
};


