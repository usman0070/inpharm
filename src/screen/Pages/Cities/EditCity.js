import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URL from '../../../BaseUrl/BaseUrl'
const EditCity = () => {
    const [city, setCity] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    const getData = () => {
        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,


        }
        axios.get(`${URL}city/adminPanel/${id}`, { headers: header }).then((res) => {
            setCity(res.data.city.name)
        }).catch((err) => {
            console.log(err);
        })

    }
    useEffect(() => {
        getData()
    }, [])


    const updateData = () => {

        const param = {
            'name': document.getElementById('city').value
        }
        console.log(param);
        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,


        }
        axios.put(`${URL}city/adminPanel/${id}`, param, { headers: header }).then((res) => {

        }).catch((err) => {
            console.log(err);
        })
        navigate('/city')
    }

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-4">

                        <input type="text" placeholder='city' defaultValue={city} id='city' className='form-control' />
                        <button type="button"
                            className="btn ms-auto px-3 py-2 mt-5  btn-success rounded-1" onClick={updateData} style={{ maxWidth: '130px' }}>
                            Update
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EditCity