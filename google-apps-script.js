/** Quem recebe o aviso de cada novo contato. Para mais de um destinatário, separe por vírgula. */
const EMAIL_AVISO = 'blwdevs@gmail.com';

/**
 * Recebe o formulário do site, grava na planilha "Leads" e avisa por e-mail.
 *
 * A resposta é sempre JSON (ContentService). Não troque por HtmlService: uma página HTML sai direto de
 * script.google.com sem o cabeçalho CORS, o navegador do visitante não consegue ler a resposta e o site
 * mostra "não conseguimos enviar" mesmo com a linha já gravada. Com ContentService o Google redireciona
 * para script.googleusercontent.com, que libera a leitura.
 */
function doPost(e) {
  try {
    let data = {};

    // O site envia FormData (e.parameter); JSON também é aceito
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents || '{}');
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('Nenhum dado recebido');
    }

    // Abrir a planilha pelo ID
    const ss = SpreadsheetApp.openById('1RyOz552hUprynnCR8BSynB2mR0JsEo4gdigPZO6EM9Q');
    const sheet = ss.getSheetByName('Leads');

    const nome = data.nome || '';
    const email = data.email || '';
    const telefone = data.telefone || '';
    const mensagem = data.mensagem || '';
    const origem = 'Website BLW'; // Valor fixo para origem

    sheet.appendRow([nome, email, telefone, mensagem, origem, new Date()]);

    // Aviso por e-mail. Se falhar, o contato já está na planilha e o visitante continua vendo o sucesso.
    try {
      avisarPorEmail({ nome, email, telefone, mensagem, planilha: ss.getUrl() });
    } catch (mailErr) {
      console.error('Aviso por e-mail falhou:', mailErr);
    }

    return responder({ ok: true, message: 'Mensagem Enviada com Sucesso' });
  } catch (err) {
    console.error('Erro:', err);
    return responder({ ok: false, error: err.message });
  }
}

/** Resposta em JSON, o único formato que o navegador do visitante consegue ler (ver doPost). */
function responder(corpo) {
  return ContentService
    .createTextOutput(JSON.stringify(corpo))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Tira quebras de linha de um texto que vai para o assunto do e-mail. */
function umaLinha(texto) {
  return String(texto || '').replace(/[\r\n]+/g, ' ').trim();
}

/**
 * Manda para EMAIL_AVISO um resumo do contato. O site grava a mensagem como "[Assunto] texto",
 * então o assunto escolhido no formulário aparece no título do e-mail. "Responder" no e-mail
 * já escreve para o visitante (replyTo).
 */
function avisarPorEmail(lead) {
  const partes = String(lead.mensagem || '').match(/^\[([^\]]+)\]\s*([\s\S]*)$/);
  const assunto = partes ? partes[1] : 'Contato pelo site';
  const texto = partes ? partes[2] : lead.mensagem;

  const opcoes = {
    to: EMAIL_AVISO,
    name: 'Site BLW',
    subject: 'Novo contato pelo site: ' + umaLinha(assunto) + ' · ' + umaLinha(lead.nome),
    body: [
      'Chegou um novo contato pelo site da BLW.',
      '',
      'Assunto: ' + assunto,
      'Nome: ' + lead.nome,
      'E-mail: ' + lead.email,
      'Telefone: ' + (lead.telefone || 'não informado'),
      '',
      'Mensagem:',
      texto,
      '',
      'Todos os contatos: ' + lead.planilha,
    ].join('\n'),
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) opcoes.replyTo = lead.email;

  MailApp.sendEmail(opcoes);
}

/**
 * Função GET para testar se o script está funcionando
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      message: 'Google Apps Script está funcionando!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Função para configurar os cabeçalhos da planilha (execute uma vez)
 */
function setupHeaders() {
  try {
    const ss = SpreadsheetApp.openById('1RyOz552hUprynnCR8BSynB2mR0JsEo4gdigPZO6EM9Q');
    let sheet = ss.getSheetByName('Leads');
    
    // Se a aba não existir, criar
    if (!sheet) {
      sheet = ss.insertSheet('Leads');
    }
    
    // Adicionar cabeçalhos se a primeira linha estiver vazia
    if (sheet.getRange(1, 1).getValue() === '') {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Nome', 'Email', 'Telefone', 'Mensagem', 'Origem', 'Data/Hora']
      ]);
      
      // Formatar cabeçalhos
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    console.log('Setup inicial concluído com sucesso!');
    return 'Setup inicial concluído com sucesso!';
    
  } catch (error) {
    console.error('Erro no setup inicial:', error);
    throw error;
  }
}