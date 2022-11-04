import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  CircleMarker,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { LatLngTuple } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import { GestureHandling } from 'leaflet-gesture-handling'

//import styles from '../../styles/Map.module.scss'
//import styles from '../../styles/Map.module.scss'

const Map = ({ position }: { position: LatLngTuple }) => {
  const GestureHandlingSetter = () => {
    /* eslint-disable */
    const map = useMap() as any
    map.gestureHandling.enable()
    map.addHandler('gestureHandling', GestureHandling)
    //setInit(false)
    /* eslint-enable */
    return null
  }

  return (
    <MapContainer
      className='h-full	w-full'
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <GestureHandlingSetter />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map

/*
  const { MapContainer, Marker, Popup, TileLayer, useMap } = DynamicReactLeaflet
  const [loc, setLoc] = useState([51.505, -0.09])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // this prettier formatting is the worst
      // this is what I want this to look like, saved by comments
      (position) => {
        const { latitude, longitude } = position.coords
        const latLong = [latitude, longitude]
        setLoc(latLong)
        console.log(position)
      }
    ),
      (error: string) => {
        console.error(error)
      }
  }, [])
  return (
    <div>
      <MapContainer>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={loc}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
  */
