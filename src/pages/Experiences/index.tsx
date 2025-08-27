/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import { memo, useEffect, useState } from 'react'
import { Text, useMediaQuery } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'
import { ExperienceCardProps } from '../../utils/types'
import { ExperiencesSidebar, ExperiencesFilters, Paginator } from '../../components'
import { ExperienceCard } from '../../components/Cards'
import NotFound from '../../assets/animations/94729-not-found.json'
import styles from './Experiences.module.scss'
import useExperiencesPosts from '../../hooks/useExperiencesPosts'
import Page500 from '../Page500'
import PageLoader from '../../components/PageLoader'
import { getDataFromLocalStorage } from '../../utils/functions'

function Experiences() {
  const [openFilters, setOpenFilters] = useState(false)
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  const [currPageNo, setCurrPageNo] = useState(1)
  const [isFirstTimeVisited, setIsFirstTimeVisited] = useState(true)
  const [searchParams] = useSearchParams()

  const {
    data: experiencePostData,
    isLoading: isExperiencePostLoading,
    isSuccess,
    isError,
  } = useExperiencesPosts(currPageNo, searchParams.toString())

  useEffect(() => {
    if (isSuccess) setIsFirstTimeVisited(false)
  }, [isSuccess])

  let result = []
  let pagesNum = 1

  if (experiencePostData) {
    const { results, pages } = experiencePostData
    result = results
    pagesNum = pages
  }

  const goToNextPage = () => {
    if (currPageNo < pagesNum) setCurrPageNo((pageNo) => pageNo + 1)
  }

  const goToPrevPage = () => {
    if (currPageNo > 1) setCurrPageNo((pageNo) => pageNo - 1)
  }

  const MemoizedExperiencesSideBar = memo(ExperiencesSidebar)

  if (isFirstTimeVisited) {
    return <PageLoader />
  }

  if (isError) {
    return <Page500 />
  }

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.page_name}>Interview Experiences</h1>
        {getDataFromLocalStorage('eligibility') !== 'NA' && (
          <Link to="/experience-form" className={styles.post_exp_btn}>
            Post Your Experience
          </Link>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.posts_grand}>
          <div className={styles.posts}>
            {isExperiencePostLoading ? (
              <div className={styles.animation_container}>
                <Lottie animationData={Loader} className={styles.animation} />
              </div>
            ) : result.length === 0 ? (
              <div className={styles.lottie_container}>
                <Text className={styles.heading}>Oops....</Text>
                <Text className={styles.para}>Cannot find anything</Text>
                <div className={styles.animation_container}>
                  <Lottie animationData={NotFound} className={styles.animation} />
                </div>
              </div>
            ) : (
              result.map((user: ExperienceCardProps) => <ExperienceCard key={user.id} {...user} />)
            )}
          </div>
          {result.length !== 0 && (
            <Paginator
              curr={currPageNo}
              max={pagesNum}
              onNext={goToNextPage}
              onPrev={goToPrevPage}
            />
          )}
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
          {openFilters && <MemoizedExperiencesSideBar setIsSidebarOpen={setOpenFilters} />}
        </div>
      </div>
    </>
  )
}

export default Experiences
