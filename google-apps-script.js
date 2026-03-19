function doPost(e) {
  try {
    let data = {};
    
    // Verificar se é JSON ou form data
    if (e.postData && e.postData.type === 'application/json') {
      // Dados JSON (método anterior)
      const raw = e.postData.contents || '{}';
      data = JSON.parse(raw);
    } else if (e.parameter) {
      // Dados de formulário HTML
      data = e.parameter;
    } else {
      throw new Error('Nenhum dado recebido');
    }
    
    console.log('Dados recebidos:', data);

    // Abrir a planilha pelo ID
    const ss = SpreadsheetApp.openById('1RyOz552hUprynnCR8BSynB2mR0JsEo4gdigPZO6EM9Q');
    const sheet = ss.getSheetByName('Leads');

    // Extrair os dados (apenas os campos que existem no formulário)
    const nome = data.nome || '';
    const email = data.email || '';
    const telefone = data.telefone || '';
    const mensagem = data.mensagem || '';
    const origem = 'Website BLW'; // Valor fixo para origem

    // Adicionar linha na planilha (seguindo a ordem do seu script original)
    sheet.appendRow([nome, email, telefone, mensagem, origem, new Date()]);
    
    console.log('Dados salvos com sucesso');

    // Para formulários HTML, redirecionar para uma página de sucesso
    if (e.parameter) {
      return HtmlService.createHtmlOutput(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Mensagem Enviada</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
            }
            .container {
              background: white;
              color: #333;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.2);
              max-width: 500px;
              margin: 0 auto;
            }
            .success-icon {
              font-size: 60px;
              color: #4CAF50;
              margin-bottom: 20px;
            }
            h1 { color: #4CAF50; margin-bottom: 20px; }
            p { margin-bottom: 30px; line-height: 1.6; }
            .btn {
              background: #667eea;
              color: white;
              padding: 12px 30px;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              cursor: pointer;
            }
            .btn:hover { background: #5a6fd8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success-icon">✓</div>
            <h1>Mensagem Enviada com Sucesso!</h1>
            <p>Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.</p>
            <a href="https://blwdevs.netlify.app" class="btn">Voltar ao Site</a>
          </div>
          <script>
            // Redirecionar automaticamente após 5 segundos
            setTimeout(function() {
              window.location.href = 'https://blwdevs.netlify.app';
            }, 5000);
          </script>
        </body>
        </html>
      `);
    } else {
      // Para requisições JSON, retornar JSON
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true, message: 'Dados salvos com sucesso!' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (err) {
    console.error('Erro:', err);
    
    // Para formulários HTML, mostrar página de erro
    if (e.parameter) {
      return HtmlService.createHtmlOutput(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Erro no Envio</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px;
              background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
              color: white;
            }
            .container {
              background: white;
              color: #333;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.2);
              max-width: 500px;
              margin: 0 auto;
            }
            .error-icon {
              font-size: 60px;
              color: #ff6b6b;
              margin-bottom: 20px;
            }
            h1 { color: #ff6b6b; margin-bottom: 20px; }
            p { margin-bottom: 30px; line-height: 1.6; }
            .btn {
              background: #ff6b6b;
              color: white;
              padding: 12px 30px;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              cursor: pointer;
            }
            .btn:hover { background: #ff5252; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="error-icon">✗</div>
            <h1>Erro no Envio</h1>
            <p>Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato conosco diretamente.</p>
            <a href="https://blwdevs.netlify.app" class="btn">Voltar ao Site</a>
          </div>
        </body>
        </html>
      `);
    } else {
      // Para requisições JSON, retornar erro JSON
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
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
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

/**
 * Função OPTIONS para lidar com requisições preflight CORS
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
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