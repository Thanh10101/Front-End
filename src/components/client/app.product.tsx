'use client'
import Link from 'next/link'
import app from '@/style/app.module.scss'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import banner from '@/img/banner.jpg'

export default function AppProduct() {
    return (
        <Container className='min-vh-100 ' >
            <h2 className='mt-4'>Sản phẩm nổi bậc</h2>
            <CardGroup >
                <Row >
                    <Col sm={6} md={4} lg={3} className='mb-4'>
                        <Card border="primary">
                            <Card.Img as={Image} variant="top" priority={true} alt='cua' src={banner} className='img-fluid' />
                            <Card.Body >
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </Container >
    )
}