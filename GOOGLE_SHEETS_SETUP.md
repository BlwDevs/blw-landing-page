# Configuração do Google Sheets para Formulários

Este guia explica como configurar a integração do formulário de contato com Google Sheets.

## Passo 1: Criar o Google Apps Script

1. Acesse [Google Apps Script](https://script.google.com/)
2. Clique em "Novo projeto"
3. Cole o código do arquivo `google-apps-script.js` no editor
4. Renomeie o projeto para "BLW Landing Form Handler"

## Passo 2: Configurar o Google Sheets

1. Crie uma nova planilha no [Google Sheets](https://sheets.google.com/)
2. Renomeie a planilha para "BLW Formulários de Contato"
3. Copie o ID da planilha da URL (parte entre `/d/` e `/edit`)
4. No Google Apps Script, substitua `'SEU_SPREADSHEET_ID_AQUI'` pelo ID real

## Passo 3: Executar Setup Inicial

1. No Google Apps Script, execute a função `initialSetup`
2. Autorize as permissões necessárias
3. Verifique se os cabeçalhos foram criados na planilha

## Passo 4: Implantar como Web App

1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Escolha tipo: "Aplicativo da web"
3. Configurações:
   - Executar como: "Eu"
   - Quem tem acesso: "Qualquer pessoa"
4. Clique em "Implantar"
5. Copie a URL do aplicativo da web

## Passo 5: Configurar Variáveis de Ambiente

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione a URL do Google Apps Script:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
   ```

## Passo 6: Testar a Integração

1. Execute `npm run dev`
2. Preencha e envie o formulário de contato
3. Verifique se os dados aparecem na planilha do Google Sheets

## Estrutura da Planilha

A planilha terá as seguintes colunas:
- **Data/Hora**: Timestamp do envio
- **Nome**: Nome do usuário
- **Email**: Email do usuário
- **Telefone**: Telefone (opcional)
- **Empresa**: Empresa (opcional)
- **Mensagem**: Mensagem do usuário

## Funcionalidades Implementadas

✅ **Envio para Google Sheets**: Dados salvos automaticamente na planilha
✅ **Fallback para WhatsApp**: Se Google Sheets falhar, redireciona para WhatsApp
✅ **Validação de formulário**: Campos obrigatórios validados
✅ **Feedback visual**: Estados de loading, sucesso e erro
✅ **Responsivo**: Funciona em desktop e mobile
✅ **Tema escuro**: Suporte completo ao modo escuro

## Aviso por e-mail

A cada contato novo, o script grava a linha na planilha e manda um e-mail de aviso para `EMAIL_AVISO`
(no topo de `google-apps-script.js`). O título traz o assunto escolhido e o nome, e o botão "Responder"
já escreve para o visitante. Se o e-mail falhar, o contato continua salvo na planilha.

Para ativar, na conta Google dona do script:

1. Cole o `google-apps-script.js` atualizado no editor do Apps Script e salve.
2. Troque `EMAIL_AVISO` pelo e-mail que deve receber os avisos (para mais de um, separe por vírgula).
3. Execute `setupHeaders` uma vez e aceite a nova permissão de enviar e-mail. Sem esse aceite, o envio falha.
4. "Implantar" > "Gerenciar implantações" > lápis > Versão: "Nova versão" > "Implantar".
   A URL continua a mesma, então o `.env` não muda. Sem a nova versão, o site segue usando o script antigo.
5. Envie um contato de teste pelo site e confira a planilha e a caixa de entrada (veja também o spam).

Limite do Gmail comum: 100 e-mails por dia pelo Apps Script.

## Solução de Problemas

### Erro de CORS
- Certifique-se de que o Google Apps Script está implantado como "Aplicativo da web"
- Verifique se o acesso está configurado para "Qualquer pessoa"

### Dados não aparecem na planilha
- Verifique se o ID da planilha está correto no script
- Execute novamente a função `initialSetup`
- Verifique as permissões da planilha

### Formulário não envia
- Verifique se a variável `VITE_GOOGLE_SCRIPT_URL` está configurada
- Abra o console do navegador para ver erros
- Teste se o Google Apps Script responde diretamente