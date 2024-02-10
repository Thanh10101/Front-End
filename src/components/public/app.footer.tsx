'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function AppFooter() {
    return (
        <Container fluid>
            <Container className='text-center'>
                <footer className="footer">
                    <div>
                        <FontAwesomeIcon icon={faAddressBook} />
                        <a href="https://coreui.io">CoreUI</a>
                        <span>&copy; 2022 creativeLabs.</span>
                    </div>
                    <div>
                        <span>Powered by</span>
                        <a href="https://coreui.io">CoreUI</a>
                    </div>
                </footer>
            </Container>
        </Container>
    )
}