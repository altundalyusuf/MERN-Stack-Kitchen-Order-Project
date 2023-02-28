import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function MeetingRooms() {
    return (
        <div id='home-page-container' className="border d-flex align-items-center justify-content-center">
            <MDBContainer breakpoint="md">
                <h1 className='text-center mb-5 text-danger'>Toplantı Odası Seçin</h1>
                <MDBRow center className='text-center'>
                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/Tesla" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Tesla</h1>
                            </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/Newton" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Newton</h1>
                            </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/Turing" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Turing</h1>
                            </div>
                        </a>
                    </MDBCol>
                </MDBRow>

                <MDBRow center className='text-center'>
                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/4" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Toplantı Odası 4</h1>
                            </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/5" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Toplantı Odası 5</h1>
                            </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3' className='me-4 mb-1 '>
                        <a href="/meeting-rooms/6" className='square rounded meeting-rooms d-flex align-items-center justify-content-center meeting-links' >
                            <div className='p-5'>
                                <h1>Toplantı Odası 6</h1>
                            </div>
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default MeetingRooms