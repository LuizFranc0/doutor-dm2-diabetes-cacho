import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const message = "Olá, tenho interesse no tratamento!";
  const whatsappUrl = `https://wa.me/5528999350204?text=${encodeURIComponent(message)}`;

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Edificio Ibis - Av. Antônio Penedo, 33 - Sala 102 - Centro</Para>
              <Para>Cachoeiro de Itapemirim - ES, 29300-022</Para>
            </Col>

            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href={whatsappUrl}>
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>

            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>Telefones: </Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                (28) 3026-0204 / (28) 99935-0204
              </Para>
            </Col>
          </Row>
          <Row justify="space-between">
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="center"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="200px"
                  height="auto"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/doutordm2diabetescachoeiro/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.facebook.com/people/Doutor-DM2-Diabetes-Cachoeiro/61556542774870"
                src="facebook.svg"
              />
              <SocialLink
                href="https://maps.app.goo.gl/fEuKD7hGFyityj7q9"
                src="location.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
