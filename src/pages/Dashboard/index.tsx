import { Button } from '../../components'

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Button varient="secondary" onclick={() => console.log('clicked')}>
        Edit Profile
      </Button>
    </>
  )
}

export default Dashboard
