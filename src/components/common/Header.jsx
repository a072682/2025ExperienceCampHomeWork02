import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './_Header.scss';


function Header(){
    return(
        <>
            <Navbar className="react-navbar px-3">
                <Container fluid>

                    {/* 漢堡按鈕 */}
                    <Navbar.Toggle aria-controls="navbarScroll" />

                        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-center">
                        {/* 導覽連結 */}
                        <Nav className="text-center" navbarScroll>
                            <Nav.Link as={NavLink} to="/" end className='fontFamily fw-700 fs-3 me-40'>
                            首頁
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/BlogPage" className='fontFamily fw-700 fs-3'>
                            部落格
                            </Nav.Link>
                        </Nav>

                        {/* 右側搜尋列 */}
                        {/* <div class="search-box">
                            <input type="text" placeholder="搜尋..." />
                            <button type="submit">🔍</button>
                        </div> */}
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;