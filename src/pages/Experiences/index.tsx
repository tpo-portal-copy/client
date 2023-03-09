import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ExperienceCardProps } from '../../utils/types'
import { ExperiencesSidebar, ExperiencesFilters } from '../../components'
import { interviewExperienceInfoList } from '../../utils/Data/interviewExperienceData'
import { ExperienceCard } from '../../components/Cards'
import styles from './Experiences.module.scss'
import useExperiencesPosts from '../../hooks/useExperiencesPosts'

function Experiences() {
  const [openFilters, setOpenFilters] = useState(false)
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')

  const { data, isLoading, isSuccess, isError, error } = useExperiencesPosts()

  if (isLoading || !isSuccess) {
    return <div>Loading...</div>
  }
  const { results } = data

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.page_name}>Interview Experiences</h1>
        <Link to="/experience-form" className={styles.post_exp_btn}>
          Post Your Experience
        </Link>
      </div>
      <div className={styles.content}>
        <div>
          {results.map((user: ExperienceCardProps) => (
            <ExperienceCard key={user.id} {...user} />
          ))}
        </div>
        <div className={styles.filter_container}>{isLargerThan880 && <ExperiencesFilters />}</div>
        <div className={styles.filter_mobile_container}>
          <FontAwesomeIcon
            onClick={() => {
              setOpenFilters(true)
            }}
            icon={faFilter}
            size="2x"
          />
          {openFilters && <ExperiencesSidebar setIsSidebarOpen={setOpenFilters} />}
        </div>
      </div>
    </>
  )
}

export default Experiences
