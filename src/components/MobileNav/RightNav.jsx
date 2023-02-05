import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTranslation} from 'react-i18next'
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Ul = styled.ul`
  display: none;
  list-style: none;
  flex-flow: row nowrap;
  z-index: 9999;
  li {
    padding: 18px 10px;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    display: flex;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const RightNav = ({ open }) => {
  const {t} = useTranslation()
  return (
    <Ul open={open}>
      <li><a href="/#about">{t("navbar1")}</a></li>
      <li><a href="/#services">{t("navbar2")}</a></li>
      <li><a href="/project">{t("navbar3")}</a></li>
      <li><a href="/news">{t("navbar4")}</a></li>
      <li><a href="/contact">{t("navbar5")}</a></li>
      <div className='socials'>
          <ul>
            <li><a href="/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
            <li><a href="https://instagram.com/buildingmegaservice"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href="https://t.me/buildingmegaservice"><FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon></a></li>
            <li><a href="https://www.youtube.com/channel/UCdMGDShGgriZfRfvA2jb_iQ"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
          </ul>
      </div>
    </Ul>
  )
}

export default RightNav