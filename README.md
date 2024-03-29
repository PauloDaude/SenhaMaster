# SenhaMaster 🔑

O Aplicativo SenhaMaster se trata de um Gerador de senha aleatória que são armazenadas no aplicativo, com a possibilidade de excluí-las também. Esse projeto foi originalmente feito em um vídeo pelo canal Sujeito Programador, mas foi aperfeiçoado por mim, com adições de features que achei que seria útil.

## Download do Aplicativo 📲

Link ⭢ https://expo.dev/artifacts/eas/g8N6FTwMSZEjuRhUWHEG1A.apk

**Telas**:

<div>
  <img src="https://i.ibb.co/Fqw8NwZ/tela1.jpg" alt="Início" style="width: 150px">
  <img src="https://i.ibb.co/SrfLnSC/tela2.jpg" alt="Início" style="width: 150px">
  <img src="https://i.ibb.co/yqj59RM/tela3.jpg" alt="Início" style="width: 150px">
  <img src="https://i.ibb.co/jwVDShN/tela4.jpg" alt="Início" style="width: 150px">
  <img src="https://i.ibb.co/G0c3JFV/tela5.jpg" alt="Início" style="width: 150px">
</div>

## Tecnologias usadas 🛠️

- **React Native**: Um framework de desenvolvimento mobile que permite criar aplicativos nativos para iOS e Android usando JavaScript e React.
- **Expo**: Uma plataforma que possui um conjunto de ferramentas e serviços que aceleram o desenvolvimento e ajudam a criar aplicativos universais nativos.
- **React Navigation**: Uma biblioteca popular para navegação em aplicativos React Native. Ele oferece uma maneira fácil de configurar e gerenciar a navegação entre diferentes telas e fluxos de um aplicativo.
- **AsyncStorage**: Uma API para armazenamento que permite armazenar dados de forma assíncrona no dispositivo do usuário, útil para salvar dados localmente.

## Funcionalidades 🎯

- **Geração de senha**: Ao definir quantos caracteres a senha terá (entre 6 a 20), o aplicativo gerará uma senha aleatória que contenha [a-z, A-Z, 0-9 e símbolos].
- **Armazenamento das senhas**: Depois de criar a senha aleatória, ela é armazenada no dispositivo do usuário, através do **AsyncStorage**.
  ### Features Extras:
  - **Etiqueta para a senha**: Muito útil para identificar para onde aquela senha é destinada.
  - **Exclusão de senhas**: Achei útil para o usuário ter a liberdade de excluir senhas desnecessárias.
  - **Copiar senha**: Adicionei um ícone de cópia no campo da senha já gerada, para ficar fácil de usá-la.
  - **Ocultar senha**: Por se tratar de senha, então ocultá-las de primeiro momento é importante.

## Instalação ⚙️

É necessário ter o **node** instalado na máquina para rodar o projeto ⭢ https://nodejs.org/en

Para fazer a instalação desse projeto é bem simples:

1. Primeiro faça um clone do repositório com o comando `git clone https://github.com/PauloDaude/SenhaMaster.git`
2. Navegue até a pasta **SenhaMaster** ⭢ `cd SenhaMaster/`
3. Depois abra o repositório no seu editor de código de preferência e execute o comando no terminal `npm install`
4. Agora que todas dependências foram instaladas, rode o comando `npx expo start`

E pronto, projeto devidamente instalado! \
Agora aperte a tecla `a` no terminal que abrirá um emulador de android que estiver instalado, ou acesse pelo seu celular mesmo, escaneando o QRcode através do Aplicativo **Expo Go**.
