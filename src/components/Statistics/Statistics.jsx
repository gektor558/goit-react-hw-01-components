import styles from './Statistics.module.css';

const setBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

const StatisticsItem = ({ label, percentage, randomColor }) => {
  return (
    <li style={{ backgroundColor: randomColor }} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(dataItem => {
          const randomColor = setBackgroundColor();
          return (
            <StatisticsItem
              key={dataItem.id}
              label={dataItem.label}
              percentage={dataItem.percentage}
              randomColor={randomColor}
            />
          );
        })}
      </ul>
    </section>
  );
};