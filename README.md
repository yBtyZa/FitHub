# FitHub!

O FitHub! é um portal que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas.

## Funcionalidades Principais

1. **Visualização de Locais**: Exibição clara dos locais já cadastrados na plataforma, com mapas interativos.

2. **Cadastro de Locais**: Os usuários podem facilmente adicionar novos locais, adicionando endereço e uma pequena descrição para outros usuários interessados 

3. **Atualização de Locais**: Os usuários podem editar e excluir locais cadastrados pelos mesmos.

4. **Perfil**: O sistema oferece edição e exclusão de perfil do usuário, como mudança de endereço e senha.

5. **Comunidade**: Possibilidade de compartilhar locais com outros usuários, facilitando o acesso e conhecimento de novos locais.

## Como Usar

1. **Cadastro de Usuário**: Para utilizar o sistema, é necessário criar uma conta de usuário fornecendo dados pessoais, email e senha.

<p align="center">
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/48526983-7f22-43e9-8356-714344e8e54d" alt="Imagem 1" width="400" />
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/07d8ffaa-6735-4523-8c62-96161f0b0de1" alt="Imagem 2" width="400" />
</p>

2. **Dashboard**: Após o login, os usuários teram uma visão geral do portal, um mapa com todos os locais cadastrados e cards unicos de locais.

<p align="center">
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/0ddded19-6b78-4977-b236-3dfdd31cab1b" alt="Imagem 1" width="400" />
</p>

3. **Adicionar Locais**: Os usuários podem começar a adicionar tarefas clicando no botão "Cadastrar Locais" e preenchendo os detalhes necessários.

<p align="center">
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/ac99a832-82c1-4ffe-b265-b1c0a18e726d" alt="Imagem 1" width="400" />
</p>

4. **Gerenciar Locais**: As tarefas adicionadas serão exibidas no "Dashboard" e na página "Meus Locais" , onde os usuários podem visualizar, editar ou excluir conforme necessário.
 
<p align="center">
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/f50a2ad2-7f1d-4b0d-a9b5-ed207406db8a" alt="Imagem 1" width="400" />
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/152b12e0-aa80-482a-91a4-a4f8982a8a05" alt="Imagem 2" width="400" />
</p>

5. **Gerenciar Perfil**: Na página "Perfil", os usuários teram acesso ao gerenciamento de dados pessoais, como editar endereço e senha, e até mesmo excluir o perfil (se não houver locais vinculados)

<p align="center">
  <img src="https://github.com/yBtyZa/FitHub/assets/112644708/84944b53-cea0-4887-a3ff-51b17bbd8ef5" alt="Imagem 1" width="400" />
</p>

**Este projeto é responsivo e se adapta automaticamente a diferentes dispositivos, proporcionando uma experiência de usuário consistente em desktops, tablets e smartphones.**

## Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Bibliotecas Utilizadas

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![MUI](https://img.shields.io/badge/MUIIcons-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![JSON server](https://img.shields.io/badge/JSONserver-%23FF2D20.svg?style=for-the-badge)
![Leaflet](https://img.shields.io/badge/Leaflet-%230081CB.svg?style=for-the-badge)

## API's Utilizadas

:heavy_check_mark:`Via CEP`
:heavy_check_mark:`JSON-server - API RESTful fake`

## Instalação

1. Clone o repositório:
```
git clone https://github.com/yBtyZa/FitHub
```
2. Navegue até o diretório do projeto:
```
cd FitHub
```
3. Instale as dependências:
```
npm install
```
4. Inicie o Visual Studio Code:
```
code .
```
5. Abra dois terminais para iniciarmos os servidores.
6. Inicie o servidor do JSON server:
```
npm run server
```
7. Inicie o servidor da aplicação:
 ```
npm run dev
```
8. Acesse a aplicação em seu navegador através do endereço disponibilizado no terminal:
```
➜  Local:   http://localhost:5173/"
```

## Melhorias futuras

Além das funcionalidades atuais, algumas melhorias futuras podem ser consideradas para tornar o FitHub ainda mais útil e completo:

- **APIs Externas**: Adição de API de condernadas.
- **Back-end**: Desenvolvimento de back-end da aplicação.
- **Integração de Comentários e avaliações**: Adicionar a capacidade para os usuários deixarem comentários e avaliações nos locais cadastrados.
- **Notificações em Tempo Real**: Implementar notificações em tempo real para informar os usuários sobre novos locais adicionados, atualizações em locais existentes ou interações dos usuários.
- **Sistema de Busca Avançada**: Desenvolver um sistema de busca avançada que permita aos usuários pesquisar locais com base em critérios específicos, como tipo de atividade, localização, avaliações, etc.
- **Internacionalização e Localização**: Adicionar suporte para múltiplos idiomas e formatos de data, tornando o FitHub acessível para usuários em diferentes regiões do mundo.

## Redes Sociais

- <a href="https://www.linkedin.com/in/gbetsa/">LinkedIn</a>
- <a href="https://www.instagram.com/_gbetsa/">Instagram</a>

![Desenvolvido por Guilherme Betsa](https://img.shields.io/badge/Desenvolvido%20por-Guilherme%20Betsa-blue)
