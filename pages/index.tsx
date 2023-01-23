import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button className="btn btn-primary">
        <Link href="/test"> TEST dashboard main</Link>
      </button>
    </>
  )
}

export default Home
