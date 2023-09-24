import React, { useState, useEffect } from "react";
import List from "./SliderTable";
import axios from "axios";
import URL from '../../../BaseUrl/BaseUrl'
import { toast } from "react-toastify";



function NewSlider() {
    const [faqData, setFaq] = useState([])

    useEffect(() => {
        async function test() {
            const header = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
            axios.post(`${URL}faq/create`, { headers: header }).then((res) => {
                toast.success('Created successfully')
                // setTimeout(() => window.location.reload(), 1000)
            }).catch((err) => {
                console.log(err);
                toast.error('Server Error')
            })

        }

        test()
    }, [])
    useEffect(() => {
        async function test() {
            const header = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
            axios.get(`${URL}faq/getAll`, { headers: header }).then((res) => {
                setFaq(res.data.data)

            }).catch((err) => {
                console.log(err);
                toast.error('Server Error')
            })

        }

        test()
    }, [])
    return (
        <>
            <List faqData={faqData} />
        </>
    )
}

export default NewSlider;
