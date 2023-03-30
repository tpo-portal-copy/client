import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExperienceCardProps } from '../../utils/types'
import { RelatedExperienceCard } from '../../components/Cards'
import styles from './ExperienceDetails.module.scss'
import useExperiencesDetails from '../../hooks/useExperiencesDetails'
import PageLoader from '../../components/PageLoader'
import Page500 from '../Page500'
import { fromNow, getDifficulty } from '../../utils/functions'
import { experiencesAPI } from '../../utils/apis'

function ExperienceDetails() {
  const [relatedExperiences, setRelatedExperiences] = useState([])

  const { id } = useParams()

  const { data, isLoading, isError } = useExperiencesDetails(id)

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const response = await experiencesAPI.get(`/?page=1&company=${data.company}`)
        setRelatedExperiences(response.data.results)
      } catch (err) {
        console.log(err)
      }
    }

    getExperiences()
  }, [data, id])

  if (isLoading) {
    return <PageLoader />
  }

  if (isError) {
    return <Page500 />
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.name}>{data.company}</div>
          <div className={styles.role}>{data.roles}</div>
        </div>
        <div className={styles.separator} />
        <div className={styles.attributes}>
          <div className={styles.tag}>&#8226; {getDifficulty(data.difficulty)}</div>
          <div className={styles.tag}>&#8226; {data.jobtype}</div>
          {data.selected && <div className={styles.tag}>&#8226; Selected</div>}
          <div className={styles.tag}>&#8226; {fromNow(new Date(data.created_at))}</div>
        </div>
        <div className={styles.separator} />
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
        <div className={styles.separator} />
        {data.anonymity === false && (
          <div className={styles.lower}>
            <div>{data.name}</div>
            <div>
              <Link to={data.linkedin} className={styles.linkedin}>
                LinkedIn
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={styles.related_experiences}>
        <h3>Related Experiences</h3>
        <div className={styles.experiences}>
          {relatedExperiences.map((user: ExperienceCardProps) => (
            <RelatedExperienceCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetails
