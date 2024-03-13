import { IonContent, IonPage } from "@ionic/react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import favicon from '/favicon.png'
import { useEffect, useRef, useState } from "react"

const Home: React.FC = () => {
 

    const ImageGen = () => {
        const [img,setImg] = useState(0)
        const [isGenerated,setIsGenerated] = useState(false)
        const [generatedImage,setGeneratedImage] = useState<{photo:string,altText:string}|null>(null)
        const [prompt,setPrompt] = useState('')
        const generateImage = async (prompt:string,setPrompt:React.Dispatch<React.SetStateAction<string>>) => {
            if(prompt){
                try{
                    setIsGenerated(true)
                    const response = await fetch(
                        'http://localhost:8080/api',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type' : 'application/json',
                            },
                            body: JSON.stringify({prompt})
                        }
                    )
                    const data = await response.json()
                    setGeneratedImage({
                        photo: `data:image/jpeg;base64,${data.photo}`,
                        altText:prompt
                    })
                }catch (err) {
                    alert(err)
                } finally {
                    setPrompt('')
                    setIsGenerated(false)
                }
            }else {
                alert('Please provide proper prompt')
            }
        }
        return(
            <span className="flex flex-col gap-2">
            <textarea onChange={e => setPrompt(e.target.value)} className="w-full p-1 focus:bg-slate-800 transition outline-none" placeholder="Entrer votre prompt ici..."></textarea>
            <span className="aspect-square rounded h-[482px] bg-sky-900/25 flex justify-center items-center">
                <AnimatePresence>
                    { generatedImage ? <motion.span className="w-full h-full flex">
                        <img src={generatedImage.photo} alt={generatedImage.altText}></img>
                        </motion.span> : isGenerated ? <span className='p-2 bg-gray-900/75 rounded'>Generation Image en cours...</span>:
                            <span className="p-5 bg-gray-900/50 rounded ">Generer votre Image</span>
                    }
                    
                </AnimatePresence>
            </span>
            <button className="p-2 bg-sky-700 rounded" onClick={()=> generateImage(prompt,setPrompt)}>Generate Image</button>
            {/* <button className="p-2 bg-sky-700 rounded" onClick={()=> setGeneratedImage({photo:'Image/bgI0.jpg',altText:'df'})}>Generate Image</button> */}

        </span>
        )
    }
    const scrollF = (n:number) => {
        useScroll()
    }
    const Page1 = () => {
        return(
            <section id='page1' className="w-full h-[100vh] bg-sky-600 flex items-start justify-center p-5">
                <button className="bg-pink-600 p-2 rounded outline-none" onClick={()=> scrollF(1)}>Scroll to Page 2</button>
            </section>
        )
    }
    const Page2 = () => {
        return(
            <section id='page2' className="w-full h-[100vh] bg-pink-600 flex items-start justify-center p-5">
                <button className="bg-sky-600 p-2 rounded outline-none" onClick={()=> scrollF(2)}>Scroll to Page 1</button>
            </section>
        )
    }
    const LandingPage = () => {
        const Header = () => {
            const tab = ['Home','Portfolio','Blog','Contact']
            return(
                <header className="h-[7em] max-w-[1280px] z-20 w-full flex justify-around">
                    <span className="flex items-center gap-2">
                        <span className="relative flex items-center">
                        <img width='25em' src='/Portfolio/Image/Logo.png'></img>
                        <span className="w-2 aspect-square bg-[#148698] rotate-45 absolute right-[-1em] bottom-[1px]"></span>
                        </span>
                    </span>
                    <span className="flex gap-2 items-center">
                        {tab.map((p,i)=><span key={i} className="relative transition before:absolute before:w-0 hover:before:w-[80%] before:transition-all hover:text-gray-400 before:bottom-0 before:h-[2px] before:bg-sky-700 cursor-pointer w-[6em] py-2 text-center">
                            {p}
                        </span>)}
                        <hr className="h-[1.5em] border-l border-gray-500"/>
                        <span className='pl-2 flex cursor-pointer fill-slate-400 hover:fill-sky-600 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
                                <path d="M16 4C9.3844276 4 4 9.3844276 4 16C4 22.615572 9.3844276 28 16 28C22.615572 28 28 22.615572 28 16C28 9.3844276 22.615572 4 16 4 z M 16 6C21.534692 6 26 10.465308 26 16C26 21.027386 22.311682 25.161277 17.488281 25.878906L17.488281 18.916016L20.335938 18.916016L20.783203 16.023438L17.488281 16.023438L17.488281 14.443359C17.488281 13.242359 17.882859 12.175781 19.005859 12.175781L20.810547 12.175781L20.810547 9.6523438C20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625C15.906688 9.515625 14.355469 10.913609 14.355469 14.099609L14.355469 16.023438L11.632812 16.023438L11.632812 18.916016L14.355469 18.916016L14.355469 25.853516C9.6088556 25.070647 6 20.973047 6 16C6 10.465308 10.465308 6 16 6 z" />
                            </svg>
                        </span>
                        <span className="flex cursor-pointer  fill-slate-400 hover:fill-sky-600 transition">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
                                <path d="M24.503906 7.503906C22.246094 5.246094 19.246094 4 16.050781 4C9.464844 4 4.101563 9.359375 4.101563 15.945313C4.097656 18.050781 4.648438 20.105469 5.695313 21.917969L4 28.109375L10.335938 26.445313C12.078125 27.398438 14.046875 27.898438 16.046875 27.902344L16.050781 27.902344C22.636719 27.902344 27.996094 22.542969 28 15.953125C28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813L16.046875 25.882813C14.265625 25.882813 12.515625 25.402344 10.992188 24.5L10.628906 24.285156L6.867188 25.269531L7.871094 21.605469L7.636719 21.230469C6.640625 19.648438 6.117188 17.820313 6.117188 15.945313C6.117188 10.472656 10.574219 6.019531 16.054688 6.019531C18.707031 6.019531 21.199219 7.054688 23.074219 8.929688C24.949219 10.808594 25.980469 13.300781 25.980469 15.953125C25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313C21.199219 18.296875 19.730469 17.574219 19.457031 17.476563C19.183594 17.375 18.984375 17.328125 18.785156 17.625C18.585938 17.925781 18.015625 18.597656 17.839844 18.796875C17.667969 18.992188 17.492188 19.019531 17.195313 18.871094C16.894531 18.722656 15.933594 18.40625 14.792969 17.386719C13.90625 16.597656 13.304688 15.617188 13.132813 15.320313C12.957031 15.019531 13.113281 14.859375 13.261719 14.710938C13.398438 14.578125 13.5625 14.363281 13.710938 14.1875C13.859375 14.015625 13.910156 13.890625 14.011719 13.691406C14.109375 13.492188 14.058594 13.316406 13.984375 13.167969C13.910156 13.019531 13.3125 11.546875 13.0625 10.949219C12.820313 10.367188 12.574219 10.449219 12.390625 10.4375C12.21875 10.429688 12.019531 10.429688 11.820313 10.429688C11.621094 10.429688 11.296875 10.503906 11.023438 10.804688C10.75 11.101563 9.980469 11.824219 9.980469 13.292969C9.980469 14.761719 11.050781 16.183594 11.199219 16.382813C11.347656 16.578125 13.304688 19.59375 16.300781 20.886719C17.011719 21.195313 17.566406 21.378906 18 21.515625C18.714844 21.742188 19.367188 21.710938 19.882813 21.636719C20.457031 21.550781 21.648438 20.914063 21.898438 20.214844C22.144531 19.519531 22.144531 18.921875 22.070313 18.796875C21.996094 18.671875 21.796875 18.597656 21.496094 18.445313Z" />
                            </svg>
                        </span>
                    </span>
                </header>
            )
        }
        const Section = () => {
            return(
                <section className="flex-1 w-full flex px-2 z-10 items-center">
                    <span className="flex-1 flex flex-col justify-start items-center">
                        <span className=' flex justify-center w-full items-center h-full '>
                            <span className="flex gap-5 flex-col items-start justify-around">
                                <span className="flex flex-col font-bold text-3xl">
                                    <label>Alain</label>
                                    <label className="flex items-center relative">Ralantoaritsimba<span className="absolute right-[-15px] rotate-45 bottom-[13px] bg-sky-700 w-2 aspect-square"></span></label>
                                </span>
                                <hr className="w-[15%] relative bottom-[-15px] border-2 border-sky-700"/>
                                <span className="flex flex-col text-sm gap-1">
                                    <span className="flex items-center gap-2">
                                        <label>Instagram</label>
                                        <hr className="h-3 border-l"/>
                                        <label>LinkedIn</label>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <label>Behance</label>
                                        <hr className="h-3 border-l"/>
                                        <label>Dribble</label>
                                    </span>
                                </span>
                                <span className="border-2 py-2 px-3 hover:border-sky-600 hover:text-sky-600 cursor-pointer border-sky-700 text-sky-700 font-bold">CONTACT ME</span>
                            </span>

                        </span>
                       
                        
                    </span>
                    <span className="flex-1 h-full flex items-center justify-center">
                        <span className="relative w-[80%] aspect-square overflow-hidden opacity-60 border-2 border-gray-500 rounded-full flex items-center justify-center">
                            <img className='w-[85%] absolute bottom-0' src='/Portfolio/Image/qwer.png'></img>
                        </span>
                    </span>
                    <span className="flex-1 h-full flex-col flex justify-evenly items-center">
                        <span className="w-full flex gap-4 justify-center">
                            <span className="gap-4 flex flex-col">
                                <span className="flex flex-col text-2xl font-bold">
                                    <label className="mb-3 text-sm text-sky-700 font-bold">INTRODUCTION</label>
                                    <label>UI/UX Designer,</label>
                                    <label>Full Stack Web</label>
                                    <label>Developer</label>
                                </span>
                                <span>Lorem ipsum</span>
                                <span className="text-sky-700 cursor-pointer">Learn more |</span>

                            </span>
                        </span>
                       
                    </span>

                </section>
            )
        }
        const Absolute = () => {
            return(
                <span className="z-0 w-full h-full absolute overflow-hidden">
                    <span className="absolute w-[40em] aspect-square border border-sky-700 rotate-45 right-0"></span>
                    <span className="absolute w-[30em] aspect-square rounded-full left-[-5em] border-4 border-sky-700 bottom-[-10em]"></span>
                    <span className="absolute w-[10em] aspect-square rounded-full top-5 left-[10em] border-sky-700 border-2"></span>
                    <motion.span animate={{rotate:[0,90],transition:{delay:1,repeatType:'loop',repeatDelay:.8,repeat:Infinity}}} className="absolute w-[5em] aspect-square border-2 border-sky-700 bottom-[15%] right-[40%]"></motion.span>
                </span> 
            )
        }
        return(
            <section className="min-w-[720px] w-[90%] md:w-[70%] aspect-video flex flex-col items-center bg-gray-900 rounded-2xl shadow-[15px_15px_5px_1px] shadow-gray-900/50">
                <Header/>
                <Section/>
                {/* <Absolute/> */}
            </section>
        )
    }


    return (

        <IonPage>
            <IonContent fullscreen>
                <main className='select-none bg-gradient-to-br from-orange-400 to-pink-900 w-full h-full font-[Poppins] flex justify-center items-center text-gray-300'>
                    <LandingPage/>
                </main>
            </IonContent>
        </IonPage>
    )
}
export default Home