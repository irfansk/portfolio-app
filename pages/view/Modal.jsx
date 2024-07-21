import React from "react";
import Link from 'next/link'
import { spotlightList } from "@/components/data/constants";

export default function Modal({ setOpenModal }) {

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3">
                            <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                {spotlightList.map(item => {
                                    if(item.title === 'More') {
                                        return (<h3 key={item.title} className="my-2 px-4 text-[15px] text-gray-400">{item.title}</h3>)    
                                    } else {
                                        return (
                                            <Link href={item.url} key={item.title} className="rounded-md transition-all duration-75 hover:bg-green-100" >
                                                <button className="group flex items-center gap-x-5 px-2.5 py-2">
                                                    <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                                        <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                                                            {/* <svg className="mx-auto h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg> */}
                                                        {item.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                                        <p className="text-[15px]">{item.title}</p>
                                                        <span className="text-xs font-light text-gray-400">{item.text}</span>
                                                    </div>
                                                </button>
                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}