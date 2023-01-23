import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import React, { Component } from "react";
import { Fragment } from 'react'
import PropTypes from 'prop-types';
//import { LockClosedIcon } from '@heroicons/react/20/solid'



const DoctorList: NextPage = () => {
  return (
    <>
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Navbar</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                        </button>
                    </div>
                   
                </div>
            </div>

            <div className="drawer drawer-mobile bg-info">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="hero min-h-screen bg-info-200">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Selamat Datang Username</h1>
                                <br/>
                                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                    Open drawer side menu
                                </label>
                            </div>
                            
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <div className="card w-84 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src='https://placeimg.com/192/192/people'/>
                                        </div>
                                    </div>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h1 className="card-title">Welcome Username!</h1>
                                </div>
                            </div>
                        </li>
                                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                                    <li className="hover-bordered">
                                        <a>Dashboard</a>
                                    </li>
                                    <li className="hover-bordered">
                                        <a>Appointment</a>
                                    </li>
                                    <li className="hover-bordered">
                                        <a>Payment</a>
                                    </li>
                                    <li className="hover-bordered">
                                        <a>Doctor List</a>
                                    </li>
                                    <li className="hover-bordered">
                                        <a>History</a>
                                    </li>
                                </ul>
                               
                                <div className="card-body items-center text-center">
                                    <button className="btn btn-primary w-32 rounded-full">LOG OUT</button>
                                </div>
                    </ul>
                
                </div>
            </div>                          
        </div>
    </>
  )
}

export default DoctorList
