import { IonContent, IonPage } from "@ionic/react"
import { motion } from "framer-motion"


const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <main className='h-full w-full font-[Poppins] overflow-hidden bg-gray-900 flex justify-center items-start p-5'>
                    <motion.div animate={{x:[-100,100],transition:{repeatType:'mirror',repeat:Infinity,type:'ease-in',duration:1}}} className="w-[5em] aspect-square rounded-full flex items-center justify-center">
                        <img src='favicon.png'></img>
                    </motion.div>
                </main>
            </IonContent>
        </IonPage>
    )
}
export default Home