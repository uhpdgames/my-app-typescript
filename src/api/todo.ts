
const todo = async (from:number, to:number)=>{

    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        return data.slice(0, 10);
    })

}



const todo = (from:number, to:number)=>{

    const url ='https://jsonplaceholder.typicode.com/todos';

    axios.get(url).then((res: any)=>{
        return res.data.slice(from, to);
    })

}

export default todo;
