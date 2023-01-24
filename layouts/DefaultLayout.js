import NavigationBar from '../components/NavigationBar'
import EventToastList from '../components/EventToastList'
import Container from 'react-bootstrap/Container'

export default function DefaultLayout({ children }) {
  return (
    <>
      <EventToastList />
      <NavigationBar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}