import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "쉬운 사용",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>대나무 패키지는 사용자가 더 쉽게 사용할 수 있도록 노력합니다.</>
    ),
  },
  {
    title: "필요한 기능을 빠르게",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        대나무 패키지는 사용하고자는 수 많은 기능을 최대한 제공하고자
        노력합니다.
      </>
    ),
  },
  {
    title: "최적화된 패키지",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        대나무 숲 패키지는 속도나 크기와 같은 것에 대한 고민을 끊임없이 하고자
        합니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
