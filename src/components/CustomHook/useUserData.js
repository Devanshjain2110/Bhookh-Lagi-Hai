import {useState, useEffect} from 'react';

const useUserData = () => {
    const [user, setUser] = useState("");
    useEffect(()=>{
        getUserInfo();
    },[])

    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/Devanshjain2110");
        const json = await data.json();
        console.log(json)
        setUser(json)
    }
    return user;
}

export default useUserData;