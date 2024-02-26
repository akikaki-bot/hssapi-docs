import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className={`hero__title ${styles.layoutHeading}`}>
					<img className={styles.img} src="/img/logo.png" alt="HSSAPI" />
					High School Schedular API
				</Heading>
				<p className="hero__subtitle">
					自由な設定、時間を守る心決め。<br />
					<code> Make your <span style={{color : "red"}}>application</span>, set your <span style={{color : "blue"}}>schedule</span>. </code>
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro">
						📚 仕様書を見る ≫
					</Link>
					<Link
						className="button button--secondary button--lg"
						to="/docs/packages">
						🤖 公式パッケージ ≫
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="HSSAPIの詳細なDocumentation">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
