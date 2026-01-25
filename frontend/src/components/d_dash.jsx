
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function DoctorDash(){
    const navigate= useNavigate()
    const[appointments,setAppointments]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token){
            navigate('/login')
            return
        }
        
    },[])
    return(
        <div>Doctor Dashboard</div>
    )
}