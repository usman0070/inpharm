import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import URL from '../../../BaseUrl/BaseUrl';
const CreateSlider = () => {
    const navigate = useNavigate()
    const mynavigate = useNavigate()

    const [img, setImg] = useState([]);
    const [profile, setProfile] = useState('');
    const [earnings, setEarrnings] = useState('');
    const [setting, setSetting] = useState('');
    const [address, setAddress] = useState('');
    const [order, setOrder] = useState('');

    const param = new FormData();
    console.log(param);
    param.append('picture', img[0])
    param.append('myProfile', profile)
    param.append(' referralEarning', earnings)
    param.append('settings', setting)
    param.append('deliveryAddress', address)
    param.append('myOrders', order)

    const header = {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Accept': 'application/json',
        'Content-Type': "multipart/form-data"

    }
    const uploadData = () => {

        axios.post(`${URL}sliders/adminPanel/create`, param, { headers: header }).then((res) => {
            console.log(res);
            mynavigate('/newslider')
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h3 className='text-center my-4'>Create FAQ</h3>
                        <form>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setAddress(e.target.value)}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="textarea"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setOrder(e.target.value)}

                                />
                            </div>
                            <div>
                                <button onClick={uploadData} type="button" className="btn btn-sm text-white px-4 py-2 btn-info">
                                    Add
                                </button>

                                <button onClick={() => {
                                    navigate('/sms')
                                }} type="button" className="btn ms-4 btn-sm text-white px-4 py-2 btn-secondary">
                                    Back
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreateSlider