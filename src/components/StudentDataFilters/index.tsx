/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Input, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import CheckListItem from '../CheckListItem'
import { ExperienceFilterProps } from '../../utils/types'
import styles from './StudentDataFilters.module.scss'
import useStudentDataFilterOptionsList from '../../hooks/useStudentDataFilterOptions'
import { branchesAPI } from '../../utils/apis'
import Modal from '../Modal'
import Loader from '../../assets/animations/72411-simple-grey-spinner.json'

function StudentDataFilters({ isMobile = false }: ExperienceFilterProps) {
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false)
  const [isBranchLoading, setIsBranchLoading] = useState(false)
  const [course, setCourse] = useState({ id: 2, years: 4, name: 'B.Tech' })
  const [selectedBranches, setSelectedBranches] = useState<any>([])
  const [selectionStatus, setSelectionStatus] = useState('')
  const [jobType, setJobType] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [cgpa, setCgpa] = useState(6)
  const navigate = useNavigate()

  const { data, isLoading, isSuccess } = useStudentDataFilterOptionsList()

  if (isLoading || !isSuccess) {
    return <Lottie animationData={Loader} />
  }

  const openBranchModal = () => {
    setIsBranchModalOpen(true)
  }

  const closeBranchModal = () => {
    setIsBranchModalOpen(false)
  }

  const handleCourseChange = async (e: any) => {
    setIsBranchLoading(true)
    const parsedObj = JSON.parse(e.target.value)
    setCourse(parsedObj)

    const res = await branchesAPI.get(`/${parsedObj.id}`)
    setSelectedBranches([...res.data.branches])
    setIsBranchLoading(false)
  }

  const onBranchToggle = (branch: string) => {
    // If branch alrealy selected, then remove it from selected branches list
    if (selectedBranches.includes(branch)) {
      const branches = [...selectedBranches]
      const branchIndex = selectedBranches.findIndex((branchName: string) => branchName === branch)
      branches.splice(branchIndex, 1)
      setSelectedBranches(branches)
      return
    }

    // Else add branch to selected branches list
    setSelectedBranches([...selectedBranches, branch])
  }

  console.log(selectedBranches)

  const onCategoryToggle = (category: string) => {
    // If category alrealy selected, then remove it from selected categories list
    if (selectedCategories.includes(category)) {
      const categories = [...selectedCategories]
      const categoryIdx = selectedCategories.findIndex((categoryName) => categoryName === category)
      categories.splice(categoryIdx, 1)
      setSelectedCategories(categories)
      return
    }

    // Else add difficulty to selected difficulties list
    setSelectedCategories([...selectedCategories, category])
  }

  const handleCgpaChange = (e: any) => {
    setCgpa(e)
  }

  const applyFilters = (event: any) => {
    event.preventDefault()
    const branchesListString = selectedBranches.join(',')
    const categoriesListString = selectedCategories.join(',')

    navigate(
      `/students/?course=${course.name}&branches=${branchesListString}&category=${categoriesListString}&selected=${selectionStatus}&jobtype=${jobType}&cgpa=${cgpa}`,
    )
  }

  const clearFilters = (event: any) => {
    event.preventDefault()
    setCourse({ id: 0, years: 0, name: '' })
    setSelectedBranches([])
    setSelectionStatus('')
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
            <h4>Course</h4>
          </div>
        </div>
        <Select placeholder="Select Course" onChange={(e) => handleCourseChange(e)} name="course">
          {data &&
            data[0].map((datas: any) => {
              return (
                <option
                  value={`{"id":${datas.id},"years":${datas.years},"name":"${datas.name}"}`}
                  key={datas.id}
                >
                  {datas.name}
                </option>
              )
            })}
        </Select>
      </div>
      <div className={styles.seperator} />
      <div>
        <div className={styles.filter_head}>
          <div className={styles.tag}>
            <h4>Branch</h4>
          </div>
          <div className={styles.modal}>
            <button className={styles.btn} onClick={openBranchModal}>
              View All
              <FontAwesomeIcon icon={faCircleRight} />
            </button>
            {isBranchModalOpen && selectedBranches && (
              <Modal
                title="selectedBranches"
                isOpen={isBranchModalOpen}
                onCloseHandler={closeBranchModal}
                list={selectedBranches}
                onItemClick={onBranchToggle}
                selectedItems={selectedBranches}
              />
            )}
          </div>
        </div>
        <div>
          {isBranchLoading ? (
            <Lottie animationData={Loader} />
          ) : (
            selectedBranches.length !== 0 &&
            selectedBranches?.splice(0, 4).map((datas: any) => {
              return (
                <CheckListItem
                  label={datas.branch_name}
                  key={datas.id}
                  isMobile={isMobile}
                  onClick={onBranchToggle}
                  isChecked={selectedBranches.includes(datas.branch_name)}
                />
              )
            })
          )}
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Selection Status</h4>
        <div>
          <RadioGroup onChange={setSelectionStatus} value={selectionStatus}>
            <Stack direction="column">
              <Radio value="true">Selected</Radio>
              <Radio value="false">Not Selected</Radio>
              <Radio value="">All</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
      <div className={styles.seperator} />
      <div>
        <h4 className={styles.filter_category}>Category</h4>
        <div>
          <CheckListItem
            label="GEN"
            isMobile={isMobile}
            onClick={onCategoryToggle}
            isChecked={selectedCategories.includes('GEN')}
          />
          <CheckListItem
            label="GEN-EWS"
            isMobile={isMobile}
            onClick={onCategoryToggle}
            isChecked={selectedCategories.includes('GEN-EWS')}
          />
          <CheckListItem
            label="OBC-NCL"
            isMobile={isMobile}
            onClick={onCategoryToggle}
            isChecked={selectedCategories.includes('OBC-NCL')}
          />
          <CheckListItem
            label="SC"
            isMobile={isMobile}
            onClick={onCategoryToggle}
            isChecked={selectedCategories.includes('SC')}
          />
          <CheckListItem
            label="ST"
            isMobile={isMobile}
            onClick={onCategoryToggle}
            isChecked={selectedCategories.includes('ST')}
          />
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
        <h4 className={styles.filter_category}>CGPA</h4>
        <div>
          <Input onChange={handleCgpaChange} name="cgpa" placeholder="CGPA" />
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

export default StudentDataFilters
