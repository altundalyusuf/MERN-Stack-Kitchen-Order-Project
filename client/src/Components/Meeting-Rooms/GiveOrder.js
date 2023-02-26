import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRoom } from '../../Contexts/RoomContext';
import {
    MDBTextArea, MDBBtn, MDBContainer, MDBCol, MDBRow, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
    MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from "axios";


function GiveOrder() {
    const { id } = useParams();
    const { order, setOrder } = useRoom();
    const [scrollableModal, setScrollableModal] = useState(false);
    const { getDataFromMongo } = useRoom();



    const submitOrder = () => {
        setScrollableModal(!setScrollableModal)
        const textArea = document.getElementById('textAreaExample');
        const modalContent = document.getElementById('modal-content');
        setOrder((prev) => ([...prev, { roomID: id, order: textArea.value }]));
        handleSubmit({ roomID: id, order: textArea.value })
        textArea.value = ``;
        modalContent.innerHTML = "";
    }

    const handleSubmit = async (data) => {
        try {
            const url = `http://localhost:8080/meeting-rooms/${id}`;
            const { data: res } = await axios.post(url, data);
            console.log(res.message);
            getDataFromMongo();

        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data.message);
            }
        }
    }

    const sendOrderToModal = () => {
        setScrollableModal(!scrollableModal);
        const textArea = document.getElementById('textAreaExample');
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `${textArea.value}`;
    }



    return (
        <div id='give-order'>
            {/* Header */}
            <div className='p-5 text-center bg-success text-white mb-5'>
                <div className="d-flex justify-content-start mb-3"><h2 className='text-left'>Toplantı Odası {id}</h2></div>
                <h3 className='mb-3'>Siparişlerinizi aşağıda yer alan forma girerek iletebilirsiniz.</h3>
                <h6 className='mb-3'>(Sipariş listenizi doldurduktan sonra 'Sipariş Ver' butonuna tıklayınız.)</h6>
            </div>

            {/* Sipariş alınan input alanı */}
            <MDBContainer breakpoint="md">
                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol size='md-6'>
                        <MDBTextArea label='Siparişlerinizi Giriniz' id='textAreaExample' rows={4} />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol size='md-3 text-center'>
                        <MDBBtn className='mt-3' id='room-order-button' type="submit" onClick={sendOrderToModal} >Sipariş Ver</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            {/* Modal */}
            <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
                <MDBModalDialog scrollable>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Siparişinizi onaylıyor musunuz?</MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setScrollableModal(!scrollableModal)}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <h6>Toplantı odası {id}</h6>
                            <p id='modal-content'>
                            </p>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                                Hayır
                            </MDBBtn>
                            <MDBBtn id='modal-yes-button' type="submit" onClick={submitOrder}
                            >Evet</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>


        </div >
    )
}

export default GiveOrder