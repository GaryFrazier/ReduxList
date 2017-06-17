import React from "react"
import { connect } from "react-redux"
import * as item from "../itemActions"

@connect((store) => {
    return{
        items: store.items
    }
})
export default class TodoList extends React.Component{
    render(){
        const items = this.props.items.map((item, index) => <li key={index}>{item}</li>)
                                           
        return(
        <div>
            <h1>Todo</h1>
            <ul>
                {items}
            </ul>
            <input type="text" id="itemText"/>
            <button id="addButton" onClick={this.addItem.bind(this)}>add!</button>
        </div>
    )}
   
    addItem = function(){
        this.props.dispatch(item.addItem(document.getElementById("itemText").value))
    }
}