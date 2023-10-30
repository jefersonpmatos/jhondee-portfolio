import Image from "next/image";

import * as S from "../../styles/Footer";

import Hypesoft from "../../images/hypersoft.png";
import { Box } from "../../components/Box";

export default function Footer() {
  return (
    <S.Container>
      <Box h="100px" />
      {/* <Image src={Hypesoft} width={263} height={59} alt="" /> */}
      <p>Made with ❤️ by Jeferson P. Matos</p>
    </S.Container>
  );
}
