import React, { useEffect, useState} from "react";
import { getToDoList, taskUpdate } from "../service/index.js";
import { PrintList } from "./PrintList.jsx";
import { AddTask } from "./addTask.jsx";
import UseAnimations from "react-useanimations";
import infinity from 'react-useanimations/lib/infinity';

const URL= 'https://assets.breatheco.de/apis/fake/todos/user/DiegoR';
 
const Home = () => {

	const [listToDo,setListToDo]=useState([]);
	const [loadlist,setLoad]=useState(false);

	const getList = async ()=>{
		const List= await getToDoList();
		setListToDo(List);
		setLoad(true)
	}

	useEffect(() => {
		getList();	
	},[]);

	const addToDo = async(task)=>{
		setLoad(false)
		const newList=[...listToDo,{label:task,done:false}];
		await taskUpdate(newList);
		getList();
	}

	const deleteToDo = async(indice)=>{
		setLoad(false)
		const newList=[...listToDo];
		newList.splice(indice,1);
		await taskUpdate(newList);
		getList();
	}

	const doneToDo = async(indice)=>{
		listToDo[indice].done= ! listToDo[indice].done;
		await taskUpdate(listToDo);
		getList();
	}

	return (
		<div className="text-center">
				<h1>To-Do List</h1>
				<AddTask addToDo={addToDo}/>
			<div className="tasklist">
				{loadlist ? listToDo.map((todo,index)=> index? <PrintList key={index} todo={todo} deleteToDo={deleteToDo} indice={index} doneToDo={doneToDo} />:null):<UseAnimations animation={infinity} size={300}></UseAnimations>}
			</div>	
		</div>
	)
};

export default Home;



