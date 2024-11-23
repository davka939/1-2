import React from "react"
import images from '../Components/ImageClass'


const CardBranch = ()=>{
    const Cards = [
        {
            Image: images.tuvsalbar,
            Name:"Төв Салбар",
            Address:"3,4-р хороолол Өргөө 1,5 кино театрын зүүн талд",
            Phone:"88089281",
            workingHours:"08:00-22:00"
        },
        {
            Image:images.emart,
            Name:"И Март Салбар",
            Address:"10-р хороолол Имарт 1 давхарт",
            Phone:"88082047",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.zaisan,
            Name:"Зайсан Салбар",
            Address:"Зайсанд байрлах ХААИС, замынхаа урд талд Гэрэлт хотхон",
            Phone:"88084229",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.unur,
            Name:"Өнөр Салбар",
            Address:"Цамбагарав СХД Эрүүл мэндийн төв 9-р байрны арын өргөтгөлд",
            Phone:"8081407",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.sumber,
            Name:"Сүмбэр-Орд Салбар",
            Address:"Баянмонгол хорооллын зүүн талд",
            Phone:"88080032",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.house,
            Name:"Хаус Салбар",
            Address:"ЧД 23-р сургуулийн зүүн талд",
            Phone:"88081839",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.foodcity,
            Name:"Фүүд Сити Салбар",
            Address:"ХУД 4-р хороо наадамчдын гудамж Food City худалдааны төв",
            Phone:"70045555",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.efes,
            Name:"Эфэс Салбар",
            Address:"Бөхийн өргөөний чанх урд Эфэс-13 супермаркет дотор",
            Phone:"80082647",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.moriton,
            Name:"Морьтон Салбар",
            Address:"ХУД 11-р хороо Зайсангийн тойруу 309 Moriton Residence",
            Phone:"88089281",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.cinema,
            Name:"Синема Некст Салбар",
            Address:"БЗД 16-р хороо, Улаанхуарангийн эцэст",
            Phone:"80084013",
            workingHours:"08:30-21:00"
        },
        {
            Image:images.sodon,
            Name:"Содон Салбар",
            Address:"21-р хороолол Содон хороолол",
            Phone:"80088179",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.start,
            Name:"Старс Салбар",
            Address:"ТБД андууд Старс центрийн 1 давхарт",
            Phone:"80084982",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.bumbugur,
            Name:"Бөмбөгөр Салбар",
            Address:"Алтжин Бөмбөгөрийн зүүн талд",
            Phone:"88083118",
            workingHours:"08:00-22:00"
        },
        {
            Image:images.arvaiheer,
            Name:"Арвайхээр Салбар",
            Address:"Сансар худалдааны төвийн 1 давхарт",
            Phone:"80087033",
            workingHours:"08:30-21:00"
        },
        {
            Image:images.sansar,
            Name:"Сансар Салбар",
            Address:"Сансарын тунелийн явган хүний нүхэн гарцын зүүн талд",
            Phone:"80081519",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.parkod,
            Name:"Парк Од Салбар",
            Address:"Парк Од Малл худалдааны төвийн 1 давхарт",
            Phone:"80082033",
            workingHours:"08:00-21:00"
        },
        {
            Image:images.erdenet,
            Name:"Эрдэнэт Салбар",
            Address:"Орхон аймаг, ДГТ-3",
            Phone:"80089106",
            workingHours:"08:00-20:00"
        },
        {
            Image:images.darhan,
            Name:"Дархан-Уул Салбар",
            Address:"Дархан уул аймаг 12-р баг, 7-р хороо",
            Phone:"88089281",
            workingHours:"08:00-20:00"
        }
    ]


    const BranchCard = ({ image, name, address, phone, workingHours }) => {
        return (
            <div className="branch-item-branch">
                <img src={image} alt={name} />
                <div className="name-container"><h5>{name}</h5></div>
                <p>Хаяг:{address}</p>
                <p>Утас:{phone}</p>
                <p>Даваа-Ням:{workingHours}</p>
            </div>
        )
    }

    return (
        <div className="branch-container-branch">
            {Cards.map((cardData) => (
                <BranchCard
                    image={cardData.Image}
                    name={cardData.Name}
                    address={cardData.Address}
                    phone={cardData.Phone}
                    workingHours={cardData.workingHours}
                />
            ))}
        </div>
    )
    
}

export default CardBranch