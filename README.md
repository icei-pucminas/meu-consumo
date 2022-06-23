
# Meu Consumo

Aplicação destinado ao controle de gasto de água e energia, visando economia e sustentabilidade


## Equipe

- [Antony Rafael de Paula Costa](depaulacostaantony@gmail.com)
- [Breno Moreira Proti de Castro](moreirasgbr@gmail.com)
- [Gabrielle Silva de Paula](ggabriellesilva4@gmail.com)
- [Hugo José Ferreira Moreira](hugojose39@yahoo.com)
- [Maicon Douglas Marcelino](maicondouglasm19@gmail.com )



## Introdução

O projeto tem o objetivo de conscientizar pessoas sobre o desperdício de recursos durante a realização de tarefas rotineiras do dia a dia e também a evitar gastos excessivos de água e energia. A aplicação proporcionará ao usuário ter noção dos gastos gerados pelo consumo. 

No projeto será desenvolvido um Progressive Web App que cronometrará o consumo de acordo com a escolha do cliente. 
## Problema

Em momentos de crises hídricas e ausência de chuvas, o consumo consciente de água e de energia se torna ainda mais importante para a garantia do fornecimento e para a redução das contas de água e de luz.

A demanda por uso de água no Brasil é crescente, com aumento estimado de aproximadamente 80% no total retirado de água nas últimas duas décadas. De acordo com a ANA (Agência Nacional de Águas e Saneamento Básico), a previsão é de que, até 2030, a retirada de recursos hídricos das bacias hidrográficas aumente 23%.
## Objetivos

Elaborar uma aplicação estruturada através da análise de negócio criada de modo a auxiliar o usuário no controle do consumo através das funcionalidades do Meu Consumo. 
## Funcionalidades

- Temas dark e light
- PWA
- Multiplataforma
- Calcular dados de Consumo de Água e Energia

### Requisitos Funcionais
- O sistema deve permitir o usuário crie uma conta
- O sistema deve permitir que o usuário faça login.
- O sistema deve exibir um menu com as funcionalidades.
- O sistema deve permitir que o usuário acesse a funcionalidade de cálculo de consumo;
- Caso o usuário esteja logado, o sistema deve permitir salvar os dados do consumo;
- Caso o usuário esteja logado, o sistema deve permitir que o usuário acesse os relatórios de consumo;
- O sistema deve apresentar dicas de consumo ao usuário;
- Na funcionalidade de consulta de relatório deve possuir filtro para consulta.
- A tela de consumo de água deve ter modalidades de consumo padrão.
- O sistema deve permitir que o usuário logado exclua um registro de consumo salvo;
- O sistema deve permitir que o usuário logado edite dados de cadastro.
### Requisitos não Funcionais
- O sistema deve funcionar de forma responsiva;
- As dicas devem ser exibidas aleatoriamente;


## Screenshots

![App Screenshot](https://i.ibb.co/jJLPd1W/Painel-1.png)
![App Screenshot](https://i.ibb.co/VMCBFrM/Painel.png)

## Stack utilizada

**Front-end:** React, TypeScript, Sass

**Back-end:** Java, Spring, Liquibase, Maven, JWT


## Instalação

Rode o Meu Consumo localmente:

### FrontEnd

```bash
  npm install

  npm start
```

### Backend

```bash
  mvn clean install -U -DskipTests

  docker-compose up -D
```

Como alternativa, você pode utilizar o Kubernetes

### Kubernetes

No diretório Kubernetes/yaml para cada arquivo, executar 

```bash
kubectl apply -f nome-arquivo.yaml
```
## Conclusão

A percepção geral obtida é que, para que um projeto seja bem estruturado é essencial que seja feito o planejamento prévio das necessidades com o levantamento dos requisitos e a criação dos diagramas que geram a visão dos pontos a serem supridos e das ações a serem tomadas, de modo que, caso venha ocorrer algum imprevisto, o mesmo seja bem administrado de forma tal que não prejudique o andamento das atividades.  

Foram criadas diversas percepções de projetos em sua totalidade e ao decorrer da execução foram moldadas visões de como uma elaboração de solução caminha do planejamento a execução. 

Por fim pode-se afirmar que muitos conhecimentos foram adquiridos, e práticas foram criadas, levando uma evolução a todos os integrantes. 
