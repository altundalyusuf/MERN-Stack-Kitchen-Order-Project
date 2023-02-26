import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';



function HomePage() {
    return (
        <div id='home-page-container' className="border d-flex align-items-center justify-content-center">
            <MDBContainer breakpoint="md">
                <MDBRow center>
                    <MDBCol size='5' className='me-4'>
                        <MDBCard>
                            <MDBCardImage
                                src="http://decoholic.org/wp-content/uploads/2014/11/home-coffee-station-11.jpg"
                                position="top"
                                alt="mutfak.jpg"
                            />
                            <MDBCardBody className='text-center bg-dark' >
                                <MDBBtn tag="a" href="/kitchen-list" color='danger' id='order-button' className="stretched-link">Mutfağa Git</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol size='5'>
                        <MDBCard>
                            <MDBCardImage
                                src="https://static.onecms.io/wp-content/uploads/sites/34/2022/06/22/tea-coffee-which-is-better-for-you-0622.jpg"
                                position="top"
                                alt="siparis.jpg"
                            />
                            <MDBCardBody className='text-center bg-dark' >
                                <MDBBtn tag="a" href="/meeting-rooms" color='danger' id='order-button' className="stretched-link">Sipariş Ver</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>


    )
}

export default HomePage