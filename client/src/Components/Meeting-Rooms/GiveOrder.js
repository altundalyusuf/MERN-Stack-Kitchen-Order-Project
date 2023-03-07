import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useRoom } from '../../Contexts/RoomContext';
import {
    MDBBtn, MDBContainer, MDBCol, MDBRow, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
    MDBModalTitle, MDBModalBody, MDBModalFooter
} from 'mdb-react-ui-kit';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";


function GiveOrder() {
    const { id } = useParams();
    const { getDataFromMongo } = useRoom();
    const [scrollableModal, setScrollableModal] = useState(false);

    // Select input değerlerini sıfırla
    const resetValues = () => {
        const options = document.querySelectorAll('select option');
        for (let i = 0; i < options.length; i++) {
            options[i].selected = options[i].defaultSelected;
        }
    }
    // Modal içini sıfırla
    const resetModalContent = () => {
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = "";
    }

    // Siparişin oluşturulma anı
    const currentDate = () => {
        let currentDate = new Date().toLocaleDateString()
        let currentTime = new Date()
        let time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        return { currentDate, time }
    }

    const submitOrder = () => {
        setScrollableModal(!setScrollableModal)
        const inputValues = getInput();
        if (inputValues.length > 0) {
            // Bu satıra gerek yok sanırım çünkü handleSubmit içinde mongodan veri alırken zaten setOrder yapıyorum
            // setOrder((prev) => ([...prev, { roomID: id, order: inputValues }]));

            // Siparişin oluşturulma anı
            const date = currentDate();
            handleSubmit({ roomID: id, order: inputValues, date: date.currentDate, time: date.time })
        }
        resetModalContent();
        resetValues();

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




    const getInput = () => {
        const teaInput = document.getElementById('teaInput')
        const filterCoffeeInput = document.getElementById('filterCoffeeInput')
        const milkCoffeeInput = document.getElementById('milkCoffeeInput')
        const nescafeInput = document.getElementById('nescafeInput')
        const waterInput = document.getElementById('waterInput')
        const inputs = [teaInput, filterCoffeeInput, milkCoffeeInput, nescafeInput, waterInput]

        let selectedInput = ``
        inputs.forEach((input) => {
            if (input.value !== '0') {
                selectedInput += `${input.value} ${input.previousElementSibling.innerHTML},`
            }
        })

        const inputValuesArray = selectedInput.split(',');
        inputValuesArray.splice(-1);
        return inputValuesArray
    }

    const sendOrderToModal = () => {
        setScrollableModal(!scrollableModal);
        const inputValues = getInput();
        const modalContent = document.getElementById('modal-content');
        if (inputValues.length > 0) {
            inputValues.forEach(input => {
                modalContent.innerHTML += `
                <p>${input}<p/>
                `
            })
        }
        else {
            modalContent.innerHTML += `
            <div class="alert alert-danger" role="alert">
            Sipariş eklemediniz. Lütfen sipariş ekleyin.
        </div>
                `
        }
    }



    return (
        <div id='give-order' className='pb-5'>
            {/* Header */}
            <div className='p-3 text-center bg-success text-white mb-5'>
                <div className="d-flex justify-content-start mb-3"><h2 className='text-left'>Toplantı Odası: {id}</h2></div>
                <h3 className='mb-3'>Siparişlerinizi ilgili alanlardan seçerek iletebilirsiniz.</h3>
                <h6 className='mb-3'>(Sipariş listenizi doldurduktan sonra 'Sipariş Ver' butonuna tıklayınız.)</h6>
            </div>

            {/* Sipariş seçim alanı */}
            <MDBContainer breakpoint="md">
                <MDBRow >
                    <MDBCol size='md-4' className='d-flex justify-content-center align-items-center flex-column'>
                        <MDBCol size='md-8' className='mb-2'>
                            <img
                                src='https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg'
                                className='img-thumbnail thumbnails'
                                alt='tea'
                            />
                        </MDBCol>
                        <MDBCol size='md-4' className='d-flex justify-content-center align-items-center'>
                            <FormGroup className='text-center'>
                                <Label for="exampleSelect" id='teaLabel'>
                                    Çay
                                </Label>
                                <Input
                                    id="teaInput"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        0
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        6
                                    </option>
                                    <option>
                                        7
                                    </option>
                                    <option>
                                        8
                                    </option>
                                    <option>
                                        9
                                    </option>
                                    <option>
                                        10
                                    </option>
                                </Input>
                            </FormGroup>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol size='md-4' className='d-flex justify-content-center align-items-center flex-column'>
                        <MDBCol size='md-8' className='mb-2'>
                            <img
                                src='https://i.lezzet.com.tr/images-xxlarge-secondary/filtre-kahve-yanina-ne-gider-736bcfb7-3cb2-4f5c-b634-7c14b5aba40f'
                                className='img-thumbnail thumbnails'
                                alt='filtre kahve'
                            />
                        </MDBCol>
                        <MDBCol size='md-4' className='d-flex justify-content-center align-items-center'>
                            <FormGroup className='text-center'>
                                <Label for="exampleSelect" id='filterCoffeeLabel'>
                                    Filtre Kahve
                                </Label>
                                <Input
                                    id="filterCoffeeInput"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        0
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        6
                                    </option>
                                    <option>
                                        7
                                    </option>
                                    <option>
                                        8
                                    </option>
                                    <option>
                                        9
                                    </option>
                                    <option>
                                        10
                                    </option>
                                </Input>
                            </FormGroup>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol size='md-4' className='d-flex justify-content-center align-items-center flex-column'>
                        <MDBCol size='md-8' className='mb-2'>
                            <img
                                src='https://coffeetropic.com/wp-content/uploads/2020/06/latte.jpg'
                                className='img-thumbnail thumbnails'
                                alt='sütlü kahve'
                            />
                        </MDBCol>
                        <MDBCol size='md-4' className='d-flex justify-content-center align-items-center'>
                            <FormGroup className='text-center'>
                                <Label for="exampleSelect" id='milkCoffeeLabel'>
                                    Sütlü Kahve
                                </Label>
                                <Input
                                    id="milkCoffeeInput"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        0
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        6
                                    </option>
                                    <option>
                                        7
                                    </option>
                                    <option>
                                        8
                                    </option>
                                    <option>
                                        9
                                    </option>
                                    <option>
                                        10
                                    </option>
                                </Input>
                            </FormGroup>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol size='md-4' className='d-flex justify-content-center align-items-center flex-column'>
                        <MDBCol size='md-8' className='mb-2'>
                            <img
                                src='https://blog.ofix.com/wp-content/uploads/2018/11/iyi_bir_nescafe_hazirlamanin_puf_noktalari_ofix_blog_3.jpg'
                                className='img-thumbnail thumbnails'
                                alt='nescafe'
                            />
                        </MDBCol>
                        <MDBCol size='md-4' className='d-flex justify-content-center align-items-center'>
                            <FormGroup className='text-center'>
                                <Label for="exampleSelect" id='nescafeLabel'>
                                    Nescafe
                                </Label>
                                <Input
                                    id="nescafeInput"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        0
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        6
                                    </option>
                                    <option>
                                        7
                                    </option>
                                    <option>
                                        8
                                    </option>
                                    <option>
                                        9
                                    </option>
                                    <option>
                                        10
                                    </option>
                                </Input>
                            </FormGroup>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol size='md-4' className='d-flex justify-content-center align-items-center flex-column'>
                        <MDBCol size='md-8' className='mb-2'>
                            <img
                                src='https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/bol-su-icmek-neden-onemli_2041_1.jpg'
                                className='img-thumbnail thumbnails'
                                alt='su'
                            />
                        </MDBCol>
                        <MDBCol size='md-4' className='d-flex justify-content-center align-items-center'>
                            <FormGroup className='text-center'>
                                <Label for="exampleSelect" id='waterLabel'>
                                    Su
                                </Label>
                                <Input
                                    id="waterInput"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        0
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                    <option>
                                        6
                                    </option>
                                    <option>
                                        7
                                    </option>
                                    <option>
                                        8
                                    </option>
                                    <option>
                                        9
                                    </option>
                                    <option>
                                        10
                                    </option>
                                </Input>
                            </FormGroup>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>

                {/* Submit Butonu */}
                <MDBRow className='d-flex justify-content-center pb-5'>
                    <MDBCol size='md-3 text-center'>
                        <MDBBtn className='mt-3' id='room-order-button' type="submit" onClick={sendOrderToModal} >Sipariş Ver</MDBBtn>
                    </MDBCol>
                    <div>&copy; copyright: Yusuf Altundal</div>
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
                                onClick={() => { setScrollableModal(!scrollableModal); resetModalContent(); }}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <h6 className='mb-3'>Toplantı odası {id}</h6>
                            <p id='modal-content'>
                            </p>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={() => { setScrollableModal(!setScrollableModal); resetModalContent(); }}>
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