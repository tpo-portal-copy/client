import { ProgressBarProps } from '../../utils/types'

function ProgressBar({ completed, step }: ProgressBarProps) {
  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#1976D2',
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
  }

  const labelContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '2px',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
      <div style={labelContainer}>Step {step} completed</div>
    </div>
  )
}

export default ProgressBar
