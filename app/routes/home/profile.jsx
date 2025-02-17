import profileImgLarge from '~/assets/Harsha.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/Harsha.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';
import { ChevronRight } from 'lucide-react';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m <strong>Sri Harsha</strong>, a <strong>Full Stack QA Engineer</strong> with
      expertise in{' '}
      <strong>automation testing, API validation, and CI/CD pipeline optimization</strong>
      . Currently, I work at <Link href="https://www.devlexus.com">Dev Lexus</Link> as a{' '}
      <strong>QA Lead</strong>, where I oversee testing processes and ensure the delivery
      of high-quality software. With <strong>over four years of experience</strong>, I
      specialize in improving product stability and user experience through efficient
      testing strategies and automation frameworks.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I have hands-on experience with tools like{' '}
      <strong>Playwright, Postman, CircleCI, Jira, MongoDB, and New Relic</strong>,
      allowing me to design and implement{' '}
      <strong>scalable test automation solutions</strong>. By optimizing CI/CD pipelines
      and introducing automated smoke tests, I have helped reduce deployment failures and
      improve testing efficiency. Additionally, I enjoy mentoring junior QA engineers,
      fostering a culture of collaboration and continuous improvement.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Beyond my full-time role, I have taken on <strong>freelance projects</strong>{' '}
      involving end-to-end QA processes, including{' '}
      <strong>automation, API testing, manual testing, and integrations</strong>. These
      experiences have strengthened my ability to adapt to diverse project requirements
      and deliver high-quality results independently.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I thrive in dynamic environments where attention to detail and innovation are key.
      Whether you’re looking for a{' '}
      <strong>
        test automation expert, DevOps-focused QA engineer, or a quality-driven
        professional
      </strong>
      , I’m always open to meaningful collaborations and opportunities to drive impactful
      results. Let’s connect!
    </Text>

    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Key Expertise" start={visible} delay={500} />
    </Heading>

    {/* Skills in a single line */}
    <div
      className={styles.skillsGrid}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '30px',
      }}
    >
      {[
        'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256', // Postman (API Testing)
        'https://playwright.dev/img/playwright-logo.svg', // Playwright (Automation)
        'https://static-00.iconduck.com/assets.00/file-type-circleci-icon-252x256-0nzrwpuu.png', // circle.ci (Test Management)
        'https://cdn-icons-png.flaticon.com/512/2784/2784065.png', // Agile Methodologies
        'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', // (Test Scripting)
        'https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e00a71403ce0d92bff02f_de38db1c-017a-526c-9df6-ced05202521b.svg', // New Relic (Monitoring & Logs)
      ].map((src, index) => (
        <img
          key={index}
          className={styles.iconImage}
          src={src}
          alt=""
          style={{ width: '60px', height: '60px', display: 'inline-block' }}
        />
      ))}
    </div>
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Button secondary className={styles.button} data-visible={visible} href="/skills">
        <ChevronRight size={22} strokeWidth={3} style={{ marginRight: '8px' }} />
        View All Skills
      </Button>
    </div>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
