import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';

export const HomeComponent = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>HOME</h1>
            <div className='row'>
                <div className='col mb-5' style={{textAlign:'-webkit-center'}}>
                    <Card style={{width:'25rem'}}>
                        <CardHeader className='bg-dark text-light'>
                            Rubria Corte 1 - Desarrollo Web 2
                        </CardHeader>
                        <CardBody>
                            <p>Juan Jimenez Yancy</p>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default HomeComponent;