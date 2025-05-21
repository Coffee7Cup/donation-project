import React from 'react'
import { motion } from 'framer-motion'
import book from "../img/don/book.png"
import clothing from "../img/don/clothing.png"
import gadgets from "../img/don/gadgets.png"
import salary from "../img/don/salary.png"
import shopingBag from "../img/don/shopping-bag.png"
import sneakers from "../img/don/sneakers.png"

function Donations() {

    const Card = ({ title, description, image, index }) => {
        return (
            <motion.div
                className="bg-white shadow rounded-lg p-4 transition-transform transform hover:scale-105 flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <img src={image} alt={title} className="w-full h-48 object-contain rounded-t-lg" />
                <h2 className="text-xl font-bold mt-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Donate Now
                </button>
            </motion.div>
        );
    }
    
    const donations = [
        {
            title: "Books for Children",
            description: "Donate books to help children learn and grow.",
            image: book
        },
        {
            title: "Clothing Drive",
            description: "Provide warm clothing for those in need.",
            image: clothing
        },
        {
            title: "Gadgets for Education",
            description: "Support students with essential gadgets.",
            image: gadgets
        },
        {
            title: "Support a Family",
            description: "Help families with monthly essentials.",
            image: salary
        },
        {
            title: "Shopping Bags",
            description: "Donate reusable bags to promote sustainability.",
            image: shopingBag
        },
        {
            title: "Sneakers for Kids",
            description: "Give children the gift of comfortable shoes.",
            image: sneakers
        },
        // Add more donation items as needed
    ];

    return (
        <>
            <div className="p-4 md:p-20 mx-10 md:mt-[-200px]">
                <h1 className="text-3xl md:text-6xl font-bold mb-10 text-center">Donations</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {donations.map((donation, index) => (
                        <Card key={index} {...donation} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Donations