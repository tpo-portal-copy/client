import styles from './DashboardCard.module.scss'

interface DashboardProps {
  title: string
  description: string
  imgUrl: string
  postedOn: number
}
function DashboardCard({ title, description, imgUrl, postedOn }: DashboardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.mainContainer}>
        <img
          style={{ width: '80px', height: '80px', borderRadius: '5px' }}
          src={imgUrl}
          alt="companyLogo"
        />
        <div className={styles.container}>
          <p style={{ fontSize: '30px', fontFamily: 'Inter' }}>{title}</p>
          <p style={{ fontFamily: 'Inter' }}>{description}</p>
        </div>
      </div>
      <div className={styles.separator} />
      <p style={{ position: 'relative', top: '30%', textAlign: 'right', color: '#CFD2CF' }}>
        {postedOn} min ago
      </p>
    </div>
  )
}

export default DashboardCard
