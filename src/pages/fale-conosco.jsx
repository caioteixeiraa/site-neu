import * as React from 'react';
import { Banner4 } from '../Assets/Components/banner4';
import { Footer } from '../Assets/Components/footer';
import ScrollUpButton from 'react-scroll-up-button';
import { FaleConoscoComponent } from '../Assets/Components/fale-conosco-component';
import { BannerFaleConosco } from '../Assets/Components/banner-fale-conosco';

export class FaleConosco extends React.Component {
  render() {
    return (
      <div className="">
        <ScrollUpButton />
        <div id="fale-conosco-banner">
          <BannerFaleConosco />
        </div>
        <FaleConoscoComponent
          title="Fale conosco"
          subtitle="Ficou interessado nos nossos projetos?"
          text={["Entre em contato com o NEU! Nós estamos abertos a parcerias e a interessados em nos ajudar a fomentar o empreendedorismo na USP."]} />
        <Footer />
      </div>
    );
  }
}

export default FaleConosco;