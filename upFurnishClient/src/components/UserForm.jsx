import { useEffect, useState } from "react";

const UserForm = (props) => {
    const {initialFirstName, initialLastName, onSubmitProp} = props
    const [message, setMessage] = useState('Loading...')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        onSubmitProp({firstName,lastName});
    }
    return (
        <form className="col-s-6 mx-auto" onSubmit={onSubmitHandler}>
            <div>
                <label className="form-label">First Name</label><br/>
                <input className="form-control" type="text" name='firstname' value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
                <label className="form-label">Last Name</label><br/>
                <input className="form-control" type="text" name='lastname' value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <button type="submit" className="btn btn-info mt-3">Create User</button>
            </div>
        </form>
    )
}
export default UserForm;