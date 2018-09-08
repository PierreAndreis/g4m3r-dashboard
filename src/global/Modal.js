import React, { Component } from 'react'
import { css } from "emotion";
import classNames from "classnames";

const modalContainer = css`
    width:100vw;
    height:100vh;
    position:absolute;
    pointer-events:none;
    top:0;
    left:0;
`

const modal = css`
    width:800px;
    height:650px;
    background-image: linear-gradient(0deg,#7aaeff 0%,#74e1eb 100%);
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:9999;
    border-radius:3px;
    padding:5px;
    box-sizing:border-box;
    transition:0.3s;
    transition: transform 0.5s, opacity 0.5s ;
    opacity:0;
    z-index:2;
`;


const modalContent = css`
    width:100%;
    height:100%;
    background:#fff;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    position:relative;
    box-sizing:border-box;
    padding:15px;
`
const close = css`
    position:absolute;
    right:10px;
    top:10px;
    cursor:pointer;
`

const closeContent = css`
    width:35px;
    height:35px;
    box-sizing:border-box;
    &:after {
    content:"";
    position:absolute;
    top:0;
    width:100%;
    height:3px;
    background:#111;
    top:50%;
    transform:rotate(-45deg)
    }
    &:before {
    content:"";
    position:absolute;
    top:50%;
    width:100%;
    height:3px;
    background:#111;
    transform:rotate(45deg)
    }
`

const openModal = css`
    transform :translate(-50%,-45%);
    opacity:1;
    pointer-events:visible;
`

const modalBg = css`
    width:100%;
    height:100%;
    position:absolute;
    z-index:100;
    transition:0.3s;
    background:rgba(0,0,0,0);    
    z-index:1;
`

const openModalBg = css`
    pointer-events:initial;
    background:rgba(0,0,0,0.3);
    filter: blur(2px);
`


export default class Modal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isOpenModal, toggleModal, handleModal } = this.props
        console.log('isOpenModal', isOpenModal);
        return (
            <div className={modalContainer}>
                <div onClick={toggleModal} className={classNames(modalBg, { [openModalBg]: isOpenModal })} ></div>
                <div className={classNames(modal, { [openModal]: isOpenModal })}>
                    <div className={modalContent}>
                        <div className={close} onClick={toggleModal}>
                            <div className={closeContent}></div>
                        </div>
                        {this.props.render()}
                    </div>
                </div>
            </div >
        )
    }
}
