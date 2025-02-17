import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/packshopmain.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/challenges.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/challlenges2.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/ci-cd.jpg';
import Documentimage from '~/assets/documents.jpg';
import tools from '~/assets/toolsused.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/responsibilities.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/responsibilities.jpg';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/agile.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
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
import styles from './maxq.module.css';

const title = 'MaxQ Project Overview';
const description =
  'MaxQ is a comprehensive platform featuring Admin and Public applications, designed to manage categories, companies, SKUs, users, and orders efficiently. The system ensures seamless functionality, user-friendly interfaces, real-time updates, and secure data validation.';
const roles = [
  'Admin & Public App Testing',
  'Category & SKU Management',
  'User & Order Processing',
  'UI/UX & Performance Validation',
  'Security & Data Integrity Checks',
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
              alt="MaxQ platform showcasing Admin and Public applications for efficient category, SKU, user, and order management"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                🔥 Responsibilities & Contributions
              </ProjectSectionHeading>
              <ProjectSectionText>
                As a <strong>QA Lead</strong>, I played a pivotal role in ensuring system
                stability, reliability, and performance through a structured testing
                approach. My key contributions included:
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Manual & Automation Testing:</strong> Designed and executed
                <strong>functional, regression, smoke, and exploratory test cases</strong>
                . Automated web and mobile test cases using{' '}
                <strong>Playwright & Appium</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>API & Performance Testing:</strong> Validated APIs using
                <strong>Postman & Swagger</strong>. Performed{' '}
                <strong>load & stress testing</strong>
                with JMeter & k6.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Cross-Browser & Device Compatibility Testing:</strong> Ensured
                smooth performance across <strong>desktop, tablet, and mobile</strong>{' '}
                devices using BrowserStack. Verified compatibility for{' '}
                <strong>iOS & Android platforms</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>CI/CD Integration & Defect Management:</strong> Integrated
                automated test execution in <strong>CircleCI</strong>. Tracked and managed
                issues in
                <strong>Jira & TestRail</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Performance Monitoring & Issue Resolution:</strong> Used
                <strong>New Relic</strong> to monitor system performance and detect
                bottlenecks. Analyzed logs and real-time metrics to proactively prevent
                performance degradation.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Minor Bug Fixing & Debugging:</strong> Collaborated with
                developers to identify and fix minor <strong>UI/functional bugs</strong>.
                Performed root cause analysis to reduce recurring defects.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Documentation & Release Notes:</strong> Created detailed
                <strong>
                  test reports, user guides, and troubleshooting documentation
                </strong>
                . Drafted and published <strong>release notes for clients</strong>,
                summarizing key updates and fixes.
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
                height={50}
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
                🧪 Testing Approach & Methodology
              </ProjectSectionHeading>

              <ProjectSectionText>
                ✔️ <strong>Functional & Regression Testing</strong> – Ensured seamless
                user interactions and system stability across updates.
              </ProjectSectionText>

              <ProjectSectionText>
                🚀 <strong>Automation-First Strategy</strong> – Focused on scalable test
                automation to minimize manual efforts.
              </ProjectSectionText>

              <ProjectSectionText>
                🛠️ <strong>Shift-Left Testing</strong> – Integrated early-stage testing to
                detect defects before production.
              </ProjectSectionText>

              <ProjectSectionText>
                📊 <strong>Data-Driven Testing</strong> – Validated diverse input
                scenarios to enhance system reliability.
              </ProjectSectionText>

              <ProjectSectionText>
                🌍 <strong>End-to-End Testing</strong> – Covered UI, API, and database
                validation for a complete test coverage strategy.
              </ProjectSectionText>

              <ProjectSectionText>
                ⚙️ <strong>Performance & Load Testing</strong> – Optimized system response
                times and stability under peak loads.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Continuous Testing in CI/CD</strong> – Integrated automated
                test execution in CircleCI for rapid feedback loops.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
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
              <ProjectSectionHeading>🎯 Challenges & Solutions</ProjectSectionHeading>
              <ProjectSectionText>
                🔹 <strong>Flaky Tests & False Positives</strong> – Improved stability by
                optimizing test retries and debugging failures.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 <strong>Long Test Execution Time</strong> – Implemented parallel test
                execution to speed up feedback loops.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 <strong>Inconsistent API Responses</strong> – Integrated contract
                testing with Postman to ensure API consistency.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 <strong>Cross-Platform Compatibility</strong> – Conducted device
                testing across multiple browsers and OS environments.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 <strong>Performance Bottlenecks</strong> – Used load testing tools to
                simulate high-traffic scenarios and optimize performance.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>📊 CI/CD Enhancements</ProjectSectionHeading>

              <ProjectSectionText>
                🔄 <strong>Automated Test Execution</strong> – Integrated test runs in
                every deployment pipeline.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Pre-Release Smoke Tests</strong> – Implemented automated checks
                before pushing updates to production.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Regression Suite in CI/CD</strong> – Ensured consistent test
                coverage for each release cycle.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Real-Time Test Reporting</strong> – Configured reporting
                dashboards for quick issue tracking.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Faster Rollback Strategy</strong> – Automated rollback
                procedures for failed deployments.
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
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                📂 Documentation & Knowledge Sharing
              </ProjectSectionHeading>

              <ProjectSectionText>
                📌 <strong>Test Plan & Strategy</strong> – Defined clear testing
                objectives and execution approaches.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Bug Reports & RCA</strong> – Maintained structured defect
                tracking with root cause analysis.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Automation Framework Documentation</strong> – Provided detailed
                guidelines for maintaining scripts.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Training & Onboarding</strong> – Conducted QA workshops to
                align teams on best practices.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Release Notes</strong> – Summarized key updates, fixes, and
                improvements for stakeholders.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={Documentimage}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>🛠 Tools & Technologies Used</ProjectSectionHeading>

              <ProjectSectionText>
                🧪 <strong>Test Automation</strong> – Playwright, Cypress, Selenium
              </ProjectSectionText>

              <ProjectSectionText>
                🔍 <strong>API Testing</strong> – Postman, Hoppscotch, Thunder Client
              </ProjectSectionText>

              <ProjectSectionText>
                🚀 <strong>CI/CD Integration</strong> – CircleCI, GitHub Actions, Jenkins
              </ProjectSectionText>

              <ProjectSectionText>
                📊 <strong>Monitoring & Logging</strong> – New Relic, Datadog, Kibana
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Version Control</strong> – Git, Bitbucket, GitHub
              </ProjectSectionText>

              <ProjectSectionText>
                📋 <strong>Test Management</strong> – Jira, TestRail, Zephyr
              </ProjectSectionText>

              <ProjectSectionText>
                ⚙️ <strong>Performance & Load Testing</strong> – JMeter, K6, Artillery
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={tools}
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
