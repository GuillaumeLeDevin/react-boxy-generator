import ModalBtn from "./Modal/ModalBtn"
import getBoxShadowValue from "../../utils/getBoxShadowValue"
import { useSelector } from "react-redux"

export default function Visualisation() {

    const shadowValues = useSelector(state => state.shadows);
    const boxProperties = useSelector(state => state.boxProperties);
    console.log(getBoxShadowValue(shadowValues));

  return (
    <div className="flex w-full flex-col p-5 justify-center items-center md:w-auto">
        <ModalBtn />
        <div
        className="w-[250px] h-[250px] bg-white rounded-xl mb-20 md:mb-40"
        style={{
            boxShadow: `${getBoxShadowValue(shadowValues).slice(0, -1)}`,
            borderRadius: `${boxProperties[0].value}px`,
            height: `${boxProperties[1].value}px`,
            width: `${boxProperties[2].value}px`,
            backgroundColor: `${boxProperties[3].value}`
        }}
        >

        </div>

    </div>
  )
}