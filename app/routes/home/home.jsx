import gamestackTexture2Large from '~/assets/europoer1.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/europoer1.png';
import gamestackTextureLarge from '~/assets/europoer2.png';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/europoer2.png';
import sliceTextureLarge from '~/assets/Shopping.png';
import pmp from '~/assets/PMP-mainpage1.jpg';
import sliceTexturePlaceholder from '~/assets/Shopping.png';
import sliceTexture from '~/assets/Shopping.png';
import sprTextureLarge from '~/assets/clynic.png';

import airotect from '~/assets/airo1.png';
import airotectLarge from '~/assets/airo2.png';

import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/clynic.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'QA Engineer + Automation & DevOps',
    description: `QA portfolio of ${config.name} — Expertise in test automation, API testing, and CI/CD pipelines using Playwright, Postman, and CircleCI.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Clynic App"
        description="A cutting-edge telemedicine platform ensuring seamless virtual consultations, real-time health monitoring, and secure medical record management. Led a comprehensive QA strategy covering manual, automation, and performance testing. Expertise in API testing with Postman, Playwright automation, CI/CD pipeline integration with CircleCI, and real-time monitoring with New Relic."
        buttonText="View Project"
        buttonLink="/projects/clynic"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Europower App"
        description="A feature-rich eCommerce web application offering a seamless shopping experience, similar to Amazon, with a vast product catalog and secure transactions."
        buttonText="View Website"
        buttonLink="https://www.europowerbv.nl/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Packshop Admin/Public App"
        description="A robust platform for managing user roles, orders, and SKU operations with high efficiency. Led end-to-end testing covering functional, regression, and performance testing. Implemented API validation, Playwright automation, and CI/CD integration to ensure a seamless and scalable experience."
        buttonText="View Project"
        buttonLink="/projects/maxq"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Airotect Web/Mobile App"
        description="Comprehensive QA strategy ensuring seamless offline/online data synchronization. Conducted database integrity tests, functional and regression testing, and implemented Playwright automation for enhanced reliability and performance."
        buttonText="View Project"
        buttonLink="/projects/airotect"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${airotect} 400w, ${airotect} 800w`,
              placeholder: sliceTexturePlaceholder,
            },
            {
              srcSet: `${airotectLarge} 400w, ${airotectLarge} 800w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="PMP"
        description="Optimizing issue tracking and test case management for PMP—an advanced QA collaboration platform enabling seamless defect reporting, real-time insights, and workflow efficiency."
        buttonText="View Project"
        buttonLink="/projects/pmp"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${pmp} 800w, ${pmp} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Footer />
    </div>
  );
};
