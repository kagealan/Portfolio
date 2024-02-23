import { IonContent, IonPage } from "@ionic/react"


const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <main className='h-full w-full font-[Poppins] overflow-hidden bg-black'>
                    Home
                </main>
            </IonContent>
        </IonPage>
    )
}
export default Home