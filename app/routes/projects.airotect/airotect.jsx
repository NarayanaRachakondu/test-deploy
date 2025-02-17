import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/airotect.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/bg-blog-header.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/testplanning.mp4';
import sliceIrlPlaceholder from '~/assets/automation7.jpg';
import sliceIrl from '~/assets/automation7.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/PMP-API.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/PMP-API.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './airotect.module.css';

const title = 'Airotect Mobile App';
const description =
  'Airotect is a mobile application designed to enable seamless offline and online data management for field users, with features such as SQLite integration, QR code scanning, error tracking, and bulk data processing.';
const roles = [
  'Mobile App Development',
  'Offline Data Management',
  'User Authentication',
  'QR Code Integration',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Airotect mobile application showcasing online and offline data management"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Responsibilities & Contributions
              </ProjectSectionHeading>
              <ProjectSectionText>
                ✅ <strong>Manual & Automation Testing</strong>
                <br />- Created and executed{' '}
                <strong>functional, regression, smoke, and exploratory test cases</strong>
                .<br />- Automated test scenarios for <strong>
                  web & mobile apps
                </strong>{' '}
                using <strong>Playwright & Appium</strong>.<br />
                <br />✅ <strong>API & Performance Testing</strong>
                <br />- Validated REST APIs using <strong>Postman & Swagger</strong>.
                <br />- Conducted <strong>load & stress testing</strong> with{' '}
                <strong>JMeter & k6</strong> to ensure system stability.
                <br />
                <br />✅ <strong>Offline-First & Sync Validation</strong>
                <br />- Ensured <strong>seamless offline-to-online data syncing</strong>.
                <br />
                - Tested local storage, background sync, and retry mechanisms.
                <br />
                <br />✅ <strong>Cross-Device & Compatibility Testing</strong>
                <br />- Verified app performance across{' '}
                <strong>iOS, Android, and Web</strong>.<br />- Used{' '}
                <strong>BrowserStack</strong> to ensure{' '}
                <strong>cross-browser compatibility</strong>.<br />
                <br />✅ <strong>CI/CD Integration & Defect Management</strong>
                <br />- Integrated automated tests into <strong>CircleCI</strong> for
                continuous testing.
                <br />- Tracked, reported, and managed defects in{' '}
                <strong>Jira, Trello & Notion</strong>.<br />
              </ProjectSectionText>
            </div>

            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                The Challenge: Ensuring a Reliable, Offline-First Data Collection Platform
              </ProjectSectionHeading>
              <ProjectSectionText>
                In <strong>Airotect</strong>, set out to develop a{' '}
                <strong>scalable field data collection platform</strong> that functions
                seamlessly in remote locations with{' '}
                <strong>limited or no internet access</strong>. As the{' '}
                <strong>QA Lead</strong>, I played a critical role in ensuring the
                platform's <strong>stability, data accuracy, and synchronization</strong>.
                I led testing efforts to tackle key challenges such as:
                <br />
                <br />
                🔴 <strong>Real-time & Offline Data Synchronization:</strong> Ensuring
                smooth transitions between offline and online modes.
                <br />
                🔴 <strong>QR Code-Based User Authentication:</strong> Enabling seamless
                user verification in the field.
                <br />
                🔴 <strong>Batch Processing & Bulk Data Submission:</strong> Validating
                large-scale data uploads.
                <br />
                🔴 <strong>Cross-Device & OS Compatibility:</strong> Ensuring flawless
                functionality across web, iOS, and Android.
                <br />
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Solutions & Approach</ProjectSectionHeading>
              <ProjectSectionText>
                ✅ <strong>Implemented Robust Offline Data Sync Mechanisms:</strong>
                <br />
                - Developed and executed test cases to validate offline data storage &
                auto-syncing.
                <br />- Simulated real-world field conditions to ensure{' '}
                <strong>seamless data recovery</strong>.<br />
                <br />✅ <strong>Optimized QR Code Scanning & Authentication:</strong>
                <br />
                - Ensured high accuracy in user validation under varying lighting &
                connectivity conditions.
                <br />
                - Automated test cases to validate QR-based login and batch registration.
                <br />
                <br />✅{' '}
                <strong>Enhanced System Performance & Bulk Data Handling:</strong>
                <br />- Conducted <strong>load & stress testing</strong> to optimize batch
                data submissions.
                <br />
                - Validated backend processing to handle simultaneous requests from
                multiple users.
                <br />
                <br />✅ <strong>Ensured Seamless Multi-Platform Functionality:</strong>
                <br />- Conducted extensive{' '}
                <strong>cross-browser and device testing</strong> using BrowserStack.
                <br />
                - Verified UI & functionality across various screen resolutions.
                <br />
                <br />
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              raised
              className={styles.video}
              srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={videoSprMotionPlaceholder}
              alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Key Achievements & Impact</ProjectSectionHeading>
              <ProjectSectionText>
                🚀 <strong>Achieved 99.8% Data Synchronization Accuracy:</strong>{' '}
                Implemented an error-free offline-to-online data sync mechanism.
                <br />
                🚀 <strong>Reduced Test Execution Time by 40%:</strong> Automated critical
                workflows, cutting down regression testing time.
                <br />
                🚀{' '}
                <strong>
                  Enabled 1000+ Concurrent Users Without Performance Drop:
                </strong>{' '}
                Optimized database queries and API load handling.
                <br />
                🚀 <strong>Strengthened Security & Compliance:</strong> Ensured 100%
                secure QR-based authentication for seamless user access.
                <br />
                🚀 <strong>Reduced Production Defect Rate by 50%:</strong> Enhanced test
                coverage, catching bugs before deployment.
                <br />
                🚀 <strong>Multi-Platform Stability:</strong> Delivered a flawless user
                experience across web, iOS, and Android.
                <br />
                🚀 <strong>Streamlined CI/CD Pipeline:</strong> Reduced
                staging-to-production deployment time by 35%.
                <br />
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tools & Technologies Used</ProjectSectionHeading>
              <ProjectSectionText>
                🛠 <strong>Test Automation:</strong> Playwright, Nightwatch.js
                <br />
                🛠 <strong>API Testing & Validation:</strong> Postman, Swagger
                <br />
                🛠 <strong>Performance & Load Testing:</strong> JMeter, k6
                <br />
                🛠 <strong>Cross-Platform Testing:</strong> BrowserStack, Real Device Cloud
                <br />
                🛠 <strong>Continuous Integration:</strong> CircleCI, GitHub Actions
                <br />
                🛠 <strong>Defect Tracking & Management:</strong> Jira, Pmp, Trello, Notion
                <br />
                🛠 <strong>Network & Security Testing:</strong> Charles Proxy, Wireshark
                <br />
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
