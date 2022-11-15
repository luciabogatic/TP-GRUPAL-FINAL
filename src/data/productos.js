import { bastoncitos, bulldog, caramelos, cookies, huesitos, patitas, vanilla, flower, carrot } from '../assets'

const snacks = [
    {
        id: 'cookies',
        title: 'COOKIE',
        text:  'Con chips de chocolate',
        img: cookies,
        price: 180,
        amount: 1,
    },
    {
        id: 'bull_dog',
        title: 'BULL DOG',
        text:  'De cerdo y papa',
        img: bulldog,
        price: 200,
        amount: 1,
    },
    {
        id: 'caramelos',
        title: 'CARAMELOS',
        text:  'Con semillas variadas',
        img: caramelos,
        price: 160,
        amount: 1,
    },
    {
        id: 'patitas',
        title: 'PATITAS',
        text:  'Con pollo y crema',
        img: patitas,
        price: 180,
        amount: 1,
    },
    {
        id: 'bastoncitos',
        title: 'BASTONCITOS',
        text:  'De pollo y zanahoria',
        img: bastoncitos,
        price: 210,
        amount: 1,
    },
    {
        id: 'huesitos',
        title: 'HUESITOS',
        text:  'Con carne de cerdo y condimentos',
        img: huesitos,
        price: 200,
        amount: 1,
    }
]

const navButtos =[
    {
        link: 'home',
        text: 'Inicio'
    },
    {
        link: 'nosotras',
        text: 'Sobre Nosotros'
    },
    {
        link: 'productos',
        text: 'Productos'
    },
    {
        link: 'contacto',
        text: 'Contacto'
    },
]


export {
    snacks,
    navButtos,
}