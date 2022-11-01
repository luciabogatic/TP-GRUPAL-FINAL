import { bastoncitos, bulldog, caramelos, cookies, huesitos, patitas } from '../assets'

const productos = [
    {
        id: 'cookies',
        title: 'COOKIE',
        text:  'Con chips de chocolate',
        img: cookies,
    },
    {
        id: 'bull_dog',
        title: 'BULL DOG',
        text:  'De cerdo y papa',
        img: bulldog,
    },
    {
        id: 'caramelos',
        title: 'CARAMELOS',
        text:  'Con semillas variadas',
        img: caramelos,
    },
    {
        id: 'patitas',
        title: 'PATITAS',
        text:  'Con pollo y crema',
        img: patitas,
    },
    {
        id: 'bastoncitos',
        title: 'BASTONCITOS',
        text:  'De pollo y zanahoria',
        img: bastoncitos,
    },
    {
        id: 'huesitos',
        title: 'HUESITOS',
        text:  'Con carne de cerdo y condimentos',
        img: huesitos,
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
    productos,
    navButtos
}