import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import { useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import Animation from '../../assets/animations/ripple_loader.json'
import { ExperienceCardProps } from '../../utils/types'
import { ExperiencesSidebar, ExperiencesFilters, Paginator } from '../../components'
import { ExperienceCard } from '../../components/Cards'
import styles from './Experiences.module.scss'
import useExperiencesPosts from '../../hooks/useExperiencesPosts'

function Experiences() {
  const [openFilters, setOpenFilters] = useState(false)
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  const [currPageNo, setCurrPageNo] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.toString())

  const {
    data: experiencePostData,
    isLoading: isExperiencePostLoading,
    isSuccess,
    isError,
    error,
  } = useExperiencesPosts(currPageNo, searchParams.toString())

  if (isExperiencePostLoading || !isSuccess) {
    return (
      <div className={styles.loader}>
        <Lottie animationData={Animation} />
      </div>
    )
  }

  const { results, pages } = experiencePostData

  const goToNextPage = () => {
    if (currPageNo < pages) setCurrPageNo((pageNo) => pageNo + 1)
  }

  const goToPrevPage = () => {
    if (currPageNo > 1) setCurrPageNo((pageNo) => pageNo - 1)
  }

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
          <div>
            {results.map((user: ExperienceCardProps) => (
              <ExperienceCard key={user.id} {...user} />
            ))}
          </div>
          <Paginator curr={currPageNo} max={pages} onNext={goToNextPage} onPrev={goToPrevPage} />
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
