import { Container} from '@mui/system'

function Layout({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Layout