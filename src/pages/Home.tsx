import { IonContent, IonPage } from "@ionic/react"
import { motion } from "framer-motion"
import favicon from '/favicon.png'
import { useEffect } from "react"

const Home: React.FC = () => {
    
    return (
        <IonPage>
            <IonContent fullscreen>
                <main className='h-full w-full font-[Poppins] overflow-hidden flex justify-center items-start p-5' style={{backgroundImage:'url(/Portfolio/Image/bg5.png)',backgroundSize:'cover'}}>
                    <motion.div animate={{scale:[0.8,1], transition:{ease:'backIn',duration:1,repeat:Infinity,repeatType:'loop'}}} className="w-[5em] aspect-square rounded-full flex items-center justify-center gap-2">
                        <img src={`/Portfolio/favicon.png`} alt='vite logo'></img>
                        <span className="text-sky-800 font-bold">
                        D aona rbab

                        </span>
                    </motion.div>
                </main>
            </IonContent>
        </IonPage>
    )
}
export default Home