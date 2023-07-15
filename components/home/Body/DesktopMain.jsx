import { useIsMounted } from "./hooks/useIsMounted.js";
import styles from "./body.module.css";
import SubscribeForm from "./SubscribeForm";


const DesktopMain = () => {
    // Check if the component is mounted to avoid React state update on unmounted component
    const mounted = useIsMounted();

    // Sets the image height as the available screen height of the body (preventing scroll)
    // Just updates when the page reloads
    const calculateImageSize = () => {
        const navbarHeight = 110;
        const windowHeight = window.innerHeight;
        const availableHeight = windowHeight - navbarHeight;
    
        const imageHeight = availableHeight;

        console.log(imageHeight);
    
        return {
          height: imageHeight,
        };
    };

    const imageStyle = mounted ? calculateImageSize() : {};


    return ( 
            <main className={styles.desktopBody}>
                    {mounted && (
                        <div className={styles.columns}>
                            <div className={styles.description}>
                                <div className={styles.logoBody}>
                                    <img src="/logo.png" alt="Metacare Logo" width={200} height={200}/>
                                </div>
                                <h2 style={{ color: "#091562" }}>
                                    Your Personal Pathway To <br></br>Your Healthier Future.
                                </h2>

                                <h5 style={{ color: "#091562" }}>
                                    Unleash the power of your personal Data Digital Twin.
                                </h5>

                                <h5 className={styles.description2}>
                                Join our waitlist and be the first to experience a new era of healthcare
                                </h5>

                                <SubscribeForm />
                                
                            </div>
                            
                            <div className={styles.imgWrapper}>
                                <img
                                className={styles.img}
                                    src={"bgimg.png"}
                                    height={imageStyle.height}
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </main>
     );
}
 
export default DesktopMain;