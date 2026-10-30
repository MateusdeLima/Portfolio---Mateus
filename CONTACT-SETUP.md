# Configuração do formulário de contato

O formulário envia o assunto, o corpo da mensagem e o e-mail informado pela pessoa para uma função da Vercel. A função usa a API do Resend para encaminhar o e-mail para `silvamateusdelima99@gmail.com`. O endereço informado por quem envia é usado como Reply-To, para que você possa responder diretamente.

A chave do Resend fica somente no servidor, nas variáveis de ambiente da Vercel. Ela não deve ser adicionada ao HTML, ao JavaScript do navegador nem ao Git.

## O que você precisa ter

- Uma conta na [Vercel](https://vercel.com/), conectada ao repositório do portfólio.
- Uma conta na [Resend](https://resend.com/).
- Um domínio próprio cujo DNS você possa editar. A Resend exige um domínio remetente verificado; não use seu endereço Gmail como remetente.

## Passo a passo para ativar em produção

### 1. Verifique um domínio na Resend

1. Acesse [resend.com/domains](https://resend.com/domains) e entre na sua conta.
2. Adicione um domínio que você controla. Se ainda não tem um, será necessário registrar um domínio antes de prosseguir.
3. Na página do domínio, copie os registros DNS que a Resend mostrar (por exemplo, os registros de envio de e-mail e de autenticação).
4. Abra o painel da empresa onde o domínio/DNS é administrado e crie os registros exatamente como a Resend indicou. Não apague registros existentes sem confirmar para que servem.
5. Volte à Resend e use **Verify**. A propagação do DNS pode levar algum tempo; aguarde até o domínio aparecer como verificado.

O endereço remetente precisa usar esse domínio. Por exemplo, se verificar `seudominio.com`, você pode configurar `Mateus <contato@seudominio.com>`. O endereço não precisa ser uma caixa postal que receba respostas: as respostas irão para o e-mail preenchido no formulário. O destinatário continua sendo o Gmail definido no endpoint.

### 2. Crie uma chave de API na Resend

1. Abra [resend.com/api-keys](https://resend.com/api-keys).
2. Crie uma chave com permissão de envio de e-mails e guarde o valor exibido.
3. Trate essa chave como senha: não a envie em mensagens, não a coloque no repositório e não a adicione a variáveis públicas como `VITE_*` ou `NEXT_PUBLIC_*`.

Se uma chave for exposta, revogue-a na Resend e crie outra.

### 3. Conecte o repositório à Vercel

1. No painel da Vercel, escolha **Add New → Project**.
2. Importe o repositório GitHub do portfólio.
3. Se solicitado, selecione a pasta raiz do repositório como **Root Directory** e escolha **Other** como framework. Deixe os campos de build e diretório de saída sem sobrescritas, a menos que seu projeto Vercel já use uma configuração própria. O projeto é um site estático com a função serverless em `api/contact.js`; não precisa instalar dependências.
4. Conclua a importação e aguarde o primeiro deploy.

Se o projeto já estiver conectado à Vercel, mantenha a configuração existente e siga para as variáveis de ambiente.
As alterações locais precisam ser enviadas ao branch GitHub conectado à Vercel para aparecerem no deploy. Não inclua `.env.local` nem a chave da Resend nesse envio.

### 4. Configure as variáveis de ambiente

Na Vercel, abra **Project → Settings → Environment Variables** e adicione:

| Nome | Valor |
|---|---|
| `RESEND_API_KEY` | A chave criada na Resend |
| `RESEND_FROM_EMAIL` | Um remetente no domínio verificado, por exemplo `Mateus <contato@seudominio.com>` |

Defina `RESEND_API_KEY` como **Secret** e `RESEND_FROM_EMAIL` como **Config**. Marque **Production**. Marque **Preview** também se quiser testar em deploys de preview; use valores válidos para esse ambiente. Não há motivo para marcar **Development** se você não for executar o projeto localmente.

Salve as variáveis e faça um novo deploy (ou use **Redeploy**). Variáveis adicionadas depois de um deploy só ficam disponíveis em novos deploys.

### 5. Teste o formulário

1. Abra o endereço de produção da Vercel e vá até **Open Comm-Link**.
2. Preencha o assunto, a mensagem e um e-mail ao qual você tenha acesso.
3. Envie o formulário e aguarde a animação do sabre e o estado de envio.
4. Confirme a mensagem de sucesso na página e procure o e-mail em `silvamateusdelima99@gmail.com` (verifique também Spam).
5. Use **Responder** no e-mail recebido e confirme que a resposta vai para o e-mail preenchido no formulário.
6. Se falhar, consulte **Project → Logs** na Vercel para a função `/api/contact` e confira **Emails** na Resend. O site não mostra detalhes internos nem a chave da API.

O endpoint retorna erro de configuração (`503`) até que as duas variáveis estejam cadastradas e o projeto tenha sido redeployado.

### 6. Limite envios repetidos na Vercel

O endpoint valida o tamanho e o formato dos campos e inclui um campo invisível contra bots. Para limitar requisições repetidas no servidor, configure também uma regra no Firewall da Vercel:

1. Abra o projeto na Vercel e entre em **Firewall → Configure → New Rule**.
2. Dê um nome como `Contact form rate limit`.
3. Configure as condições para corresponder ao caminho `/api/contact` e ao método `POST`.
4. Em **Then**, escolha **Rate Limit**, estratégia **Fixed Window**, janela de `60 seconds` e limite de `5 requests`.
5. Use o IP de origem como chave e mantenha a resposta padrão `429` para requisições limitadas.
6. Salve a regra, revise as alterações e publique-as.

A Vercel oferece essa função em todos os planos. Os contadores são regionais, então esse limite é uma proteção contra excesso, não uma garantia de limite global exato.

## Teste local (opcional)

1. Instale o [Node.js](https://nodejs.org/) e a [Vercel CLI](https://vercel.com/docs/cli).
2. Instale a CLI em um terminal com `npm install --global vercel`.
3. Na pasta do projeto, execute `vercel login` e depois `vercel link` para vincular a pasta ao projeto Vercel.
4. No PowerShell, crie o arquivo local com `Copy-Item .env.example .env.local` e abra-o com `notepad .env.local`. Substitua os exemplos pelos valores reais da Resend.
5. Execute `vercel dev` e abra a URL local indicada pela CLI.
6. Faça um envio de teste e confirme o recebimento. Chamadas locais também enviam e-mails reais pela sua conta Resend.

Nunca compartilhe nem faça commit de `.env.local`.

## Comportamento e limites

- O assunto aceita até 120 caracteres; a mensagem, até 5.000; o e-mail é validado antes do envio.
- Há um campo invisível contra envios automatizados. O endpoint também aceita somente requisições JSON por `POST`.
- O formulário usa texto simples no e-mail e não aceita anexos.
- Sem domínio remetente verificado e as variáveis configuradas, o envio real não pode ser ativado. Não substitua isso por uma chave exposta no navegador.

## Referências oficiais

- [Resend: enviar e-mails pela API](https://resend.com/docs/api-reference/emails/send-email)
- [Resend: domínios verificados](https://resend.com/docs/dashboard/domains/introduction)
- [Vercel: funções Node.js](https://vercel.com/docs/functions/runtimes/node-js)
- [Vercel: variáveis de ambiente](https://vercel.com/docs/environment-variables)
- [Vercel: limite de requisições no Firewall](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting)
