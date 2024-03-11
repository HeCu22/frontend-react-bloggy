import './Home.css';

import logo from '../../assets/logo-white.png';
import billboard from '../../assets/portret_Jody_Foster.jpg';
import '@fontsource/rock-salt';
import calculateDayYear from "../../helpers/calculateDayYear.js";
import {getAdvice} from "../../services/BloggyService.js";
import {useEffect, useState} from "react";


function Home() {
    const [error, toggleError] = useState(false);

    let dayOfYear = calculateDayYear();
  //  dayOfYear = 22;
    let randomId = null;
    const randomString = "https://api.adviceslip.com/advice";
    let stringG = "https://api.adviceslip.com/advice/" + dayOfYear.toString() + "/img/m";
    const [dayString, setDayString] = useState(stringG);


    useEffect(() => {


        async function fetchAdvice() {
            toggleError(false);

            if (dayOfYear) {

                getAdvice(randomString).then((response) => {

                    let stringG = "https://api.adviceslip.com/advice/" + response.data.slip.id.toString() + "/img/m";
                    setDayString(stringG);

                    getAdvice(dayString).then((responseday) => {
                        console.log(responseday);
                        setDayString(dayString);
                     }).catch(error => {
                        console.log(error);
                        toggleError(true);
                    })


                }).catch(error => {
                    console.error(error);
                    toggleError(true);

                })
            }
        }

        fetchAdvice();


    }, [dayOfYear, randomId]);


    //   const result = await axios.get(`https://api.adviceslip.com/advice/22`);
    return (
        <>
            { error && <> {error} </> }
            <header className="header outer-content-container">
                <div className="inner-content-container">
                    <div className="row">
                        <img src={logo} alt="Company logo"/>  <h1> Bloggy</h1></div>
                </div>
            </header>
            <section className="section-home-branding outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Via Bloggy maken we gebruik van de kracht van woorden*</h1>
                    <div className="outer-side">
                        <figure className="window">
                            <span className="picture">
                                <img src={billboard} alt="Afbeelding van  billboard"/> </span>
                            <figcaption>* En in billboards. Die zijn niet te missen namelijk.</figcaption>

                        </figure>
                        <div className="container-tile">
                            <div className="tile">
                                <iframe className="window2"
                                        src={dayString}
                                    // srcDoc={string}
                                        title="advice of the day rss"

                                ></iframe>

                            </div>
                        </div>

                    </div>
                    <p>We geloven dat iedereen een verhaal te vertellen heeft, avonturen te delen en kennis te
                        verspreiden.
                        Daarom dit platform gecreëerd waar creativiteit, passie en ontdekking samenkomen.</p>
                    <p>Of je nu een doorgewinterde schrijver bent of gewoon je gedachten wilt delen, Bloggy is de
                        plek waar jouw stem wordt gehoord. Duik in een wereld van verhalen, spreuken, citaten, en
                        nog
                        veel
                        meer.</p>
                </div>


            </section>
            {/*</>}*/}
        </>

    );
}

export default Home;