import React from 'react';
import './App.css';
import { CardGitHub } from './components/CardGitHub/CardGitHub';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQE-NDko2vwwdQ/profile-displayphoto-shrink_800_800/0/1653049084082?e=1658966400&v=beta&t=EsKWL4juyJ_gh7OHN6Z9X6P9qMfW1frarNCjItcqD9Q"
          nome="Leonardo Santino"
          descricao="Oi, eu sou o Leonardo Santino. Estudante de desenvolvimento web Full Stack na Labenu e desenvolvedor no Grupo Boticário. Adoro ver séries na Netflix e comer batata frita."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/1665/1665739.png"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
      <CardPequeno imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178283.png?token=exp=1653571729~hmac=ce8bd99ccd7b622517b6507d19c3e899" titulo="E-mail" descricao="leonardosantino@email.com"></CardPequeno>
      <CardPequeno imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178283.png?token=exp=1653571729~hmac=ce8bd99ccd7b622517b6507d19c3e899" titulo="Endereço" descricao="Rua das Oliveiras, 233 - Recife"></CardPequeno>

      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQE2uTXvISMMwA/company-logo_200_200/0/1625143274996?e=1661385600&v=beta&t=IB_HYPduOgDUkn2mFNgbuwrJSwAuak5xEZwWiwhKZTo"
          nome="Grupo Boticário"
          descricao="Desenvolvedor web Full Stack"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHKL-f131AG0g/company-logo_200_200/0/1641815739362?e=1661385600&v=beta&t=y4dXF1qBWzTVDpJsw6UogvwAgteScn9rOkdmIweJ7Xc"
          nome="EMTU"
          descricao="Estágiario - Auditoria Interna"
        />
      </div>

      <div className="page-section-container">
        <h2>GitHub</h2>
        <CardGitHub imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" titulo="Siga-me no GitHub"></CardGitHub>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
