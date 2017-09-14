import React, {Component} from 'react';


export default class  CompletedToDos extends Component {
        /*construction(props){
            super();
        
            this.state={

            }
        }*/


    render(){
       var complete = this.props.completedToDos;
       var green = 'green';
       if (complete.length>0) green += ' btn'

        return(
            <div>
               
               
                <ul >
                    {
                        this.props.completedToDos.map((toDo,i)=>{
                            return <li className ={green} key={i}>{toDo}</li>
                        })
                    }
                    
                </ul>
            </div>

        )
    }
}