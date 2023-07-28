import "../styles/template2.scss";
import Avatar from "../assets/headshot.jpg";

function Template2(){
    return(
        <div className="template2">
            <h2 id="name">Victor Xie</h2>
            <h5 id="title">Musician & Pianist</h5>
            <div className="content-container2">
                <img className="avatar" alt="portrait" src={Avatar}/>
                
                <div className="bio">
                    <h5 className="bio-head">About Me</h5>
                    <article className="bio-text">
                        <p><span className="tab"/>
                        Victor is a composer-pianist who interlaces his compositions and recorded improvisations in an ongoing 
                        project titled The Phoenix. His musical performance ranges from Baroque to Contemporary to the Jazz tradition, 
                        and his compositions reflect this breadth of history backed by a rigorous classical training. 
                        His own works also feature a particular fascination with abstract ancient imagery, representations of birdsong, 
                        and ancient Greek and Asian philosophy. 

                        </p>
                        <p><span className="tab"/>Before beginning his studies in composition, 
                        he proved himself a capable classical pianist in a myriad of competitions. In 2014, he won 1st 
                        place in both the ECYS and CYS concerto competitions, along with 1st at the 32nd Annual San Francisco 
                        Young Pianists Competition. He performed Saint-Saëns Concerto no.2 with the Mercury Orchestra at Sanders
                         Theatre, Harvard, as winner of the Foundation for Chinese Performing Arts Concerto Competition in 2015.
                          In the Spring of 2020, he was a laureate in the National Chopin Competition of the United States.
                           The following Spring of 2021, Victor won Piano Honors at New England Conservatory with his own transcriptions 
                           of the Star-Spangled Banner and a Christmas carol.

                        </p>
                        <p><span className="tab"/>Victor has a strong interest in Guqin and Chinese calligraphy and has been 
                        studying these ancient disciplines for over three years. He also has 6+ years of violin-playing experience, 
                        playing in pre-collegiate orchestras that toured Spain and Ukraine. During his free time, he enjoys studying 
                        languages, playing Zelda, and befriending stray cats. 
                        </p>
                        <p><span className="tab"/>Victor Xie is from Palo Alto, California, and completed his BM in piano performance 
                        with Prof. Alexander Korsantia and Mr. Victor Rosenbaum at the New England Conservatory of Music. He studied 
                        Composition briefly with Prof. Alla Cohen and John Heiss in 2020. He recently graduated in 2023 with a MM in
                         Composition under the instruction of Prof. Huang Ruo and Prof. Lowell Liebermann at Mannes School of Music. 
                        </p>
                    </article>
                </div>
            </div>
            <div className="background-wrap">
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x4">
                    <div className="cloud"/>
                </div>
                <div className="x5">
                    <div className="cloud"/>
                </div>
                <div className="x1">
                    <div className="cloud"/>
                </div>
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x3">
                    <div className="cloud"/>
                </div>
                <div className="x4">
                    <div className="cloud"/>
                </div>
                <div className="x1">
                    <div className="cloud"/>
                </div>
                <div className="x5">
                    <div className="cloud"/>
                </div>
                <div className="x2">
                    <div className="cloud"/>
                </div>
                <div className="x3">
                    <div className="cloud"/>
                </div>
            </div>
        </div>
    )
}
export default Template2;
