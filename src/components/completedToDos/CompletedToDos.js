import React, {Component} from 'react';


export default class  CompletedToDos extends Component {

    render(){
        const myStyle={
            color: "green",
        }

        return(
            <div>
               
               
                <ul >
                    {
                        this.props.completedToDos.map((toDo,i)=>{
                            return <li key={i} style ={myStyle}>{toDo}</li>
                        })
                    }
                    
                </ul>
            </div>

        )
    }
}