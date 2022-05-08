
import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import box from '../../../Images/services/box.png';
import road from '../../../Images/services/road.png';
import house from '../../../Images/services/house.png';
import warehouse from '../../../Images/services/warehouse.png';
import world from '../../../Images/services/world.png';
import truck from '../../../Images/services/truck.png';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Button className='me-0'>Manage Items</Button>
            <h2 className='m-3'>Our Services</h2>
            <div className='row m-3 g-3'>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded' >
                    <div>
                        <h5>Packaging & Storage</h5>
                        <p><small>We Can Package and store your things.</small></p>
                    </div>
                    <img height={40} src={box} alt="" />
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded'>
                    <div>
                        <h5>Warehousing</h5>
                        <p><small>We have top notch security and loads of space. Store your stuff at our warehouse.</small></p>
                    </div>
                    <img height={40} src={warehouse} alt="" />

                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded'>
                    <div>
                        <h5>Cargo</h5>
                        <p><small>Lest us transport your things from A to point B fast and securely.</small></p>
                    </div>
                    <img height={40} src={truck} alt="" />
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded'>
                    <div>
                        <h5>Door-To-Door Delivery</h5>
                        <p><small>Do you need somethings delivered? We are what you are looking for!</small></p>
                    </div>
                    <img height={40} src={house} alt="" />
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded'>
                    <div>
                        <h5>Worldwide Transport</h5>
                        <p><small>We can transport your things anywhere in the world.</small></p>
                    </div>
                    <img height={40} src={world} alt="" />
                </div>
                <div className='col-12 col-md-6 col-lg-4 d-flex block-example border border-primary rounded'>
                    <div>
                        <h5>Ground Transport</h5>
                        <p><small>Transport your things with our supper moving vans.</small></p>
                    </div>
                    <img height={40} src={road} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;