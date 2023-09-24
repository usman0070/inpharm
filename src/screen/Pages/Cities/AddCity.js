import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import URL from '../../../BaseUrl/BaseUrl'
import { useEffect } from 'react'
import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form';

const AddCity = () => {


    const form = useForm();
    const { control, register, watch, handleSubmit, formState } = form

    const { errors } = formState
    const onSubmit = (value) => {
        // alert('submit')
        console.log(value);
    }
    const navigate = useNavigate()
    const [name, setname] = useState('')

    const uploadData = () => {


        const params = {
            'name': name
        }
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        console.log(header);
        axios.post(`${URL}city/adminPanel/create`, params, { headers: header }).then((res) => {

        }).catch((err) => {
            console.log(err);
        })
        navigate('/city')
    }

    const getData = () => {
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(`${URL}city/adminPanel`, { headers: header }).then((res) => {
            console.log(res.data.cityList);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-4">
                        <form action="#" noValidate>

                            <input type="text" placeholder='city' {...register('city', {
                                required: {
                                    value: true,
                                    message: 'this field is required'
                                }
                            })} value={name} id='city' onChange={(e) => { setname(e.target.value) }} className='form-control' />
                            <small>{errors.city?.message}</small>
                            <button type="button" onClick={uploadData}
                                className="btn ms-auto px-3 py-2 mt-5  btn-success rounded-1" style={{ maxWidth: '130px' }}>
                                <i className="fa-solid fa-plus"></i> Add
                            </button>
                        </form>
                        <DevTool control={control} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddCity