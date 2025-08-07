import { Ring} from 'react-css-spinners'

export default function Loading(){
    return <div className="h-screen w-full bg-[#f5f0e8]  flex justify-center items-center">

  <Ring
    color="#B27C3A"
    size={100}
    thickness={7}
  />
</div>
}