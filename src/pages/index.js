import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ModalImage from "../../docs/components/ModalImage";

const features = [
    {
        title: 'Manage & Prioritize',
        imageUrl: 'img/SME2.webp',
        description: (
            <>
                Story Mapping for Jira was designed from the ground up to be easily installed and
                used to get your team up and running quickly
            </>
        ),
    },
    {
        title: 'Focus on what Matters',
        imageUrl: 'img/SME1.webp',
        description: (
            <>
                Easily manage and plan your next sprint or release right from the story map.
            </>
        ),
    },
    {
        title: 'Fully integrated',
        imageUrl: 'img/SME4.webp',
        description: (
            <>
                Create releases, sprints, add and edit issues - all without leaving the app
            </>
        ),
    },
];

const proFeatures = [
    {
        title: 'Define custom goals',
        imageUrl: 'img/SME5.webp',
        description: (
            <>
                Custom goals allow you to structure your epics with overarching themes
            </>
        ),
    },
    {
        title: 'Use timeframes instead of sprints',
        imageUrl: 'img/SME6.webp',
        description: (
            <>
                Using sprints for story mapping can be very limiting. Plan long term with custom timeframes.
            </>
        ),
    },
    {
        title: 'Estimate tickets from the story map',
        imageUrl: 'img/SME7.webp',
        description: (
            <>
                Plan your next iteration & easily add story points estimates to issues
            </>
        ),
    },
];

function Feature({imageUrl, title, description, setShowImage}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <>
            <div className={clsx('col col--4 text--center', styles.feature)}>
                {imgUrl && (
                    <div className="text--center" style={{cursor:'pointer'}}>
                        <img onClick={() => setShowImage(imgUrl)} className={styles.featureImage} src={imgUrl} alt={title}/>
                    </div>
                )}
            </div>
        </>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const [showImage, setShowImage] = useState();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ transform: 'skewY(-2deg)',marginTop:-50,padding:'5rem 0 4rem 0'}}>
                <div className="container" style={{transform: 'skewY(+2deg)',paddingTop:'2rem'}}>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <img src="/img/SME1.webp" style={{width: '40rem'}} alt="Story Mapping Hero Image"/>

                    <br/>
                    <div style={{margin: 5}}>Available on the</div>
                    <img src="/img/white-marketplace.svg" style={{width: '20rem'}} alt="Atlassian Marketplace Logo"/>
                    <br/><br/>

                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--primary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link> &nbsp;
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={"https://marketplace.atlassian.com/1224357"}>
                            Try free
                        </Link>
                    </div>
                </div>
            </header>
            <main className='frontpage'>
                {showImage && <ModalImage onClose={() => setShowImage(undefined)} src={showImage} />}

                <div style={{margin:'auto',maxWidth:300,textAlign:'center'}}><h2>Free Features</h2>
                <br /></div>


                <div className='heroBox'>
                    <div className='heroBox-text'>
                        <h2>Manage & Prioritize</h2>
                        Story Mapping for Jira was designed from the ground up to be easily installed and used to get your team up and running quickly
                    </div>
                    <img src="/img/Basic.png" style={{width:493,height:'auto',maxHeight:378}} />

                </div>

                <br />

                <div className="heroBox">

                    <div className='heroBox-text'>
                        <h2>Edit on the fly</h2>
                        <ul>
                            <li>Easily assign issues to epics with drag & drop
                            </li>
                            <li>Manage and plan your next sprint or release right from the story map.</li>
                        </ul>
                    </div>
                    <img src="/img/Basic2.png" style={{width:493,height:'auto',maxHeight:378}} />



                </div>

                <br />

                <div className='heroBox'>

                    <div className='heroBox-text'>
                        <h2>Fully integrated</h2>
                        <ul>
                            <li>Create Jira issues directly from the story map</li>
                            <li>Add releases, create and start sprints - all without leaving the app</li>
                        </ul>

                    </div>
                    <img src="/img/AddRelease.png" style={{width:290,height:'auto',maxHeight:306}} />

                </div>

                <br />
                <br />
                <div style={{margin:'auto',maxWidth:300,textAlign:'center'}}><h2>Screenshots</h2></div>



                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature setShowImage={setShowImage} key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <br />

                <div style={{  backgroundColor: '#fff', padding: "5rem 0 5rem 0", transform: 'skewY(+2deg)', marginBottom: -120}}>
                    <div style={{transform: 'skewY(-2deg)'}}>
                    <div style={{margin:'auto',maxWidth:300,textAlign:'center'}}><h2>Get even more with Pro</h2>
                    <br /></div>

                    <div className='heroBox'>

                        <div className='heroBox-text'>
                            <h2>Custom Goals</h2>
                            <ul>
                                <li>Organize your Epics with custom goals</li>
                                <li>Use the goal level to facilitate better understanding among your stakeholders</li>
                            </ul>

                        </div>
                        <img src="/img/GoalEpics.png" style={{maxWidth:493,height:'auto',maxHeight:454}} />

                    </div>
                        <br />

                    <div className='heroBox'>

                        <div className='heroBox-text'>
                            <h2>Issue Estimation</h2>
                            <ul>
                                <li>Estimate issues in your story mapping sessions</li>
                                <li>Discuss issues among the team with the context provided by your story map</li>
                            </ul>

                        </div>
                        <img src="/img/Estimation.png" style={{width:493,height:'auto',maxHeight:378}} />

                    </div>

                    <br />

                    <div className='heroBox'>

                        <div className='heroBox-text'>
                            <h2>Custom Timeframes</h2>
                            <ul>
                                <li>Sometimes releases and sprints are just not enough for planning</li>
                                <li>Add custom timeframes to plan more long term</li>
                                <li>Switch to planning mode to view issues on a time axis</li>
                            </ul>

                        </div>
                        <img src="/img/Timeframes.png" style={{width:490,height:'auto',maxHeight:302}} />

                    </div>


                        <br />
                        <br />
                        <div style={{margin:'auto',maxWidth:300,textAlign:'center'}}><h2>Screenshots</h2></div>


                        {proFeatures && proFeatures.length > 0 && (
                        <section className={styles.features}>
                            <div className="container">
                                <div className="row">
                                    {proFeatures.map((props, idx) => (
                                        <Feature setShowImage={setShowImage} key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                        <div className={styles.buttons}>
                            <Link
                                className={clsx(
                                    'button button--outline button--lg button-light',
                                    styles.getStarted,
                                )}
                                to={useBaseUrl('docs/')}>
                                Documentation
                            </Link> &nbsp;
                            <Link
                                className={clsx(
                                    'button button--outline button--lg button--primary shadow-lg',
                                    styles.getStarted,
                                )}
                                to={"https://marketplace.atlassian.com/1224417"}>
                                Try free
                            </Link>
                        </div>

                    </div>



                </div>

            </main>
        </Layout>
    );
}

export default Home;
