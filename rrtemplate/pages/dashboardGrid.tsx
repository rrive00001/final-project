import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import React, { Component } from "react";
import { Fragment } from 'react'
import PropTypes from 'prop-types';
//import { LockClosedIcon } from '@heroicons/react/20/solid'



const DashboardMain: NextPage = () => {
  return (
    <>
        <div>
            <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
            <div className="tile bg-teal-500 col-span-full">
                <h1 className="tile-marker">ONE</h1>
            </div>
            <div className="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
                <h1 className="tile-marker">TWO</h1>
            </div>
            <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
                <h1 className="tile-marker">THREE</h1>
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
            <div className="tile bg-purple-500">
                <h1 className="tile-marker">EIGHT</h1>
            </div>
            <div className="tile bg-pink-500 row-start-5 md:col-span-full">
                <h1 className="tile-marker">NINE</h1>
            </div>
            </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Welcome</span>
                        </label>
                    </div>
            <div>
                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                    <li>
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Item 2
                        </a>
                    </li>
                    <li>
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Item 1
                        </a>
                    </li>
                    <li>
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Item 3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default DashboardMain
