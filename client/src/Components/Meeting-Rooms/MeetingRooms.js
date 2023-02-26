import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function MeetingRooms() {
    return (
        <div id='home-page-container' className="border d-flex align-items-center justify-content-center">
            <MDBContainer breakpoint="md">
                <MDBRow center className='mb-2'>
                    <MDBCol size='sm-3' className='me-4'>
                        <a href="/meeting-rooms/1"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 1</h1>
                        </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3'>
                        <a href="/meeting-rooms/2"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 2</h1>
                        </div>
                        </a>
                    </MDBCol>
                    <MDBCol size='sm-3'>
                        <a href="/meeting-rooms/3"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 3</h1>
                        </div>
                        </a>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size='sm-3' className='me-4'>
                        <a href="/meeting-rooms/4"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 4</h1>
                        </div>
                        </a>
                    </MDBCol>

                    <MDBCol size='sm-3'>
                        <a href="/meeting-rooms/5"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 5</h1>
                        </div>
                        </a>
                    </MDBCol>
                    <MDBCol size='sm-3'>
                        <a href="/meeting-rooms/6"><div className='p-5 text-center meeting-rooms square rounded-circle'>
                            <h1 className='responsive-text'>Toplantı Odası 6</h1>
                        </div>
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default MeetingRooms