import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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
        Easily manage and plan your next sprint right from the story map.
      </>
    ),
  },
  {
    title: 'Fully integrated',
    imageUrl: 'img/SME4.webp',
    description: (
      <>
        Create releases and sprints without leaving the app
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{fontWeight:400}}>{title}</h3>
      <p className="text--left">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
            <img src="/img/SME1.webp" style={{width:'40rem'}}/>

            <br />
            <div style={{margin:5}}>Available on the</div>
            <img src="/img/white-marketplace.svg" style={{width:'20rem'}}/>
            <br /><br />

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
                    to={useBaseUrl('docs/')}>
                    Try free
                </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
