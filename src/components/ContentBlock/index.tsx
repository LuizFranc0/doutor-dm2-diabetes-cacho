import React, { useEffect, useState } from "react";
import { Col, Modal, Button as AntButton, Radio, Input, Form } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";

import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  isVideo = false,
}: ContentBlockProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<any>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define um limite para dispositivos móveis
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica a largura ao carregar a página

    return () => window.removeEventListener("resize", handleResize); // Limpa o event listener
  }, []);

  const handleButtonClick = (title: string) => {
    if (title === "Contato" || title === "Entrar em contato") {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    const { nome, diabetesTipo2, tempoDiabetes } = formValues;

    // Mensagem padrão de interesse
    let message = `Olá, não tenho diabetes, mas tenho interesse em conhecer o tratamento.`;

    // Se a pessoa tem diabetes tipo 2, ajusta a mensagem
    if (diabetesTipo2 === "sim") {
      // Se tem diabetes, inclui o tempo
      const tempo = tempoDiabetes
        ? tempoDiabetes === "menos1"
          ? "menos de 1 ano"
          : tempoDiabetes === "entre1e2"
            ? "entre 1 e 2 anos"
            : tempoDiabetes === "mais5"
              ? "mais de 5 anos"
              : "mais de 10 anos"
        : "não especificado";

      message = `Olá! Sou ${nome}, tenho diabetes há ${tempo}, gostaria de conhecer mais sobre o tratamento.`;
    }

    const whatsappUrl = `https://wa.me/5528999350204?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormChange = (changedValues: any) => {
    setFormValues((prev: any) => ({ ...prev, ...changedValues }));
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={isVideo ? 10 : 12} md={11} sm={12} xs={24}>
            <SvgIcon
              isVideo={isVideo}
              src={icon}
              width={isMobile ? "350px" : "100%"}
              height="100%"
            />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map((item: any, idx: number) => (
                      <Button
                        key={idx}
                        color={item.color}
                        onClick={() => handleButtonClick(item.title)}
                      >
                        {t(item.title)}
                      </Button>
                    ))}
                </ButtonWrapper>
              ) : (
                section && (
                  <h5
                    style={{
                      fontSize: "2rem",
                      color: "#F99D36",
                    }}
                  >
                    Venha descobrir como podemos ajudar você também!
                  </h5>
                )
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>

      <Modal
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
        title={
          <h1
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#F99D36",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            Entrar em contato
          </h1>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <AntButton key="cancel" onClick={handleCancel} style={{ borderRadius: "8px" }}>
            Cancelar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{
              backgroundColor: "#1D71B8",
              borderColor: "#1D71B8",
              borderRadius: "8px",
            }}
          >
            Enviar
          </AntButton>,
        ]}
        bodyStyle={{
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#FAFAFA",
        }}
        centered
      >
        <Form
          onValuesChange={(_, values) => handleFormChange(values)}
          layout="vertical"
          style={{ gap: "16px" }}
        >
          <Form.Item
            label={
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                Nome
              </span>
            }
            name="nome"
            rules={[{ required: true, message: "Por favor, insira seu nome." }]}
          >
            <Input
              placeholder="Digite seu nome"
              style={{
                borderRadius: "8px",
                borderColor: "#E0E0E0",
                padding: "12px",
              }}
            />
          </Form.Item>
          <Form.Item
            label={
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                Você tem diabetes tipo 2?
              </span>
            }
            name="diabetesTipo2"
            rules={[{ required: true, message: "Por favor, selecione uma opção." }]}
          >
            <Radio.Group
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              <Radio value="sim">Sim</Radio>
              <Radio value="nao">Não</Radio>
            </Radio.Group>
          </Form.Item>
          {formValues.diabetesTipo2 === "sim" && (
            <Form.Item
              label={
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                  Há quanto tempo você sofre com diabetes?
                </span>
              }
              name="tempoDiabetes"
              rules={[{ required: true, message: "Por favor, selecione uma opção." }]}
            >
              <Radio.Group
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <Radio value="menos1">Menos de 1 ano</Radio>
                <Radio value="entre1e2">Entre 1 e 2 anos</Radio>
                <Radio value="mais5">Mais de 5 anos</Radio>
                <Radio value="mais10">Mais de 10 anos</Radio>
              </Radio.Group>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
