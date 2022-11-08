import { bastoncitos, bulldog, caramelos, cookies, huesitos, patitas, vanilla, flower, carrot } from '../assets'

const snacks = [
    {
        id: 'cookies',
        title: 'COOKIE',
        text:  'Con chips de chocolate',
        img: cookies,
        precio: 180,
        cantidad: 50,
    },
    {
        id: 'bull_dog',
        title: 'BULL DOG',
        text:  'De cerdo y papa',
        img: bulldog,
        precio: 200,
        cantidad: 40,
    },
    {
        id: 'caramelos',
        title: 'CARAMELOS',
        text:  'Con semillas variadas',
        img: caramelos,
        precio: 160,
        cantidad: 60,
    },
    {
        id: 'patitas',
        title: 'PATITAS',
        text:  'Con pollo y crema',
        img: patitas,
        precio: 180,
        cantidad: 50,
    },
    {
        id: 'bastoncitos',
        title: 'BASTONCITOS',
        text:  'De pollo y zanahoria',
        img: bastoncitos,
        precio: 210,
        cantidad: 80,
    },
    {
        id: 'huesitos',
        title: 'HUESITOS',
        text:  'Con carne de cerdo y condimentos',
        img: huesitos,
        precio: 200,
        cantidad: 65,
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