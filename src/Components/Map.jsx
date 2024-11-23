import { popup,Icon } from "leaflet";
import "leaflet/dist/leaflet.css"
import React from "react"
import {MapContainer, TileLayer,Marker,Popup} from "react-leaflet"

const MapComponent = ()=>{
    const  markers =[
        {
            geocode:[47.923362048190526, 106.87557577174712],
            popUp:"Төв салбар"
        },
        {
            geocode:[47.91974325935393, 106.9106138983061],
            popUp:"Хаус салбар"
        },
        {
            geocode:[47.924057171664366, 106.93361652179536],
            popUp:"E-mart Сансар салбар"
        },
        {
            geocode:[47.91738483520675, 106.93567645822723],
            popUp:"Efes салбар"
        }
    ];

    const customIcon = new Icon({
        iconUrl:"https://cdn.pixabay.com/photo/2013/07/13/11/54/location-158934_1280.png",
        iconSize:[26,38]
    })
    return(        
        <MapContainer center={[47.9198, 106.9173]} zoom={14}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(marker=>(
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))
            }
        </MapContainer>
    )
}

export default MapComponent;