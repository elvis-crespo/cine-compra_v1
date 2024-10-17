/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import { testingService } from '../services/testingService'
import { useEffect } from 'react'
import interceptor from '../interceptors/interceptor'
import { useAuth } from '../hooks/useAuth'

interceptor()

export default function About() {
  const { auth, setTokens, removeTokens, checkIfAuthenticated } = useAuth();
  const [dataU, setDataU] = useState('')
  const fetchData = async () => {
    const { data } = await testingService('data1');
    setDataU(data)
  };
  const handle = () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user)

    if(user == null){
      console.log('No hay token')
    }
    else if (user.token) {
      try {
        checkIfAuthenticated();
      } catch (error) {
        console.log('R',error);
      }
    }
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('error', error)
    }
  }, []);

  return (
    <div>
      {JSON.stringify(dataU)}
      <button onClick={handle}>Press Here!!</button>
    </div>
  )
}
