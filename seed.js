const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1605637064671-c03a5fae76cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Macbook Pro",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 900000,
        desc:"The new Apple MacBook Pro powered by the new M1 processor by Apple sets an incredible new standard. This applies to both performance and battery life. This machine can easily take on photo and video editing in any of the popular applications like Adobe Lightroom Classi Photoshop Premiere Pro DaVinci Resolve and more. "
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20000,
        desc:"Titan Company Ltd is the world's fifth largest wrist watch manufacturer and India's leading producer of watches. The company is engaged in manufacturing of watches jewelry precision engineering and Eyewear. They produce watches under the brand name Titan Fastrack Sonata Nebula RAGA Regalia Octane & Xylys."
    },
    {
        name: "HP Laptop",
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graphics 620." 
    },
    {
        name: "Rolex",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"Wearing a Rolex watch enables entry into a world of unlimited possibilities. Rolex story began when founder Hans Wilsdorf created the first waterproof wristwatch  the Oyster  and developed into a range of timepieces that have become icons of watchmaking. " 
    },
    {
        name: "BoAt Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"boAt Bass Heads 225 polished metal earphones are designed to give you an experience that no other brand can match. It has an incredible sonic clarity with  With tangle-free flat cables"
    },
    {
        name: "Drone",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"Drones are commonly referred to as Unmanned Aerial Vehicles whereas the entire system that allows a drone to function is a UAS The UAV is the heart of the UAS and possesses fixed wings or either a single or multi-rotary build for flight. "
    }

];

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
