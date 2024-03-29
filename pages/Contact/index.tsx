import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import * as S from "../../styles/Contact";

import { Box } from "../../components/Box";

import Aspa from "../../images/aspa.png";
import Star from "../../images/star.png";
import Send from "../../images/send.png";
import Map from "../../images/map.png";
import Mail from "../../images/mail.png";
import Phone from "../../images/phone.png";

import { Button } from "../../components/Button";

export default function Contact() {
  const [commentId, setCommentId] = useState(1);

  const commentDisplay = () => {
    if (commentId === 1) {
      return (
        <p>
          "He was the best student in the class. If I could, I would hire myself
          too, because this one is going far."
        </p>
      );
    } else if (commentId === 2) {
      return <p>"The pride of the family!"</p>;
    } else if (commentId === 3) {
      return (
        <p>
          "Determined, committed, great husband. But I'm suspicious to talk. I
          love him."
        </p>
      );
    } else {
      return <p>“👍“</p>;
    }
  };

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_35c3g18",
        "template_ldzal1m",
        event.target,
        "TzdwkSpAs9yA6zfbd"
      )
      .then(
        (res) => {
          alert("Email enviado");
        },
        (err) => {
          alert("Algo deu errado");
        }
      );
  };

  return (
    <S.Container id="4">
      <Box h="100px" />
      <h1>Testimonial</h1>
      <hr />
      <S.CommentsWrapper>
        <S.ProfilesWrapper>
          <S.Perfil onClick={() => setCommentId(1)}>
            <S.Photo />
            <span>
              <h1>Bernes</h1>
              <p>Teacher at Digital house</p>
            </span>
          </S.Perfil>
          <S.Perfil onClick={() => setCommentId(2)}>
            <S.Photo />
            <span>
              <h1>Rose</h1>
              <p>Jhon Dee Mother</p>
            </span>
          </S.Perfil>
          <S.Perfil onClick={() => setCommentId(3)}>
            <S.Photo />
            <span>
              <h1>Gabrielle</h1>
              <p>Jhon Dee Wife</p>
            </span>
          </S.Perfil>

          <S.Perfil onClick={() => setCommentId(4)}>
            <S.Photo />
            <span>
              <h1>Dave</h1>
              <p>Jhon Dee Father</p>
            </span>
          </S.Perfil>
        </S.ProfilesWrapper>

        <S.Comment>
          <S.IconWrapper>
            <S.Rating>
              <Image src={Star} width={20} height={20} alt="" />
              <p>5.0 Star Rating</p>
            </S.Rating>
            <span>
              <Image src={Aspa} width={40.96} height={75.1} alt="" />
              <Image src={Aspa} width={40.96} height={75.1} alt="" />
            </span>
          </S.IconWrapper>
          <S.Text>{commentDisplay()}</S.Text>
        </S.Comment>
      </S.CommentsWrapper>
      <Box h="150px" />

      <S.Contact>
        <S.Form onSubmit={sendEmail}>
          <h1>Let me know here.</h1>
          <span>
            <S.Input type="text" placeholder="Full Name" name="user_name" />
            <S.Input
              type="email"
              placeholder="Email address"
              name="user_email"
            />
          </span>
          <S.Input type="text" placeholder="Subjects" name="user_subjects" />
          <S.TextArea name="message" placeholder="Message" />
          <S.Button>
            <Button primary w="250px">
              SEND MESSAGE
              <Box w="20px" />
              <Image src={Send} width={20} height={20} alt="" />
            </Button>
          </S.Button>
        </S.Form>
        <S.Adress>
          <h1>Get In Touch.</h1>
          <S.ContactInfo>
            <S.Row>
              <Image src={Map} width={60} height={60} alt="" />
              <p>São Paulo - SP</p>
            </S.Row>
            <S.Row>
              <Image src={Mail} width={60} height={60} alt="" />
              <p>jhondeepmatos@outlook.com</p>
            </S.Row>
            <S.Row>
              <Image src={Phone} width={60} height={60} alt="" />
              <p>+55 11 981668392</p>
            </S.Row>
            <S.Row>
              <Image src={Phone} width={30} height={30} alt="" />
              <Image src={Phone} width={30} height={30} alt="" />
              <Image src={Phone} width={30} height={30} alt="" />
              <Image src={Phone} width={30} height={30} alt="" />
              <Image src={Phone} width={30} height={30} alt="" />
            </S.Row>
          </S.ContactInfo>
        </S.Adress>
      </S.Contact>
      <Box h="100px" />
    </S.Container>
  );
}
