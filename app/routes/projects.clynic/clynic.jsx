import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/clynic-api.jpg';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/clynic-api.jpg';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/automation4.jpg';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/automation3.jpg';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/medical-booking-app-theme_23-2148557731.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/medical-booking-app-theme_23-2148557731.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/functionality.mp4';
import imageSprSchema1DarkLarge from '~/assets/man-woman-coworking-laptop_23-2147669376.jpg';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/man-woman-coworking-laptop_23-2147669376.jpg';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/people-correcting-charts_23-2147669777.jpg';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/people-correcting-charts_23-2147669777.jpg';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/customer-experience-creative-collage_23-2149371196.jpg';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/bussiness.jpg';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './clynic.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Clynic App';
const description =
  'The Clynic Mobile App revolutionizes healthcare accessibility by providing essential features like Family History tracking, Telemedicine consultations, and real-time medical data integration. Designed for both patients and healthcare providers, the app ensures seamless data access and improved healthcare experiences.';
const roles = [
  'User-Centric Design for Patient and Doctor Apps',
  'Integration of Family History Feature for Comprehensive Medical Records',
  'Telemedicine Video Consultations and Real-Time Communication',
  'Language Translation for Enhanced User Accessibility',
  'Wearable Device Integration for Health Monitoring',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.clynic.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>
              Responsibilities & Contributions
            </ProjectSectionHeading>
            <ProjectSectionText>
              ✅ <strong>QA Strategy & Test Management</strong>
              <br />
              Defined and implemented a <strong>
                comprehensive testing strategy
              </strong>{' '}
              covering functional, regression, smoke, and exploratory testing.
              <br />
              Established a <strong>structured test plan</strong> ensuring complete
              coverage of healthcare workflows.
              <br />
              <br />✅ <strong>Manual & Automation Testing</strong>
              <br />
              Led a team in designing and executing <strong>
                end-to-end test cases
              </strong>{' '}
              for web and mobile platforms.
              <br />
              Developed and optimized <strong>test automation frameworks</strong> using
              Playwright & Appium to streamline testing processes.
              <br />
              <br />✅ <strong>API & Performance Testing</strong>
              <br />
              Validated API responses and integrations using{' '}
              <strong>Postman & Swagger</strong>.<br />
              Conducted <strong>load, stress, and scalability testing</strong> with JMeter
              & k6 to ensure system reliability.
              <br />
              <br />✅ <strong>Cross-Browser & Device Compatibility Testing</strong>
              <br />
              Ensured seamless performance across multiple devices and screen sizes using
              <strong>BrowserStack</strong>.<br />
              Conducted real-time testing on <strong>iOS & Android devices</strong> to
              identify platform-specific issues.
              <br />
              <br />✅ <strong>CI/CD Integration & Defect Management</strong>
              <br />
              Integrated <strong>automated test execution</strong> into the CI/CD pipeline
              using CircleCI.
              <br />
              Managed and prioritized defects efficiently in{' '}
              <strong>Jira & TestRail</strong>
              to streamline resolution.
              <br />
              <br />✅ <strong>Security & Compliance Testing</strong>
              <br />
              Conducted <strong>data security assessments</strong> to ensure compliance
              with healthcare industry standards.
              <br />
              Performed vulnerability testing to safeguard{' '}
              <strong>patient records and sensitive data</strong>.<br />
              <br />✅ <strong>Collaboration & Process Optimization</strong>
              <br />
              Worked closely with{' '}
              <strong>developers, product managers, and stakeholders</strong>
              to improve test processes.
              <br />
              Provided <strong>mentorship and guidance</strong> to junior QA engineers,
              enhancing overall team efficiency.
              <br />
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                  : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Challenges & Solutions</ProjectSectionHeading>
              <ProjectSectionText>
                🔹 <strong>Challenge 1:</strong> The <strong>Family History</strong>{' '}
                feature displayed incorrect medical data due to API inconsistencies.
                <br />
                🔹 <strong>Solution:</strong> Developed and implemented{' '}
                <strong>API validation scripts</strong> in Postman to detect and resolve
                data mismatches, ensuring accurate patient records.
                <br />
                <br />
                📷{' '}
                <strong>
                  Add an illustration of API request/response testing in Postman
                </strong>
                <br />
                <br />
                🔹 <strong>Challenge 2:</strong> Telemedicine video calls{' '}
                <strong>failed in low-network conditions</strong>, disrupting virtual
                consultations.
                <br />
                🔹 <strong>Solution:</strong> Conducted **network throttling tests** using
                Chrome DevTools and tested under simulated{' '}
                <strong>low bandwidth conditions</strong>, optimizing the app’s
                performance to handle weak signals efficiently.
                <br />
                <br />
                📷 <strong>Add an illustration of network throttling tests</strong>
                <br />
                <br />
                🔹 <strong>Challenge 3:</strong> High latency in{' '}
                <strong>real-time health record synchronization</strong> caused delays in
                updating patient data.
                <br />
                🔹 <strong>Solution:</strong> Performed{' '}
                <strong>performance and load testing</strong> using JMeter & k6 to
                identify bottlenecks and optimize backend API response times, reducing
                data sync latency by <strong>30%</strong>.<br />
                <br />
                📷 <strong>Add an illustration of API performance test results</strong>
                <br />
                <br />
                🔹 <strong>Challenge 4:</strong> Inconsistent user experience across
                different <strong>mobile devices</strong> and screen resolutions.
                <br />
                🔹 <strong>Solution:</strong> Implemented{' '}
                <strong>cross-browser and device compatibility testing</strong> using
                BrowserStack, ensuring seamless UI/UX across iOS, Android, and web
                platforms.
                <br />
                <br />
                📷 <strong>Add an illustration of BrowserStack test execution</strong>
                <br />
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w`
                  : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Key Achievements & Impact</ProjectSectionHeading>
              <ProjectSectionText>
                🏆 <strong>Enhanced Test Coverage & Stability</strong>
                <br />✔ Increased <strong>test coverage from 70% to 95%</strong> through
                comprehensive manual & automation testing.
                <br />✔ Automated <strong>50% of regression test cases</strong>, reducing
                testing time per cycle by <strong>40%</strong>.<br />✔ Reduced{' '}
                <strong>bug leakage by 80%</strong>, leading to higher user satisfaction
                and lower production defects.
                <br />
                <br />
                🏆 <strong>Optimized Performance & Reliability</strong>
                <br />✔ Reduced <strong>API response time by 40%</strong> through
                performance tuning & optimized backend queries.
                <br />✔ Conducted <strong>load testing</strong> with JMeter & k6 to
                improve system scalability.
                <br />✔ Ensured seamless user experience by implementing{' '}
                <strong>cross-browser and mobile compatibility testing</strong>.<br />
                <br />
                🏆 <strong>Strengthened Security & Compliance</strong>
                <br />✔ Conducted security assessments ensuring{' '}
                <strong>HIPAA & GDPR compliance</strong> for patient data.
                <br />✔ Implemented <strong>penetration testing</strong> to identify and
                mitigate vulnerabilities.
                <br />
                <br />
                🏆 <strong>Streamlined CI/CD & Defect Management</strong>
                <br />✔ Integrated <strong>automated test execution</strong> into
                CircleCI, reducing manual testing efforts.
                <br />✔ Improved bug tracking & resolution speed by <strong>
                  30%
                </strong>{' '}
                using Jira & TestRail.
                <br />
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Tools & Technologies Used</ProjectSectionHeading>
                  <ProjectSectionText>
                    🔹 <strong>Automation & Functional Testing</strong>
                    <br />
                    🚀 <strong>Playwright, Appium, Selenium</strong> – Developed robust
                    automation scripts for web & mobile apps, improving test efficiency.
                    <br />
                    <br />
                    🔹 <strong>API Testing & Validation</strong>
                    <br />
                    🌐 <strong>Postman, Swagger</strong> – Conducted API functional &
                    contract testing, ensuring accurate data exchange.
                    <br />
                    <br />
                    🔹 <strong>Performance & Load Testing</strong>
                    <br />⚡ <strong>JMeter, k6</strong> – Simulated high-traffic
                    conditions, optimized API response times, and enhanced system
                    scalability.
                    <br />
                    <br />
                    🔹 <strong>CI/CD & Continuous Testing</strong>
                    <br />
                    🔄 <strong>CircleCI, Jenkins</strong> – Integrated automated test
                    execution into pipelines, reducing deployment risks.
                    <br />
                    <br />
                    🔹 <strong>Bug Tracking & Test Management</strong>
                    <br />
                    🛠 <strong>Jira, TestRail</strong> – Streamlined defect tracking & test
                    case management, improving collaboration between QA & development
                    teams.
                    <br />
                    <br />
                    🔹 <strong>Monitoring & Logging</strong>
                    <br />
                    📊 <strong>New Relic, LogRocket</strong> – Enabled proactive
                    monitoring, detecting real-time performance issues.
                    <br />
                    <br />
                    📷{' '}
                    <strong>
                      Add an image showcasing tool icons (Playwright, Postman, Jira, etc.)
                    </strong>
                    <br />
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>

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
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>User Impact & Business Value</ProjectSectionHeading>
              <ProjectSectionText>
                📈 <strong>Improved Platform Stability & User Satisfaction</strong>
                <br />✔ Achieved a <strong>40% reduction in production defects</strong>,
                leading to fewer support tickets.
                <br />✔ Enhanced user experience by ensuring <strong>
                  99.9% uptime
                </strong>{' '}
                with proactive monitoring & bug resolution.
                <br />
                <br />
                🏥 <strong>Ensured Reliable Healthcare Access</strong>
                <br />
                ✔ Validated secure patient data handling, reducing compliance risks.
                <br />
                ✔ Optimized real-time appointment booking through performance & API
                testing.
                <br />
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w`
                  : `${imageSprStoryboarderLight} 1280w, ${imageSprStoryboarderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Performance Optimization',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Functional Testing',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'Automation Frameworks',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Test Coverage',
                    hidden: true,
                  },
                  { position: [0.11, 0.2, -0.56], text: 'Agile Testing', hidden: true },
                  { position: [0.52, 0.2, -0.23], text: 'Defect Analysis', hidden: true },
                  {
                    position: [-0.24, 0.45, 0.24],
                    text: 'Security Testing',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'CI/CD Integration',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.25, 0.24],
                    text: 'Test Automation Frameworks',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              {/* Ensuring Quality & Performance */}
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        <strong>
                          Ensuring Quality & Performance in Software Development
                        </strong>
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        As a <strong>QA Lead Tester</strong>, I focus on{' '}
                        <strong>test automation</strong>,{' '}
                        <strong>performance testing</strong>, and{' '}
                        <strong>CI/CD integration</strong> to deliver{' '}
                        <strong>
                          stable, scalable, and high-performing applications
                        </strong>
                        .
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>

              {/* Comprehensive Testing Strategies */}
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Test Strategy & Execution
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        🔹 <strong>Test Approach</strong>
                        <br />
                        🚀 Defined and executed a{' '}
                        <strong>risk-based testing strategy</strong> to ensure critical
                        healthcare functionalities remained stable.
                        <br />
                        <br />
                        🔹 <strong>Test Execution</strong>
                        <br />
                        ✔ Conducted manual & automated functional, regression, smoke, and
                        exploratory tests.
                        <br />
                        ✔ Performed end-to-end testing covering appointments,
                        prescriptions, payments, and patient records.
                        <br />
                        <br />
                        🔹 <strong>Regression & Release Testing</strong>
                        <br />
                        ✔ Automated critical regression suites to reduce manual effort by
                        50%.
                        <br />✔ Performed <strong>pre-release validation</strong> in
                        staging & production environments.
                        <br />
                        <br />
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>

              {/* Bug Tracking & Agile Testing */}
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Functional Testing',
                  'Performance Optimization',
                  'Automation Frameworks',
                  'Test Coverage',
                  'Agile Testing',
                  'Defect Analysis',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Bug Tracking & Agile Testing
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        <ul>
                          <li>
                            ✔ <strong>Defect Tracking & Reporting</strong> using{' '}
                            <strong>Jira & New Relic</strong>
                          </li>
                          <li>
                            ✔ <strong>Test-Driven Development (TDD)</strong> for early
                            defect detection
                          </li>
                          <li>
                            ✔ <strong>Agile Testing & Continuous Feedback Loops</strong>{' '}
                            to improve test coverage
                          </li>
                        </ul>
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>

              {/* Scalability & Continuous Improvement */}
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Functional Testing',
                  'Performance Optimization',
                  'Automation Frameworks',
                  'Test Coverage',
                  'Agile Testing',
                  'Defect Analysis',
                ]}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['EarthPartial', 'Chunk']}
                labels={[
                  'Security Testing',
                  ,
                  'CI/CD Integration',
                  ,
                  'Test Automation Frameworks',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Challenges & Lessons Learned
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        ⚠️ <strong>Challenge 1: Data Synchronization Issues</strong>
                        <br />
                        🛠 Solution: Implemented real-time API testing and monitored data
                        consistency across patient records.
                        <br />
                        <br />
                        ⚠️ <strong>Challenge 2: Performance Bottlenecks</strong>
                        <br />
                        🛠 Solution: Optimized backend queries & caching, reducing API
                        response time by 40%.
                        <br />
                        <br />
                        ⚠️ <strong>Challenge 3: CI/CD Pipeline Flakiness</strong>
                        <br />
                        🛠 Solution: Introduced retry mechanisms & test parallelization,
                        improving pipeline reliability.
                        <br />
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>

              {/* QA Leadership & Cross-Team Collaboration */}
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Future Enhancements & Next Steps
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        🔜 <strong>Expand Test Automation Coverage</strong>: Increase API
                        and mobile automation to reduce manual efforts further.
                        <br />
                        🔜 <strong>Shift-Left Testing</strong>: Implement early-stage
                        testing practices to catch defects sooner.
                        <br />
                        🔜 <strong>AI-Powered Testing</strong>: Explore AI-driven test
                        case generation & failure analysis.
                        <br />
                        <br />
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>

              {/* Final Excellence Section */}
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        <strong>Driving Quality & Reliability in Healthcare Tech</strong>
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Leading QA efforts in <strong>Clynic</strong>, I have ensured{' '}
                        <strong>
                          seamless patient experiences, robust system performance, and
                          secure healthcare data management
                        </strong>
                        . Through{' '}
                        <strong>
                          test automation, CI/CD integration, and proactive defect
                          resolution
                        </strong>
                        , I’ve contributed to delivering a{' '}
                        <strong>
                          highly stable, scalable, and patient-centric healthcare platform
                        </strong>
                        . Committed to{' '}
                        <strong>
                          continuous innovation, quality excellence, and future-proofing
                          digital healthcare solutions
                        </strong>
                        . 🚀
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
            </Earth>
          </Suspense>
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <svg
                width="141"
                height="43"
                viewBox="0 0 141 43"
                fill="currentColor"
                style={{ marginBottom: '2em' }}
              >
                <path d="M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.10a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" />
                <path
                  fillRule="evenodd"
                  d="M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.20.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.80.43-1.30.43h-.01c-.23 0-.46-.03-.69-.10-.39-.10-.70-.29-.90-.52-.19-.22-.31-.50-.37-.83-.08-.50.05-1.04.36-1.48a1.90 1.90 0 0 1 1.53-.84c.10 0 .22 0 .32.03Z"
                />
              </svg>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Clynic has successfully transformed clinic management worldwide, providing
                a robust, secure, and efficient platform for managing out-patient
                services.{' '}
                <Link href="https://www.clynic.app/">
                  With ISO certifications and a focus on seamless workflows,
                </Link>{' '}
                Clynic continues to enhance patient care and operational efficiency for
                clinics globally.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
