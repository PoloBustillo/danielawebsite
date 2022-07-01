import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SideMenu from "../../components/SideMenu";
import StickyBar from "../../components/StickyBar";

export default function SignIn({ providers }) {
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <>
      {Object.values(providers).map((provider) => (
        <Container>
          <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>

          <StickyBar isMenuOpen={isOpen} setOpenMenu={setOpen}></StickyBar>
          <Row>
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Entrar con {provider.name}
              </button>
            </div>
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Entrar con {provider.name}
              </button>
            </div>
          </Row>
        </Container>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
