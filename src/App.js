import React, { Component } from 'react';
import logo from './logo.svg';
import UnCompletedToDos from './components/uncompletedToDos/UncompletedToDos';


class App extends Component {
  constructor(){
    super();

    this.state={
      userInput: '',
      uncompletedToDos: ['first'],
      completedToDos: [],
      
    }
    this.takeUserInput=this.takeUserInput.bind(this);
    this.makeNewToDo = this.makeNewToDo.bind(this);
    this.clearInput = this.clearInput.bind(this);
   this.markToDoComplete = this.markToDoComplete.bind(this);
   this.deleteCompletedToDo = this.deleteCompletedToDo.bind(this)

    
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
  var newDoneArray= this.state.completedToDos.push(doneItem);
    this.setState(
        
          //Object.assign({}, this.state, {uncompletedToDos: newUncompletedArray, completedToDos: newDoneArray})
          {completedToDos: (this.state.uncompletedToDos).concat(doneItem) }
      
    )
};


deleteCompletedToDo(event){
    this.setState(
       this.state.completedToDos.splice(event.target.value,1)
    )
};

componentWillMount(){
  this.clearInput
}

  

  render() {
 console.log(this.state.uncompletedToDos);
 console.log(this.state.completedToDos);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ToDo</h2>
        </div>
        <p className="App-intro">
          To get started, type in a ToDo and press Enter
          </p>
          
            <input type='text' value={this.state.userInput} onChange={this.takeUserInput}/> 
            <button onClick={()=>this.makeNewToDo(this.state.userInput)}>Create</button>
            
            <button onClick={()=>this.markToDoComplete(this.state.uncompletedToDos)}>done</button>
             <UnCompletedToDos markToDoComplete={this.markToDoComplete} uncompletedToDos={this.state.uncompletedToDos} />
           
       
      </div>
    );
  }
}

export default App;
