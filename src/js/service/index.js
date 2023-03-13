const URL= 'https://assets.breatheco.de/apis/fake/todos/user/DiegoR';
const Headers= {"Content-Type": "application/json"};

export const getToDoList= async()=>{
    try{
        const response=await fetch(URL, {method: 'GET'});
        const data=await response.json();
        return data
    }catch(err){
        console.log(err);
    }
}

export const taskUpdate = async (data) =>{
    try{
        const response=await fetch(URL, {method: 'PUT', body: JSON.stringify(data), headers:{"Content-Type": "application/json"}});
    }catch(err){
        console.log(err);
    }
}

	{/*useEffect(() => {
		let requestOptions= {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
			}, 
		};

		fetch(URL,requestOptions)
			.then((response) =>response.json())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	});*/}

	