import React from 'react'
import { MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from "axios";
import { useRoom } from '../../Contexts/RoomContext';

function OrderList({ value }) {

    const { getDataFromMongo } = useRoom();

    const handleSubmit = async (data) => {
        try {
            const url = `http://localhost:8080/kitchen-list`;
            const { data: res } = await axios.post(url, data);
            console.log(res.message);
            getDataFromMongo();
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data.message);
            }
        }
    }


    const completeOrder = () => {
        handleSubmit(value)
    }

    return (
        <div>
            <MDBListGroup style={{ minWidth: '22rem' }} light >
                <MDBListGroupItem className='d-flex justify-content-between align-items-center mb-1 ' id='order-list-item'>
                    <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                            <p className='fw-bold mb-1' >Toplantı odası {value.roomID}</p>
                            <p className='mb-0'>{value.order}</p>
                        </div>
                    </div>

                    <MDBBtn size='sm' rounded color='dark' className='me-2 completeOrderButton' onClick={completeOrder}>
                        &#10004;
                    </MDBBtn>
                </MDBListGroupItem>
            </MDBListGroup>
        </div >
    )
}

export default OrderList