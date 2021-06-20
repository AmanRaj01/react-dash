import React from 'react'
import { FinanceInfo } from '../components/FinanceInfo';
import './Dashboard.css'
import { Link } from 'react-router-dom';
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import { IconContext } from 'react-icons';
import * as GoIcons from "react-icons/go";

const Dashboard = () => {
    return (
        <>
        <IconContext.Provider value={{color: '#000'}}>
            <div className='coant-dash'>
                <div className='row-1'>
                    <div className='col-1-1'>
                        <span>Invoices</span>
                        <span className='moneyVal'>${FinanceInfo.Invoice}</span>
                        <span className='bottom-text'>{FinanceInfo.InvoiceVal}</span>
                    </div>
                    <div className='col-1'>
                        {/* <span> </span> */}
                        <span className='moneyVal'>${FinanceInfo.Total}</span>
                        <span className='bottom-text'>Total Outstanding</span>
                    </div>
                    <div className='col-1'>
                        {/* <span> </span> */}
                        <span className='moneyVal'>${FinanceInfo.Draft}</span>
                        <span className='bottom-text'>In Draft</span>
                    </div>
                    <div className='col-2'>
                    <span>{FinanceInfo.Status}</span>
                        <span className='sweep-right moneyVal'>${FinanceInfo.Net}</span>
                        <span className='bottom-text'>${FinanceInfo.Invoice} {FinanceInfo.InvoiceVal}</span>
                    </div>
                    <div className='search-icon'>
                            <Link to='#'>
                                <BsIcons.BsSearch />
                            </Link>
                        
                    </div>
                </div>
            








                <div className='row-2'>
                    <div className='col-2-2'>
                        <div className='small-box'>
                            <span className='big-text-2'>Total Profit</span>
                            <span className='month'>{FinanceInfo.Month}</span>
                            <span><GoIcons.GoSettings /></span>
                        </div>
                        <div className='big-card'>

                        </div>
                        
                    </div>
                    <div className='col-2-1'>
                        <div className='big-text-2 small-box'>Expenses</div>
                        <div className='small-card'></div>
                    </div>
                    <div className='col-2-1'>
                        <div className='big-text-2 small-box'></div>
                        <div className='small-card'></div>
                    </div>
                    <div className='col-2-1'>
                        <div className='big-text-2 small-box sweep-right'><FiIcons.FiArrowUpRight/></div>
                        <div className='small-card'></div>
                    </div>
                </div>


                <div className='row-2'>
                    <div className='col-3-1'>
                        <div className='small-box'>
                            <div>
                                <span className='big-text-2'>Invoices</span>
                                <span className='bottom-text'>recently created</span>
                            </div>
                            <div className='icons-3'>
                                <GoIcons.GoSettings />
                                <FiIcons.FiArrowUpRight/>
                            </div>
                        </div>
                        <div className='huge-box'>
                            <div className='small-card-2'></div>
                            <div className='small-card-2'></div>
                            <div className='small-card-2'></div>
                        </div>
                    </div>
                    <div className='col-3-2'>
                        <div className='huge-box-2'>
                            <div className='last-card'></div>
                        </div>
                    </div>
                </div>






            </div>
            </IconContext.Provider>    
        </>
    )
}

export default Dashboard
