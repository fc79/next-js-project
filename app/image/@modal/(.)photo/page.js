import Frame from "../../components/frame";
import Modal from "../../components/modal";
import BearImg from "../../../../public/assests/bear.jpg";
export default function PhotoModal(){
       return(
        <Modal>
            <Frame photo={BearImg} />
        </Modal>
       )
}