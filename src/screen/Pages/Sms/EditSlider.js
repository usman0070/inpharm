import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import URL from '../../../BaseUrl/BaseUrl'


const EditSlider = () => {



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h3 className='text-center my-4'>Edit Slider</h3>
                        <form>


                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="refferralErnings"
                                // defaultValue={singleProduct.reffralEarnings}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="textarea"
                                    className="form-control"
                                    id="deliveryAddress"
                                // defaultValue={singleProduct.deliveryAddress}
                                />
                            </div>

                            <div>
                                <button type="button" className="btn btn-sm text-white px-4 py-2 btn-info">
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