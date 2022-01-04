import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
 background: #15171c;
 height: 80px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
`;

const NavIcon = styled(Link)`
 margin-left: 2rem;
 font-size: 1.5rem;
 color: white;
 display: flex;
 justify-content: flex-start;
 align-items: center;

`;

const SidebarNav = styled.nav`
 background: #15171c;
 width: 450px;
 height: 100vh;
 display: flex;
 justify-content: center;
 position: fixed;
 top: 0;
 left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
 transition: 350ms;
 z-index: 10;
 overflow: scroll;


`;

const SidebarWrap = styled.div`
 width: 100%;

`;

const NavHead = styled.div`
 display: flex;
 justify-content: center;
 color: white;
 align-items: center;


`;


const Sidebar = () => {

    const[sidebar, setSideBar] = useState(false);


    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
        <IconContext.Provider value= {{color: '#fff'}}>
            <Nav>
           

             <NavIcon to="#">
              <FaIcons.FaBars onClick={showSideBar} /> 
             </NavIcon>
             <NavHead>বিগিনার দের জন্য জাভাস্ক্রিপ্ট - সম্পূর্ণ কোর্স আউটলাইন </NavHead>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                  <AiIcons.AiOutlineClose onClick={showSideBar}/>
                  
                </NavIcon>
                {SidebarData.map((item, index)=> {
                    return <SubMenu item={item} key={index} />

                })}
                </SidebarWrap>
            </SidebarNav>
         </IconContext.Provider>

        </>
    )
}

export default Sidebar;