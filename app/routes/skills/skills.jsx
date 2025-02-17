import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { Link } from '~/components/link';
import styles from './skills.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

export const Skills = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Form
            unstable_viewTransition
            className={styles.form}
            method="post"
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text="My Overall Skills"
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            {/* Skills Grid */}
            <div
              className={styles.skillsGrid}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '50px',
              }}
            >
              {[
                'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256',
                'https://cdn-icons-png.flaticon.com/512/733/733553.png',
                'https://playwright.dev/img/playwright-logo.svg',
                'https://static-00.iconduck.com/assets.00/file-type-circleci-icon-252x256-0nzrwpuu.png',
                'https://static-00.iconduck.com/assets.00/swagger-icon-2048x2048-563qbzey.png',
                'https://static-00.iconduck.com/assets.00/database-mongo-db-icon-980x1024-1q3t2p6x.png',
                'https://static-00.iconduck.com/assets.00/jira-icon-144x144-9z8vfcwv.png',
                'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png',
                'https://cdn-icons-png.flaticon.com/512/919/919825.png',
                'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
                'https://cdn-icons-png.flaticon.com/512/919/919853.png',
                'https://cdn-icons-png.flaticon.com/512/2784/2784065.png',
                'https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png',
                'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif',
                'https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e00a71403ce0d92bff02f_de38db1c-017a-526c-9df6-ced05202521b.svg',
                'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
              ].map((src, index) => (
                <div key={index} className={styles.iconContainer}>
                  <img
                    className={styles.iconImage}
                    src={src}
                    alt=""
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
              ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* PROFESSIONAL EXPERIENCE */}
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text="Professional Experience"
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Text className={styles.description} data-status={status} size="l" as="p">
              As a <strong>Full Stack QA Enginee</strong> with <strong>3+ years</strong>{' '}
              of experience across
              <strong> healthcare, e-commerce, and SaaS</strong> domains, I design and
              execute
              <strong> high-impact testing strategies</strong> focusing on{' '}
              <strong>Automation Testing</strong>,<strong> API Validation</strong>, and{' '}
              <strong>CI/CD integration</strong>. By collaborating with cross-functional
              teams, I deliver <strong>robust, scalable, and high-performing</strong>
              software solutions, ensuring meticulous test coverage and quality standards.
            </Text>
            <br />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* KEY ACHIEVEMENTS & IMPACT */}
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.5)}
            >
              <DecoderText
                text="Key Achievements & Impact"
                start={status !== 'exited'}
                delay={400}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.6)}
            />
            <ul className={styles.metricsList} data-status={status}>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                ✅ <strong>Implemented full-stack automation</strong>, cutting regression
                testing time by <strong>80%</strong> and enabling faster release cycles.
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🚀 <strong>Enhanced API test suites</strong>, achieving{' '}
                <strong>99.9% uptime</strong> for critical integrations and significantly
                improving system reliability.
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🔎 <strong>Reduced defect leakage by 60%</strong>, decreasing production
                incidents and boosting end-user satisfaction.
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🔄 <strong>Integrated QA workflows into CI/CD pipelines</strong>, cutting
                deployment times by <strong>50%</strong> and improving overall team
                efficiency.
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                📈 <strong>Optimized performance testing</strong> to handle{' '}
                <strong>10,000+ concurrent users</strong>, ensuring{' '}
                <strong>99.99% system availability</strong>.
              </Text>
            </ul>
            <br />

            <Text className={styles.description} data-status={status} size="l" as="p">
              I’m passionate about driving <strong>continuous improvement</strong>,
              mentoring QA teams, and implementing innovative testing practices that
              deliver <strong>seamless user experiences</strong> and{' '}
              <strong>product success</strong>.
            </Text>
            <br />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* SKILLS & TECHNOLOGIES */}
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.7)}
            >
              <DecoderText
                text="Skills & Technologies"
                start={status !== 'exited'}
                delay={500}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.8)}
            />
            <ul className={styles.metricsList} data-status={status}>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🛠️ <strong>Test Automation:</strong> Playwright, Selenium, Cypress,
                Nightwatch.js
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                💻 <strong>Languages & Scripting:</strong> JavaScript, TypeScript, Java,
                Python
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🔍 <strong>API Testing:</strong> Postman, Swagger, Hoppscotch, REST
                Assured
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🚀 <strong>CI/CD Integration:</strong> CircleCI, GitHub Actions, Jenkins
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                📦 <strong>Version Control & Infrastructure:</strong> Git, Docker, AWS
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                📊 <strong>Performance & Monitoring:</strong> K6, JMeter, New Relic
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                📌 <strong>Agile & Test Management:</strong> JIRA, Trello, Notion
              </Text>
            </ul>

            <br />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* CONNECT WITH ME */}
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h2"
              style={getDelay(tokens.base.durationXS, initDelay, 0.9)}
            >
              <DecoderText
                text="Connect with Me"
                start={status !== 'exited'}
                delay={600}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 1.0)}
            />
            <ul className={styles.metricsList} data-status={status}>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🤝 <strong>GitHub (Automation & QA):</strong>{' '}
                <Link
                  href="https://github.com/devlexus-sriharsha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  devlexus-sriharsha
                </Link>
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🤝 <strong>GitHub (QA Frameworks & POCs):</strong>{' '}
                <Link
                  href="https://github.com/qa-mebsly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  qa-mebsly
                </Link>
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                🌐 <strong>LinkedIn:</strong>{' '}
                <Link
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  your-linkedin-profile
                </Link>
              </Text>
              <Text
                as="li"
                className={styles.metricItem}
                data-status={status}
                size="l"
                style={{ margin: '10px 0' }}
              >
                📄 <strong>Download Resume:</strong>{' '}
                <Link
                  href="/path/to/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </Link>
              </Text>
            </ul>

            <br />

            <Text className={styles.description} data-status={status} size="l" as="p">
              I’m dedicated to <strong>solving complex testing challenges</strong> and
              making QA a <strong>key differentiator</strong> for product success.
              <strong>Feel free to explore my GitHub repositories</strong> or reach out on
              LinkedIn to discuss how I can contribute to your team’s goals! or you can
              directly <Link href="/contact">message me</Link>.
            </Text>

            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {actionData?.errors?.email}
                      {actionData?.errors?.message}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </Form>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
