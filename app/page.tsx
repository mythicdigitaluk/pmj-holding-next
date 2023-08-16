// Dependencies
import Image from 'next/image';

// Styles
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <Image
            className={styles.logo}
            src="/branding/pmj-logo.svg"
            alt="PMJ Building Services Logo"
            width={400}
            height={230}
            priority
          />

          <h1 className="srOnly">PMJ Building Services</h1>
          <h2 className={styles.tagline}>
            All Aspects of Building Work Undertaken.
          </h2>
        </div>

        <div>
          <hr className={styles.divider} />
        </div>

        <div className={styles.contact}>
          <h3>
            <a href="tel:07838 394 096" className={styles.phone}>
              07838 394 096
            </a>
          </h3>
          <h3>
            <a
              href="mailto:info@pmjbuildingservices.co.uk"
              className={styles.email}
            >
              info@pmjbuildingservices.co.uk
            </a>
          </h3>
          <h3 className={styles.message}>Website Under Construction.</h3>

          <ul className={styles.social}>
            <li>
              <a
                href="https://linkedin.com/company/pmj-building-services"
                title="LinkedIn"
                target="_blank"
              >
                <Image
                  src="/social/linkedin.svg"
                  alt="LinkedIn logo"
                  aria-label="LinkedIn logo"
                  width={70}
                  height={70}
                  className={styles.socialIcon}
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/pmjbuilding"
                title="Facebook"
                target="_blank"
              >
                <Image
                  src="/social/facebook.svg"
                  alt="Facebook logo"
                  aria-label="Facebook logo"
                  width={70}
                  height={70}
                  className={styles.socialIcon}
                />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/pmjbuilding"
                title="Twitter"
                target="_blank"
              >
                <Image
                  src="/social/twitter.svg"
                  alt="Twitter logo"
                  aria-label="Twitter logo"
                  width={70}
                  height={70}
                  className={styles.socialIcon}
                />
              </a>
            </li>

            {/* <li>
              <a href="#" title="Instagram" target="_blank">
              <Image
                src="/social/instagram.svg"
                alt="Instagram logo"
                aria-label="Instagram logo"
                width={70}
                height={70}
                className={styles.socialIcon}
              />
              </a>
            </li> */}
          </ul>

          <p className={styles.companyName}>PMJ Building Services Ltd</p>
        </div>
      </div>
    </main>
  );
}
