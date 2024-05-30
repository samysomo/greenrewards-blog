
export type Comment = {
    id: number,
    date: string,
    content: string,
    autor: string,
    autorProfilePicture: string

}



export type Post = {
    id: number,
    date: string,
    image: string,
    title: string,
    content: string,
    summary: string,
    autor: string,
    comments: Comment[]
}

export const Posts : Post[] = [
    {
        id: 1,
        date: "19/05/2024",
        image: "/images/accionImagen.png",
        title: "Uso de Greenrewards en la facultad de informática de la UAQ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary: "Descubre como la facultado de informática ha implementado GreenRewards en sus instalaciones",
        autor: "Samuel Serrato",
        comments: [
            {
                id: 1,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Persona random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 2,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Persona random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 3,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Persona random",
                autorProfilePicture: "/images/user.png"
            },
        ]

    },
    {
        id: 2,
        date: "19/05/2024",
        image: "/images/accionImagen.png",
        title: "Uso de Greenrewards en la facultad de informática de la UAQ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary: "Descubre como la facultado de informática ha implementado GreenRewards en sus instalaciones",
        autor: "Samuel Serrato",
        comments: [
            {
                id: 1,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 2,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 3,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
        ]

    },
    {
        id: 3,
        date: "19/05/2024",
        image: "/images/accionImagen.png",
        title: "Uso de Greenrewards en la facultad de informática de la UAQ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary: "Descubre como la facultado de informática ha implementado GreenRewards en sus instalaciones",
        autor: "Samuel Serrato",
        comments: [
            {
                id: 1,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 2,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
            {
                id: 3,
                date: "22/05/2024",
                content: "Comentarion de prueba",
                autor: "Un wey random",
                autorProfilePicture: "/images/user.png"
            },
        ]

    },
]