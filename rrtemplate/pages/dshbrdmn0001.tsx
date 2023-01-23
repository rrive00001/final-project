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
            <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
            <div className="tile bg-teal-300 col-span-full row-span-1">
                <div className="navbar bg-base-100">
                                    <div className="flex-1">
                                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                                    </div>
                                    <div className="flex-none gap-2">
                                        <div className="form-control">
                                        <input type="text" placeholder="Search" className="input input-bordered" />
                                        </div>
                                        <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><a>Logout</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
            </div>




            <div className="tile bg-gray-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
                <h1 className="tile-marker">TWO</h1>
                <div>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <div className="avatar">
                            <div className="w-24 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>


                        
                    </div>
                            
                        </figure>



                        <div className="card-body items-center text-center">
                            <h1 className="card-title">Welcome Username!</h1>

                                            <div>
                    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                    <li>
                        <a>
                        Dashboard
                        </a>
                    </li>
                   <li>
                        <a>
                            Appointment
                        </a>
                    </li>
                   <li>
                        <a>
                            Payment
                        </a>
                    </li>

                    <li>
                        <a>
                            Daftar Dokter
                        </a>
                    </li>
                    <li>
                        <a>
                            Riwayat
                        </a>
                    </li>
                </ul>

                <br/>
                <div>
                    <button className="btn btn-info w-32 rounded-full">LOG OUT</button>
                </div>

                </div>

                        </div>
                        <br/>
                        
                    </div>



                    <div>


                    </div>
                </div>
                
            </div>
            <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-6">
                <h1 className="tile-marker">THREE</h1>
                <h1>DAFTAR DOKTER TEMP</h1>
            </div>
            <div className="tile bg-lime-600 lg:col-start-4 lg:col-span-2">
                <h1 className="tile-marker">FOUR</h1>
            </div>
            <div className="tile bg-green-600">
                <h1 className="tile-marker">FIVE</h1>
            </div>
            <div className="tile bg-emerald-500">
                <h1 className="tile-marker">SIX</h1>
            </div>
            <div className="tile bg-teal-500">
                <h1 className="tile-marker">SEVEN</h1>
            </div>

            <div className="tile bg-pink-500 row-start-5 md:col-span-full">
                <h1 className="tile-marker">NINE</h1>
            </div>
            </div>
        </div>
                <div>
                <div>
            </div>
        </div>
    </>
  )
}

export default DoctorList
