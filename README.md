# Projeto Base Angular
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Sumário
- [Por que estruturar as pastas do projeto Web?](#estrutura)

## <a name=estrutura><a/> Por que estruturar as pastas do projeto Web?

Melhores práticas trazem benefícios concretos para a empresa. Seguir uma boa prática é como um atalho. Existem outros caminhos. Às vezes não sabemos o porquê do atalho. Mas seguir por ele aumenta as chances de sucesso. Os benefícios a longo prazo trazem ganhos na qualidade do software.

## Escalabilidade

O código será mais simples escalar. Adicionar novos componentes, módulos e páginas não provoca inchaço as pastas existentes. Mantém a complexidade do sistema baixo. Logo a integração de novos desenvolvedores será uma tarefa tranquila. Além disso, com essa abordagem, é relativamente simples descartar recursos dentro e fora do aplicativo. Testar uma nova funcionalidade ou removê-la será fácil.

## Debugar

Debugar o código será mais transparente com essa abordagem modularizada. Manter uma estrutura coesa traz benefícios para encontrar bugs e corrigi-los.

## A estrutura

Abaixo a estrutura proposta para projetos de grande porte:

```
|-- modules

    |-- module1
        |-- [+] components
        |-- module1.service.ts
        |-- module1.module.ts
        |-- module1.routes.ts

    |-- module2 
        |-- [+] components
        |-- module2.service.ts
        |-- module2.module.ts
        |-- module2.routes.ts

|-- shared
        |-- [+] components
        |-- [+] mocks
        |-- [+] models
        |-- [+] directives
        |-- [+] pipes

|-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] mocks
        |-- [+] services
        |-- [+] header

|-- app.module.ts
|-- app.component.ts
```

## Módulos - Lazy Load

Módulos lazy loaded ajudam a diminuir o tempo de inicialização da aplicação. Com o lazy load, o aplicativo não precisa carregar tudo de uma só vez. Ele só vai carregar o que o usuário espera ver. O módulo só irá carregar quando o usuário navegar para sua rota.

Perfeito para aplicações grande, combina com o interesse do usuário e organiza a estrutura. Todo o conteúdo do módulo está diretamente relacionado com a rota. Logo faz sentido os componentes estarem dentro do módulo.

Trabalhar com módulos há ganhos significativos na inicialização da aplicação. É inimaginável uma aplicação Angular de médio porte sem módulos lazy load. E essa estrutura é coesa, mantém os grupos de interesse dentro de um mesmo local.

## Core

O core module deve conter serviços singleton, componentes universais e outros recursos em que há uma instância única. Autenticação, header, interceptors são exemplos de componentes que terá apenas uma instância ativa para a aplicação e será utilizado praticamente por todos os modules.

## Shared

O shared é onde todos os componentes compartilhados, pipes, filters e services devem ir. O shared pode ser importado em qualquer module. Assim esses itens serão reutilizados. O shared module deve ser independente do restante do aplicativo. Portanto, não deve ter referências de outro módulo.

Créditos: [Angular - Como estruturar componentes em grandes projetos](https://www.brunobrito.net.br/estruturando-components-angular/)