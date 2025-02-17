import sliceAnnotationLarge from '~/assets/issues-tracking.jpg';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/issues-tracking.jpg';
import sliceAppLarge from '~/assets/whiteboard-with-planning-method_23-2148513838.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/PMP-mainpage1.jpg';
import sliceBackgroundBarLarge from '~/assets/error-with-people-holding-numbers-concept-illustration_jpg.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/error-with-people-holding-numbers-concept-illustration_jpg.jpg';
import sliceBackgroundLarge from '~/assets/3d-office-objects-background_1284-24617.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/bug.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import cicdpipeline from '~/assets/cicdpipeline.jpg';
import documents from '~/assets/document-knowledge.jpg';
import tools from '~/assets/toolspmp.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/Issues-tracling.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/Issues-tracling.jpg';
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
import styles from './pmp.module.css';

const title = 'PMP - Advanced Issue & Test Management';
const description =
  'PMP is a powerful issue tracking and test management platform, offering a Jira-like experience with enhanced UI customization and user-focused features. It enables seamless bug reporting, test case management, and workflow automation while introducing exclusive features not available in Jira.';
const roles = [
  'Defect Tracking & Test Case Management',
  'Workflow & Customization Enhancements',
  'User Experience & Performance Optimization',
  'Security & Access Control Validation',
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
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1120w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="PMP platform showcasing advanced issue tracking, test management, and customizable workflow automation for seamless bug reporting and test execution"
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
                As a <strong>QA Lead</strong>, I was responsible for ensuring the{' '}
                <strong>stability</strong>, <strong>reliability</strong>, and{' '}
                <strong>performance</strong> of the system by following a structured and
                thorough testing approach. My major contributions included:
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Manual & Automation Testing</strong>: Designed and executed{' '}
                <strong>functional</strong>, <strong>regression</strong>,{' '}
                <strong>smoke</strong>, and <strong>exploratory test cases</strong>.
                Automated web and mobile test cases using{' '}
                <strong>Playwright, Cypress, Selenium</strong> &{' '}
                <strong> Nightwatch.js</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>API & Performance Testing</strong>: Validated APIs using{' '}
                <strong>Postman</strong> & <strong>Swagger</strong>. Performed{' '}
                <strong>load & stress testing</strong> with <strong>JMeter</strong> &{' '}
                <strong>k6</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Cross-Browser & Device Compatibility Testing</strong>: Ensured
                smooth performance across <strong>desktop</strong>,{' '}
                <strong>tablet</strong>, and <strong>mobile devices</strong> using{' '}
                <strong>BrowserStack</strong>. Verified compatibility for{' '}
                <strong>iOS</strong> & <strong>Android platforms</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>CI/CD Integration & Defect Management</strong>: Integrated
                automated test execution in <strong>CircleCI</strong>. Tracked and managed
                issues in <strong>Jira</strong> & <strong>Notion</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Performance Monitoring & Issue Resolution</strong>: Used{' '}
                <strong>New Relic</strong> to monitor system performance and detect{' '}
                <strong>bottlenecks</strong>. Analyzed logs and real-time metrics to
                proactively prevent performance degradation.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Minor Bug Fixing & Debugging</strong>: Collaborated with
                developers to identify and fix minor <strong>UI/functional bugs</strong>.
                Performed <strong>root cause analysis</strong> to reduce recurring
                defects.
              </ProjectSectionText>

              <ProjectSectionText>
                ✅ <strong>Documentation & Release Notes</strong>: Created detailed{' '}
                <strong>test reports</strong>, <strong>user guides</strong>, and
                troubleshooting documentation. Drafted and published{' '}
                <strong>release notes</strong> for clients, summarizing key updates and
                fixes.
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
                🧪 Testing Approach & Methodology
              </ProjectSectionHeading>

              <ProjectSectionText>
                ✔️ <strong>Functional & Regression Testing</strong> – Ensured seamless{' '}
                <strong>user interactions</strong> and <strong>system stability</strong>{' '}
                across updates.
              </ProjectSectionText>

              <ProjectSectionText>
                🚀 <strong>Automation-First Strategy</strong> – Focused on scalable{' '}
                <strong>test automation</strong> to minimize manual efforts and increase
                efficiency.
              </ProjectSectionText>

              <ProjectSectionText>
                🛠️ <strong>Shift-Left Testing</strong> – Integrated early-stage testing to
                detect <strong>defects</strong> before production.
              </ProjectSectionText>

              <ProjectSectionText>
                📊 <strong>Data-Driven Testing</strong> – Validated diverse input
                scenarios to enhance <strong>system reliability</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🌍 <strong>End-to-End Testing</strong> – Covered <strong>UI</strong>,{' '}
                <strong>API</strong>, and <strong>database</strong> validation for a
                complete test coverage strategy.
              </ProjectSectionText>

              <ProjectSectionText>
                ⚙️ <strong>Performance & Load Testing</strong> – Optimized{' '}
                <strong>system response times</strong> and <strong>stability</strong>{' '}
                under peak loads.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Continuous Testing in CI/CD</strong> – Integrated automated
                test execution in <strong>CircleCI</strong> for rapid feedback loops.
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
                  style={{
                    marginLeft: '-140px',
                    marginTop: '67px',
                    width: '513px',
                  }}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: 200px) 584px, (max-width: 200px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>🎯 Challenges & Solutions</ProjectSectionHeading>

              <ProjectSectionText>
                🔹 Tackled <strong>flaky tests</strong> and{' '}
                <strong>false positives</strong> by refining <strong>test retries</strong>{' '}
                and enhancing <strong>debugging practices</strong>, ensuring{' '}
                <strong>test reliability</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 Overcame lengthy <strong>test execution times</strong> by implementing{' '}
                <strong>parallel execution</strong>, reducing the overall testing duration
                significantly.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 Addressed inconsistent <strong>API responses</strong> by incorporating{' '}
                <strong>contract testing</strong> with <strong>Postman</strong>, ensuring
                uniformity across <strong>API versions</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 Resolved <strong>cross-platform compatibility</strong> issues by
                conducting thorough testing across multiple{' '}
                <strong>OS environments</strong> and{' '}
                <strong>device configurations</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🔹 Tackled <strong>performance bottlenecks</strong> by using{' '}
                <strong>load testing tools</strong> to simulate high-traffic scenarios and
                optimize the system's handling of increased <strong>user loads</strong>.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>📊 CI/CD Enhancements</ProjectSectionHeading>

              <ProjectSectionText>
                🔄 <strong>Incorporated automated test execution</strong> at every stage
                of the <strong>deployment pipeline</strong>, ensuring consistent
                validation throughout the <strong>release cycle</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 Added <strong>pre-release smoke tests</strong> to identify issues early
                and prevent faulty <strong>deployments to production</strong>.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 Integrated <strong>regression test suites</strong> within{' '}
                <strong>CI/CD pipelines</strong>, providing consistent coverage across
                multiple releases and ensuring new features didn't break existing
                functionality.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 Configured <strong>real-time test reporting dashboards</strong>,
                offering rapid insights into issues, defects, and{' '}
                <strong>test progress</strong> throughout the process.
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 Established <strong>automated rollback strategies</strong> to quickly
                revert to previous stable versions in case of{' '}
                <strong>deployment failures</strong>.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={cicdpipeline}
              width={940}
              height={500}
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
                📌 <strong>Created and maintained a detailed test plan</strong>, outlining
                testing strategies, objectives, and execution steps to guide the team
                through the process.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Managed structured defect reports</strong> and{' '}
                <strong>root cause analysis</strong> documentation, offering clarity on
                issue origins and resolution steps for future reference.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Compiled clear automation framework documentation</strong> to
                standardize scripting practices and ensure easy future updates and
                scalability.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Led training sessions and onboarding workshops</strong> to
                align teams on testing best practices, automation techniques, and new
                tools.
              </ProjectSectionText>

              <ProjectSectionText>
                📌 <strong>Drafted and distributed comprehensive release notes</strong>{' '}
                and documentation for stakeholders, highlighting the latest updates,
                fixes, and changes.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={documents}
              width={940}
              height={500}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>🛠 Tools & Technologies Used</ProjectSectionHeading>

              <ProjectSectionText>
                🧪 <strong>Test Automation</strong> – Playwright, Cypress, Selenium,
                Nightwatch.js
              </ProjectSectionText>

              <ProjectSectionText>
                🔍 <strong>API Testing</strong> – Postman, Hoppscotch, Thunder Client
              </ProjectSectionText>

              <ProjectSectionText>
                🚀 <strong>CI/CD Integration</strong> – CircleCI, GitHub Actions, Jenkins
              </ProjectSectionText>

              <ProjectSectionText>
                📊 <strong>Monitoring & Logging</strong> – New Relic
              </ProjectSectionText>

              <ProjectSectionText>
                🔄 <strong>Version Control</strong> – Git, Bitbucket, GitHub
              </ProjectSectionText>

              <ProjectSectionText>
                📋 <strong>Test Management</strong> – Jira, Trello, Notion
              </ProjectSectionText>

              <ProjectSectionText>
                ⚙️ <strong>Performance & Load Testing</strong> – JMeter, K6
              </ProjectSectionText>

              <ProjectSectionText>
                💾 <strong>Database</strong> – MySQL, MongoDB, SQL Lite,
              </ProjectSectionText>

              <ProjectSectionText>
                🌐 <strong>Cloud & Virtualization</strong> – AWS, Docker, Kubernetes.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={tools}
              width={940}
              height={500}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
