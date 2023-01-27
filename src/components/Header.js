import React, { useState } from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';

function HeaderMain() {

    const [search, setSearch] = useState("")

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log(search)
        window.location.href = "/search?q=" + search;
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            window.location.href = "/search?q=" + search;
        }
    }

    const check = () => {
        window.location.href = "/write";
    }

    return (
        <>
            <Container>
                <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid " >
                        <a className="navbar-brand" href="/"><b>HOME</b></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                     <li className="nav-item">
                                        <a className="nav-link" onClick={() => window.location.href = "/write"} >문제 등록</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Container>

        </>

    );
}

const Container = styled.div`
    border-bottom: 1px rgb(219 221 224) solid;
   
`

const Welcome = styled.span`
    position: absolute;
    right: 0.5%;
    padding: 0.5%;
`

const Logout = styled.button`
    border: none;
    background: none;
    margin-left: 5px;
    color: grey;
    text-decoration: underline;
`

export default HeaderMain;
