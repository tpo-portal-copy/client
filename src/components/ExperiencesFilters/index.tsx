/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import CheckListItem from '../CheckListItem'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'
import Modal from '../Modal'
import { ExperienceFilterProps } from '../../utils/types'
import styles from './ExperiencesFilters.module.scss'
import useExperienceFilterOptionsList from '../../hooks/useExperienceFilterOptionsList'
import { BooleanValue } from '../../utils/constants'

function ExperiencesFilters({ isMobile = false }: ExperienceFilterProps) {
  const [isCompaniesModalOpen, setIsCompaniesModalOpen] = useState(false)
  const [isRolesModalOpen, setIsRolesModalOpen] = useState(false)
  const [startingYear] = useState(2023)
  const [noOfYears] = useState(10)
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [selectionStatus, setSelectionStatus] = useState('')
  const [jobType, setJobType] = useState('')
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])

  const navigate = useNavigate()

  const { data, isLoading, isSuccess } = useExperienceFilterOptionsList()

  if (isLoading || !isSuccess) {
    return <Lottie animationData={Loader} />
  }

  const openCompaniesModal = () => {
    setIsCompaniesModalOpen(true)
  }

  const closeCompaniesModal = () => {
    setIsCompaniesModalOpen(false)
  }

  const openRolesModal = () => {
    setIsRolesModalOpen(true)
  }

  const closeRolesModal = () => {
    setIsRolesModalOpen(false)
  }

  const onCompanyToggle = (company: string) => {
    // If company alrealy selected, then remove it from selected companies list
    if (selectedCompanies.includes(company)) {
      const companies = [...selectedCompanies]
      const companyIndex = selectedCompanies.findIndex((companyName) => companyName === company)
      companies.splice(companyIndex, 1)
      setSelectedCompanies(companies)
      return
    }

    // Else add company to selected companies list
    setSelectedCompanies([...selectedCompanies, company])
  }

  const onRoleToggle = (role: string) => {
    // If role alrealy selected, then remove it from selected roles list
    if (selectedRoles.includes(role)) {
      const roles = [...selectedRoles]
      const roleIndex = selectedRoles.findIndex((roleName) => roleName === role)
      roles.splice(roleIndex, 1)
      setSelectedRoles(roles)
      return
    }

    // Else add role to selected roles list
    setSelectedRoles([...selectedRoles, role])
  }

  const onYearToggle = (year: string) => {
    // If year alrealy selected, then remove it from selected years list
    if (selectedYears.includes(year)) {
      const years = [...selectedYears]
      const yearIndex = selectedYears.findIndex((yearName) => yearName === year)
      years.splice(yearIndex, 1)
      setSelectedYears(years)
      return
    }

    // Else add year to selected years list
    setSelectedYears([...selectedYears, year])
  }

  const onDifficultyToggle = (difficulty: string) => {
    // If difficulty alrealy selected, then remove it from selected difficulties list
    if (selectedDifficulties.includes(difficulty)) {
      const difficulties = [...selectedDifficulties]
      const difficultyIdx = selectedDifficulties.findIndex(
        (difficultyName) => difficultyName === difficulty,
      )
      difficulties.splice(difficultyIdx, 1)
      setSelectedDifficulties(difficulties)
      return
    }

    // Else add difficulty to selected difficulties list
    setSelectedDifficulties([...selectedDifficulties, difficulty])
  }

  const applyFilters = (event: any) => {
    event.preventDefault()
    const companiesListString = selectedCompanies.join(',')
    const rolesListString = selectedRoles.join(',')
    const yearsListString = selectedYears.join(',')
    const diffcultyArray = []
    if (selectedDifficulties.includes('Easy')) {
      diffcultyArray.push('E')
    }

    if (selectedDifficulties.includes('Medium')) {
      diffcultyArray.push('M')
    }

    if (selectedDifficulties.includes('Hard')) {
      diffcultyArray.push('H')
    }

    const difficultyListSring = diffcultyArray.join(',')
    navigate(
      `/experiences/?company=${companiesListString}&roles=${rolesListString}&year=${yearsListString}&selected=${selectionStatus}&jobtype=${jobType}&difficulty=${difficultyListSring}`,
    )
  }

  const clearFilters = (event: any) => {
    event.preventDefault()

    setSelectedCompanies([])
    setSelectedRoles([])
    setSelectedYears([])
    setSelectionStatus('')
    setSelectedDifficulties([])
    setJobType('')
  }

  return (
    <div className={styles.filters}>
      <div className={styles.filter_header}>
        <h2>Filters</h2>
      </div>
      <div className={styles.seperator} />
      <div className={styles.company}>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Companies</h4>
          </div>
          <div className={styles.modal}>
            <button className={styles.btn} onClick={openCompaniesModal}>
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {isCompaniesModalOpen && data && data[0] && (
              <Modal
                title="Companies"
                isOpen={isCompaniesModalOpen}
                list={data[0]}
                onCloseHandler={closeCompaniesModal}
                onItemClick={onCompanyToggle}
                selectedItems={selectedCompanies}
              />
            )}
          </div>
        </div>
        <div>
          {data &&
            data[0]?.slice(0, 4).map((company: any) => {
              return (
                <CheckListItem
                  label={company.name}
                  key={company.id}
                  isMobile={isMobile}
                  onClick={onCompanyToggle}
                  isChecked={selectedCompanies.includes(company.name)}
                />
              )
            })}
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Roles</h4>
          </div>
          <div className={styles.modal}>
            <button className={styles.btn} onClick={openRolesModal}>
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {isRolesModalOpen && data && data[1] && (
              <Modal
                title="Roles"
                isOpen={isRolesModalOpen}
                onCloseHandler={closeRolesModal}
                list={data[1]}
                onItemClick={onRoleToggle}
                selectedItems={selectedRoles}
              />
            )}
          </div>
        </div>
        <div>
          {data &&
            data[1]?.slice(0, 4).map((role: any) => {
              return (
                <CheckListItem
                  label={role.name}
                  key={role.id}
                  isMobile={isMobile}
                  onClick={onRoleToggle}
                  isChecked={selectedRoles.includes(role.name)}
                />
              )
            })}
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Selection Status</h4>
        <div>
          <RadioGroup onChange={setSelectionStatus} value={selectionStatus}>
            <Stack direction="column">
              <Radio value={BooleanValue.TRUE}>Selected</Radio>
              <Radio value={BooleanValue.FALSE}>Not Selected</Radio>
              <Radio value="">All</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Oppurtunity Year</h4>
        <div>
          {Array(noOfYears)
            .fill(true)
            .map((_, index) => {
              return (
                <CheckListItem
                  key={(startingYear - index).toString()}
                  label={startingYear - index}
                  isMobile={isMobile}
                  onClick={onYearToggle}
                  isChecked={selectedYears.includes((startingYear - index).toString())}
                />
              )
            })}
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Type</h4>
        <div>
          <RadioGroup onChange={setJobType} value={jobType}>
            <Stack direction="column">
              <Radio value="Internship">Internship</Radio>
              <Radio value="Placement">Placement</Radio>
              <Radio value="">All</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Difficulty</h4>
        <div>
          <CheckListItem
            label="Easy"
            isMobile={isMobile}
            onClick={onDifficultyToggle}
            isChecked={selectedDifficulties.includes('Easy')}
          />
          <CheckListItem
            label="Medium"
            isMobile={isMobile}
            onClick={onDifficultyToggle}
            isChecked={selectedDifficulties.includes('Medium')}
          />
          <CheckListItem
            label="Hard"
            isMobile={isMobile}
            onClick={onDifficultyToggle}
            isChecked={selectedDifficulties.includes('Hard')}
          />
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.apply} onClick={clearFilters}>
          Clear
        </button>
        <button className={styles.apply} onClick={applyFilters}>
          Apply
        </button>
      </div>
    </div>
  )
}

export default ExperiencesFilters
