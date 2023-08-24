import Logo from "../../components/Logo"
import NavBar from "../../components/NavBar"
import SessionController from "../../components/SessionController"
import confirm from "../../../core/utils/confirm"
import * as D from "./Default.layout.styles"
import info from "../../../core/utils/info"

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <D.Wrapper>

      <D.Header>
        <Logo />
      </D.Header>

      <D.Main>

        <D.Navigation>
          <NavBar />
        </D.Navigation>

        <D.FeaturedContent> {props.children} </D.FeaturedContent>

        <D.Aside>
          <SessionController
            name="Pedro"
            description="Editor há 2 anos"
            onLogout={() => {
              confirm({
                title: 'Você quer sair?',
                onConfirm: () => {
                  info({
                    title: 'Você foi deslogado',
                    description: 'Você será redirecionado para a página de logn'
                  })
                }
              })
            }}
          />
        </D.Aside>
      </D.Main>
    </D.Wrapper>
  )
}

export default DefaultLayout