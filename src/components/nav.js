import React, { useState, useContext, useRef } from 'react';
import '../assets/css/index.css';
import { useGlobalContext } from "../context/contextGlobal";

const Nav = () => {

    const { pages, scrollTo, selectNav, setSelectNav } = useGlobalContext()

    return (
        <nav >
            <div className="container">
                <ul className="nav-links">
                    {pages.map((page, index) => (
                        <li key={page.id}><a
                            onClick={() => {
                                setSelectNav(index)
                                scrollTo(page.id)
                            }}
                            className={`${selectNav === index ? 'active' : ''} `}
                        >{page.value}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;