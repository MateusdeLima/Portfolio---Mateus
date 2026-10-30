# Configuração do formulário de contato

O formulário envia o assunto, a mensagem e o e-mail para resposta ao EmailJS. O serviço de e-mail conectado ao EmailJS encaminha a mensagem para `silvamateusdelima99@gmail.com`. O endereço informado no formulário é usado somente como **Reply-To**; o remetente continua sendo a conta Gmail que você conectou.

Esta integração funciona em um site estático e não exige domínio próprio, servidor, função da Vercel ou variáveis secretas no site. O plano gratuito do EmailJS tinha 200 solicitações mensais no momento desta verificação; consulte a [página de preços](https://www.emailjs.com/pricing/) para confirmar os limites atuais. A API também limita os envios a uma solicitação por segundo.

## 1. Publique o site na Vercel

1. Importe o repositório do portfólio na [Vercel](https://vercel.com/) ou use o projeto que já está conectado.
2. Aguarde o deploy e abra o endereço gratuito `*.vercel.app` atribuído ao projeto. Não é necessário comprar um domínio.
3. Anote o hostname exibido na Vercel, por exemplo `meu-portfolio.vercel.app`. Você vai cadastrá-lo no reCAPTCHA.

O formulário não enviará mensagens até que as etapas de configuração abaixo sejam concluídas.

## 2. Conecte sua conta Gmail ao EmailJS

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/) e confirme o acesso.
2. No painel, abra **Email Services** e escolha **Add New Service**.
3. Selecione **Gmail**, conecte a conta que enviará os e-mails e autorize o acesso solicitado pelo Google.
4. Salve o serviço e anote o **Service ID** exibido.

Use a conta Gmail que deve enviar e receber as mensagens. A configuração do destinatário será feita no template, não no código do navegador.

## 3. Crie o template de e-mail

1. Abra **Email Templates** e crie um template.
2. Configure os campos do template:
   - **To Email:** `silvamateusdelima99@gmail.com` (fixo; não use uma variável enviada pelo navegador).
   - **From Name:** algo como `Portfólio - contato`.
   - **Reply-To:** `{{reply_to}}`.
   - **Subject:** `Contato pelo portfólio: {{subject}}`.
   - **Content:** inclua `{{message}}` e, se desejar, `{{reply_to}}` para identificar o endereço de resposta.
3. Salve e anote o **Template ID**.

As variáveis `subject`, `message` e `reply_to` são preenchidas pelo formulário. Ao responder ao e-mail recebido, o Gmail usará o endereço informado pela pessoa.

### Modelo visual em HTML

Na área **Content** do template, escolha **Edit Content → Code Editor**, substitua o conteúdo pelo HTML abaixo e salve. O layout usa tabelas e estilos inline para funcionar melhor em diferentes aplicativos de e-mail; não depende do CSS do site nem de fontes externas.

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>Nova mensagem pelo portfólio</title>
</head>
<body style="margin:0; padding:0; background-color:#070b16; color:#e2e8f0; font-family:Arial, Helvetica, sans-serif;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
    Nova mensagem recebida pelo Comm-Link do portfólio.
  </div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#070b16" style="width:100%; background-color:#070b16;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:620px; border:1px solid #164e63; border-radius:12px; overflow:hidden; background-color:#0f172a;">
          <tr>
            <td style="padding:26px 30px 22px; border-bottom:1px solid #164e63; background-color:#0b1220;">
              <p style="margin:0 0 10px; color:#fbbf24; font-size:11px; font-weight:bold; letter-spacing:3px; text-transform:uppercase;">
                Mateus de Lima Silva <span style="color:#22d3ee;">//</span> Portfólio
              </p>
              <h1 style="margin:0; color:#67e8f9; font-size:23px; line-height:1.35; letter-spacing:1px;">
                NOVA TRANSMISSÃO RECEBIDA
              </h1>
              <p style="margin:10px 0 0; color:#94a3b8; font-size:13px; line-height:1.6;">
                Uma nova mensagem chegou pelo canal de contato.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 30px 10px;">
              <p style="margin:0 0 9px; color:#22d3ee; font-size:11px; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">
                Assunto da proposta
              </p>
              <div style="padding:14px 16px; border:1px solid #164e63; border-left:3px solid #22d3ee; border-radius:6px; background-color:#070b16; color:#f8fafc; font-size:16px; line-height:1.5; overflow-wrap:anywhere;">
                {{subject}}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 30px 10px;">
              <p style="margin:0 0 9px; color:#22d3ee; font-size:11px; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">
                Mensagem
              </p>
              <div style="padding:18px 16px; border:1px solid #1e293b; border-radius:6px; background-color:#111c30; color:#cbd5e1; font-size:15px; line-height:1.75; white-space:pre-wrap; overflow-wrap:anywhere;">{{message}}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 30px 28px;">
              <p style="margin:0 0 8px; color:#94a3b8; font-size:12px; line-height:1.6;">
                Para responder, use a opção <strong style="color:#fbbf24;">Responder</strong> no seu aplicativo de e-mail.
              </p>
              <p style="margin:0; color:#64748b; font-size:12px; line-height:1.6; overflow-wrap:anywhere;">
                E-mail informado: <span style="color:#67e8f9;">{{reply_to}}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="height:3px; background-color:#22d3ee; font-size:0; line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:15px 30px; background-color:#0b1220;">
              <p style="margin:0; color:#64748b; font-size:10px; letter-spacing:2px; text-transform:uppercase;">
                COMM-LINK <span style="color:#fbbf24;">//</span> FIM DA TRANSMISSÃO
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

Mantenha `{{subject}}`, `{{message}}` e `{{reply_to}}` exatamente como estão, incluindo as chaves duplas. O EmailJS substitui esses campos pelos valores enviados pelo formulário. As chaves duplas também fazem escape do conteúdo, o que é mais seguro para texto digitado por visitantes; não troque `{{message}}` por `{{{message}}}`.

## 4. Configure a verificação reCAPTCHA

O site envia uma chave pública do EmailJS no navegador, como previsto pelo serviço. Para reduzir envios automatizados, o formulário exige reCAPTCHA v2 e a verificação do token pelo EmailJS.

1. Abra o [painel de administração do reCAPTCHA](https://www.google.com/recaptcha/admin/create) e registre um site com **reCAPTCHA v2 → “I'm not a robot” Checkbox**.
2. Em domínios permitidos, adicione o hostname da Vercel anotado na etapa 1, sem `https://`, barras ou caminhos. Para testes locais, adicione também `localhost`.
3. Conclua o cadastro e copie a **Site Key** e a **Secret Key**.
4. No EmailJS, abra o template, vá à aba **Settings** e habilite **Enable reCAPTCHA V2 verification**.
5. Cole a **Secret Key** no campo correspondente do EmailJS e salve. Não coloque essa chave no site nem no Git.

O navegador carrega o reCAPTCHA usando a Site Key e envia a resposta junto com o pedido ao EmailJS. O envio é recusado pelo provedor se a pessoa não completar a verificação.

## 5. Preencha a configuração pública do site

1. No EmailJS, abra **Account → General** e copie a **Public Key**.
2. Abra [assets/js/emailjs-config.js](./assets/js/emailjs-config.js) no projeto e substitua os quatro valores de exemplo:

```js
window.EMAILJS_CONFIG = {
  publicKey: 'SUA_PUBLIC_KEY_DO_EMAILJS',
  serviceId: 'SEU_SERVICE_ID',
  templateId: 'SEU_TEMPLATE_ID',
  recaptchaSiteKey: 'SUA_SITE_KEY_DO_RECAPTCHA'
};
```

3. Salve o arquivo e publique as alterações no repositório conectado à Vercel. A Vercel fará um novo deploy.

Esses quatro valores são usados no navegador e ficarão visíveis para qualquer visitante. Isso é esperado para a Public Key e para a Site Key do reCAPTCHA; **não** use a Private Key do EmailJS nem a Secret Key do reCAPTCHA nesse arquivo. A Secret Key deve ficar somente nas configurações do template do EmailJS.

## 6. Faça um teste real

1. Abra a versão publicada do portfólio e vá até **Open Comm-Link**.
2. Preencha o assunto, o corpo da mensagem e um endereço de e-mail seu para resposta.
3. Resolva o reCAPTCHA e envie. O sabre será animado antes do envio.
4. Confirme a mensagem de sucesso e procure o e-mail em `silvamateusdelima99@gmail.com`, inclusive na pasta Spam.
5. Use **Responder** para verificar se a resposta é direcionada ao endereço que você preencheu.

Não é necessário cadastrar variáveis de ambiente na Vercel. O formulário chama a API do EmailJS diretamente; o endpoint antigo da Vercel/Resend foi removido.

## Testes locais

Para testar em `localhost`, cadastre `localhost` também nos domínios do reCAPTCHA e sirva a pasta do projeto por HTTP. Com Python instalado, execute no PowerShell, na pasta do projeto:

```powershell
py -m http.server 8000
```

Abra `http://localhost:8000`. Não abra o arquivo `index.html` diretamente como `file://`, pois o reCAPTCHA e as chamadas de rede podem não funcionar nesse contexto. Envios feitos localmente são reais e chegam à sua caixa de entrada.

## Se algo não funcionar

- **O formulário diz que ainda não está configurado:** confira se os três IDs e as duas chaves públicas em `assets/js/emailjs-config.js` foram preenchidos e se o deploy terminou.
- **O reCAPTCHA não aparece:** confira a Site Key, o hostname autorizado no painel do Google e se o hostname corresponde exatamente ao endereço aberto.
- **A verificação do reCAPTCHA falha:** confira se a Secret Key correta foi salva nas configurações do template EmailJS e se a opção de reCAPTCHA v2 está habilitada.
- **O EmailJS rejeita o envio:** confirme os IDs do serviço/template, os nomes das variáveis e se a conta Gmail conectada continua autorizada. Consulte o histórico de envios no painel EmailJS.
- **Não recebeu a mensagem:** verifique Spam e confirme que o campo **To Email** do template contém `silvamateusdelima99@gmail.com`.

## Referências oficiais

- [EmailJS: serviços de e-mail](https://www.emailjs.com/docs/user-guide/creating-email-service/)
- [EmailJS: templates e variáveis](https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/)
- [EmailJS: envio pela API REST](https://www.emailjs.com/docs/rest-api/send/)
- [EmailJS: verificação reCAPTCHA](https://www.emailjs.com/docs/user-guide/adding-captcha-verification/)
- [EmailJS: preços](https://www.emailjs.com/pricing/)
