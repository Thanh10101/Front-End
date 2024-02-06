'use client'
import Link from 'next/link'
import app from '@/style/app.module.scss'
import Container from 'react-bootstrap/Container'




export default function BasicExample() {
  return (
    <Container className='vh-100' style={{ color: app.primaryColor }}>
      body
    </Container>
  );
}

