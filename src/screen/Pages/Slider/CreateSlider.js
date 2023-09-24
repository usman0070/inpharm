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
                        <h3 className='text-center my-4'>Create Slider</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Picture
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setImg(e.target.files)}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    My Profile
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setProfile(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Refferral Earnings
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setEarrnings(e.target.value)}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Setting
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setSetting(e.target.value)}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Delivery Address
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
                                    My Order
                                </label>
                                <input
                                    type="text"
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
                                    navigate('/newslider')
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