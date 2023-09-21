import { useState, useEffect } from 'react';
import axios from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Main = (props) => {
    const [userList, setUserList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
        .then((res) => {
            setUserList(res.data)
        })
        .catch((err)=> console.log(err))
    }, [userList])

    const removeFromDom = personId =>{
        axios.delete('http://localhost:8000/api/user/' + userId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        setUserList(userList.filter(user=>user._id !== userId));
        }).catch((err)=>console.log(err))
    }
    const createUser = userParam => {
        axios.post('http://localhost:8000/api/user', userParam)
        .then((res)=>{
        console.log(res);
        console.log(res.data);
        setUserList([...userList, res.data])
        .catch((err)=>{
            console.log({msg:'Posting Error',err:err})
            })
        })
    }

    return (
        <div>
            <UserForm onSubmitProp={createUser} initialFirstName='' initialLastName=''/>
            <hr/>
            <UserList personList={personList} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;