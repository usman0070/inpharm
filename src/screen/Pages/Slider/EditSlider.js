import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URL from '../../../BaseUrl/BaseUrl'


const EditSlider = () => {
    const [singleProduct, setSingleProduct] = useState({})
    console.log(singleProduct);
    const { id } = useParams()

    const backNavigate = useNavigate();

    const header = {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Accept': 'application/json',
        'Content-Type': "multipart/form-data"

    }
    useEffect(() => {
        axios.get(`${URL}sliders/adminPanel/${id}`, { headers: header }).then((res) => {
            setSingleProduct(res.data.slider)


        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const updateData = () => {

        const param = {
            'myProfile': document.getElementById('myProfile').value,
            'referralEarning': document.getElementById('refferralErnings').value,
            'deliveryAddress': document.getElementById('deliveryAddress').value
        }
        console.log(param);

        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': "application/json"

        }
        const data = JSON.stringify(param)

        axios.post(`${URL}sliders/adminPanel/update/${id}`, data, { headers: header }).then((res) => {
            console.log(res);
            backNavigate('/newslider')
        }).catch((err) => {
            console.log(err);
        })


    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h3 className='text-center my-4'>Edit Slider</h3>
                        <form>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    My Profile
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="myProfile"
                                    defaultValue={singleProduct.myProfile}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Refferral Earnings
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="refferralErnings"
                                    defaultValue={singleProduct.reffralEarnings}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Delivery Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="deliveryAddress"
                                    defaultValue={singleProduct.deliveryAddress}
                                />
                            </div>

                            <div>
                                <button onClick={updateData} type="button" className="btn btn-sm text-white px-4 py-2 btn-info">
                                    Update

                                </button>

                                <button
                                    type="button" className="btn ms-4 btn-sm text-white px-4 py-2 btn-secondary">
                                    Back
                                </button>
                            </div>

                        </form>
                    </div>
                </div >

            </div >
        </>
    )
}

export default EditSlider