import React, { Component } from 'react';
import './App.css';
import UnCompletedToDos from './components/uncompletedToDos/UncompletedToDos';
import CompletedToDos from './components/completedToDos/CompletedToDos'
var classNames = require('classnames');

class App extends Component {
  constructor(){
    super();

    this.state={
      userInput: '',
      uncompletedToDos: ['first'],
      completedToDos: [],
      deletedArray: [],
      buttonWork: ''
     
      
    }
    this.takeUserInput=this.takeUserInput.bind(this);
    this.makeNewToDo = this.makeNewToDo.bind(this);
    this.clearInput = this.clearInput.bind(this);
   this.markToDoComplete = this.markToDoComplete.bind(this);
   this.deleteCompletedToDo = this.deleteCompletedToDo.bind(this);
 


    
  }

takeUserInput(event){
  this.setState(
    Object.assign({}, this.state, {userInput: event.target.value})
  )

}



makeNewToDo(newToDo){
   if (newToDo){
     //var list=this.state.uncompletedToDos;
    //var toDo = this.state.userInput;
     //var newArray = list.splice(0,0, this.state.userInput )
//console.log(newArray);
        this.setState(
          //Object.assign({}, this.state,{uncompletedToDos: newArray})
       {uncompletedToDos: (this.state.uncompletedToDos).concat(this.state.userInput) }
          
        )
        
        this.clearInput(this.state.userInput);
       
   }
   
};

clearInput(itemToClear){
   this.setState({
     userInput : ''
   })
  
}




markToDoComplete(event){
  
 // var newUncompletedArray=event.splice(0,1);
  var doneItem = this.state.uncompletedToDos.splice(0,1)[0]
    this.setState(
        
          //Object.assign({}, this.state, {uncompletedToDos: newUncompletedArray, completedToDos: newDoneArray})
          {completedToDos: (this.state.completedToDos).concat(doneItem) }
      
    )
    
};


deleteCompletedToDo(event){


  var deletedItem = this.state.completedToDos.splice(0,1)[0]
  
    this.setState(
       {completeToDos: (this.state.completedToDos).concat(deletedItem )}
    )
  
};

componentWillMount(){
  this.clearInput
  this.makeButtonGreen
}

  

  render() {
 //console.log(this.state.uncompletedToDos);
 //console.log(this.state.completedToDos);
 //console.log(this.state.deletedArray)

 
 
/*var deleteButtonClass = 'btn';
 var completedlength = this.state.completedToDos;
 console.log(completedlength)
 if (true) deleteButtonClass += 'red'*/


    return (
      <div className="App">
        <div className="App-header">
          
          <h2>ToDo</h2>
        </div>
        <p className="App-intro">
          To get started, type in a ToDo and press Enter
          </p>
          
            <input type='text' value={this.state.userInput} onChange={this.takeUserInput}/> 
            <button onClick={()=>this.makeNewToDo(this.state.userInput)}>Create</button>
            <p>Todos</p>
            <button onClick={()=>this.markToDoComplete(this.state.uncompletedToDos)}>done</button>
             <UnCompletedToDos markToDoComplete={this.markToDoComplete} uncompletedToDos={this.state.uncompletedToDos} />
           <p>Completed</p>
            <button  onClick={()=>this.deleteCompletedToDo(this.state.completedToDos)}>delete</button>
   
           <CompletedToDos completedToDos={this.state.completedToDos} />
   
          
       
           
       
    
      </div>
    );
  }
}

export default App;
