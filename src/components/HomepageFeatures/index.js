import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'RESTful API',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				HSS APIはRestfulなAPIです。これにより、簡単にデータを取得、更新、削除することができます。
			</>
		),
	},
	{
		title: 'Free To Use',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				HSS APIは無料で使用できます。
			</>
		),
	},
	{
		title: 'Great Authorization',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				個人情報を取り扱うため、HSS APIは認証を必要とします。認証トークンはユーザーがログインした後に取得できます。
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
